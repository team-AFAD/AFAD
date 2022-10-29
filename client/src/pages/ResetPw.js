import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from "../context/AuthContext";

const BACK_SERVER = "http://localhost:8080/api";

const ResetPw = () => {
  const [resetText, setResetText] = useState();
  const [resetWarning, setResetWarning ] = useState();
  const resetPW = useRef();
  const resetPWCheck = useRef();
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);
  const id = location.state.id;
  const email = location.state.email;

  const ResetOnChange = (e) => {
    const button_click = document.querySelector('.reset_btn');

    if (resetPW.current.value != e.target.value ) {
      setResetWarning('reset_warning');
      setResetText('비밀번호가 다릅니다.');
      button_click.disabled = true;
      button_click.style.cursor = 'not-allowed';
    }else {
      setResetWarning('reset_checking');
      setResetText('비밀번호가 같습니다.');
      button_click.disabled = false;
      button_click.style.cursor = 'pointer';
    }
  }
  console.log(id)
  // console.log(password);
  
  const changePW = async () => {
      const result = await axios.post(BACK_SERVER + "/users/resetPW", {id: id, password: resetPW.current.value});
      console.log(result.data);
      alert("비밀번호 변경 완료! 변경하신 비밀번호로 다시 로그인해주시기 바랍니다.");
      console.log(id)
      // if ( result.status == 200 ) { navigate('/login') }
  }
    return(
        <>
            <h1>비밀번호 변경</h1>
            <form>
                <input value={email} readOnly></input><br />
                <input value={id} readOnly></input><br />
                <input type='password' placeholder='비밀번호' name="password" ref={resetPW} required></input><br />
                <input type='password' placeholder='비밀번호 확인' name="password" onChange={ResetOnChange} ref={resetPWCheck} required></input><br />
                <button type='button' className='reset_btn' onClick={changePW}>비밀번호 변경</button>     
                <p>{resetText}</p>
            </form>      
        
        </>
    );
}

export default ResetPw;