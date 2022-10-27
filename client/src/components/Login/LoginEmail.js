import {useRef} from 'react';
import React from 'react';
import axios from 'axios';


const LoginEmail = () => {

    const input = useRef();
    
    // const [nickname, setNickname] = useState(user.nickname);
    // console.log(nickname)

    const onClick= async () => {
        console.log(input.current.value);
        const result = await axios.post("http://localhost:8080/api/emails", {email : input.current.value})
        console.log(result);
        // setNickname(value);
    }
    return (
        <div className='LoginEmail'>
            <h3>비밀번호 초기화</h3>
            <label>
                <input ref={input} className=''></input>
            </label>
            <button onClick={onClick}>이메일 확인</button>
        </div>
    )
}

export default LoginEmail;