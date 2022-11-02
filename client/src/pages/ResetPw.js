import { useRef, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../components/User/resetpw.scss'
import { AuthContext } from "../context/AuthContext";
import { logout } from "../apiCalls"

const BACK_SERVER = process.env.REACT_APP_URL + "/api";

const ResetPw = () => {
  const [resetText, setResetText] = useState();
  const [resetWarning, setResetWarning ] = useState();
  const resetPW = useRef();
  const resetPWCheck = useRef();
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);

  const location = useLocation();
  console.log(location);
  const id = location.state.id;
  const email = location.state.email;

  const OnChange = (e) => {
    const regExp  = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+])(?=.*[0-9]).{8,20}$/
    console.log(regExp .test(e.target.value))
    if (!regExp .test(e.target.value)) {
      setResetWarning('error')
      setResetText('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
      
    } else {
      setResetWarning('success')
      setResetText('사용가능한 비밀번호 입니다.')
    
    }
  }

  const ResetOnChange = (e) => {
     if (resetPW.current.value !== e.target.value ) {
      setResetWarning('error');
      setResetText('비밀번호가 일치하지 않습니다. 다시 입력해 주세요');
    }else {
      setResetWarning('success');
      setResetText('비밀번호가 일치합니다.');
    }
  }

  console.log(id)
  // console.log(password);
  
  const changePW = async () => {
    if (resetPWCheck.current.value === ""){
      setResetWarning('error');
      setResetText('비밀번호를 작성해 주세요.');
      return
    }
      const result = await axios.post(BACK_SERVER + "/users/resetPW", {id: id, password: resetPW.current.value});
      console.log(result.data);
      alert("비밀번호 변경 완료! 변경하신 비밀번호로 다시 로그인해주시기 바랍니다.");
      console.log(id)
      logout(dispatch);
      if ( result.status === 200 ) { navigate('/login') }
  }

  const cancel = () => {
    navigate(-1);
}
    return(
        <div className='ResetPw'>
            <form>
                <div className='resetpwTitle'>비밀번호 변경</div>
                <label className='labels'>이메일</label>
                <input className='inputs' value={email} style={{backgroundColor: "lightgray"}} readOnly></input>

                <label className='labels'>아이디</label>
                <input className='inputs' value={id} style={{backgroundColor: "lightgray"}} readOnly></input>
                
                <label className='labels'>비밀번호</label>
                <input className='inputs' type='password' placeholder='8~20자의 영문,숫자,특수문자(!@#$%^&*) 조합' name="password" onChange={OnChange}  ref={resetPW} required></input>
                
                <label className='labels'>비밀번호 확인</label>
                <input className='inputs' type='password' placeholder='비밀번호를 한번 더 입력해 주세요.' name="password" onChange={ResetOnChange} ref={resetPWCheck} required></input>
                <p className={resetWarning}>{resetText}</p>
                <div className='btns'>
                  <button type='button' className='btn2' onClick={changePW}>비밀번호 변경</button>
                  <button type="button" className="btn2" onClick={cancel} >취소</button>  
                </div>
            </form>      
        
        </div>
    );
}

export default ResetPw;