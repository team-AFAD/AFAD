import React, { useState, useRef }  from "react";
import axios from 'axios';
import FindId_Code from "./FindId_Code";
import '../styles/LoginFindID.scss';

const BACK_SERVER = process.env.REACT_APP_URL + "/api";

const FindId = () => {
    const [ text, setText ] = useState("");
    const [ warning, setWarning ] = useState();
    const [ codeModal, setCodeModal ] = useState(false);
    const [code, setCode] = useState('');
    const input = useRef();
    
    const sendEmail = async () => {

        if ((input.current.value).includes('@') === false) {
            setWarning('error');
            setText('이메일 형식이 올바르지 않습니다. 다시 입력해 주세요.');
        } else {
            // user => findId 안돼~ valid 필요
            const emailCheck = await axios.post(BACK_SERVER + "/auth/emailCheck", {email: input.current.value});
            const isEmail = emailCheck.data.valid;

            // 이메일이 존재하면
            if (!isEmail) {
                setWarning('success');
                setText('인증코드가 발송되었습니다.')
                // 이메일로 인증코드 보내기
                const result = await axios.post(BACK_SERVER + "/emails", {email: input.current.value});
                const code = result.data.code;
                setCode(code);
                setCodeModal(true);
            } else {
                setWarning('error');
                setText('입력하신 정보로 등록된 아이디를 찾을 수 없습니다.');
            }
        }
    }
    return(
        <div className='warpper'>
            <form>
                <div className='Title'>아이디 찾기</div>
                <label>
                    <input type="text" name="email" placeholder="이메일 주소를 입력해 주세요." ref={input} />
                </label>
                <p className={warning}>{text}</p>
                <button type="button" onClick={sendEmail}>인증코드 발송</button> <br />
                

                {
                    codeModal === true ? <FindId_Code code={code} input={input} setText={setText} /> : null
                }
            </form>

            

        </div>
            
    );
}

export default FindId;