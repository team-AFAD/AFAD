import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './findid.scss'

const BACK_SERVER = "http://localhost:8080/api";

function FindId_Code (props) {
    const [ text, setText ] = useState("");
    const [ warning, setWarning ] = useState();
    const [ userId , setUserId ] = useState();
    const [ userEmail, setUserEmail ] = useState();
    const [ find , setFind ] = useState(false);
    const navigate = useNavigate();
    const codeInput = useRef();

    const findId = async () => {
        if (codeInput.current.value == props.code) {
            const idResult = await axios.post(BACK_SERVER + "/users/findId", {email: props.input.current.value});
            console.log(idResult);
            const id = idResult.data.id;
            console.log(id);
            if (id == null) {
                setWarning('error')
                setText('존재하지 않는 아이디');

            } else {
                console.log(id.identity);
                setFind(true)
                setUserEmail(props.input.current.value);
                setUserId(id.identity);
                setWarning('success');
                setText('인증 완료!')
            }

        } else {
            setWarning('error')
            setText('인증 실패!');
        }
    }


    return (
        <div >
            {
                find == false ? 
            (
            <div>
                <label className='labels'>
                    <input className='inputs'  type="text" name="code" placeholder="인증코드 5자리를 입력해주세요." ref={codeInput} />
                </label>
                <p className={warning}>{text}</p>
                <button type="button" className="btn" onClick={findId}>아이디 찾기</button>
            </div>
            ) 
            : 
            (<div>
                <p className='pId'>고객님의 아이디는 <span className='spanId'>{userId}</span>입니다.</p>
                <div className='btns'>
                    <button className="btn2" onClick={() => navigate('/login')}>로그인하러 가기</button>
                    <button className="btn2" onClick={() => navigate('/resetpw', { state: { id: userId , email: userEmail }})}>비밀번호 변경</button>
                </div>
            </div> )
            }
        </div>
    )
}

export default FindId_Code;