import React, { useState, useRef }  from "react";
import axios from 'axios';
import FindId_Code from "../components/User/FindId_Code";

const BACK_SERVER = "http://localhost:8080/api";

const FindId = () => {
    const [ text, setText ] = useState('가입하신 이메일을 입력해주세요!');
    const [ codeModal, setCodeModal ] = useState(false);
    const [code, setCode] = useState('');
    const input = useRef();
    
    const sendEmail = async () => {

        if ((input.current.value).includes('@') == false) {
            setText('이메일을 다시 확인해주세요!');
        } else {
            // user => findId 안돼~ valid 필요
            const emailCheck = await axios.post(BACK_SERVER + "/auth/emailCheck", {email: input.current.value});
            const isEmail = emailCheck.data.valid;

            // 이메일이 존재하면
            if (!isEmail) {
                setText('인증코드가 발송되었습니다!')
                // 이메일로 인증코드 보내기
                const result = await axios.post(BACK_SERVER + "/emails", {email: input.current.value});
                const code = result.data.code;
                setCode(code);
                setCodeModal(true);
            } else {
                setText('입력하신 정보로 등록된 아이디를 찾을 수 없습니다!');
            }
        }
    }
    return(
        <>
            <h1>아이디 찾기</h1>

            <input className='email' type="text" name="email" placeholder="이메일 ex) tomorrow@abc.com" ref={input} />
            <button className='sendEmail' onClick={sendEmail}>인증코드 발송</button> <br />
            <p>{text}</p>

            {
                codeModal == true ? <FindId_Code code={code} input={input} setText={setText} /> : null
            }
        
        </>
    );
}

export default FindId;