import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BACK_SERVER = "http://localhost:8080/api";

function FindId_Code (props) {

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
                props.setText('존재하지 않는 아이디');

            } else {
                console.log(id.identity);
                setFind(true)
                setUserEmail(props.input.current.value);
                setUserId(id.identity);
                props.setText('인증 완료!')
            }

        } else {
            props.setText('인증 실패!');
        }
    }


    return (
        <div >
            {
                find == false ? 
            (<div><input type="text" name="code" placeholder="인증코드 5자리를 입력해주세요." ref={codeInput} />
            <button type="button" onClick={findId}>아이디 찾기</button></div>) 
            : 
            (<div>
                <p>고객님의 아이디는 <span>{userId}</span>입니다.</p>
                <div>
                    <button onClick={() => navigate('/login')}>로그인하러가기</button>
                    <button onClick={() => navigate('/resetpw', { state: { id: userId , email: userEmail }})}>비밀번호 재설정</button>
                </div>
            </div> )
            }
        </div>
    )
}

export default FindId_Code;