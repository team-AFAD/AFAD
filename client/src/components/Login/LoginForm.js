import React, { useState } from 'react';
import './loginForm.scss';
import axios from 'axios';

function LoginForm() {
    const [values, setValues] = useState({
        email:"",
        password:"",
    });
    
    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value });
    }
    console.log(values);

    const loginSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        for(var pair of formData.entries()) {
            console.log(pair[0]+ ': '+ pair[1]); 
        };
        console.log([...formData]);
        // axios 수정할 예정
        axios.post('url', formData)
        .then((res) => console.log(res))
        
    }

    return(
        <div className='LoginForm'>
            <form onSubmit={loginSubmit}>
                <div className='loginTitle'>로그인</div>

                <label className='labels'>
                    <input className='inputs' id='email' name='email' type="email" placeholder="이메일" onChange={onChange} required />
                </label>
                <label className='labels'>
                    <input className='inputs' id='password' name='password' type="password" placeholder="비밀번호" onChange={onChange} required />
                </label>
                <button>로그인</button>

                <ul className='find_wrap'>
                    <li>비밀번호 찾기</li>
                    <li>아이디 찾기</li>
                    <li>회원가입</li>
                </ul>
            </form>
            
        </div>
    );
}

export default LoginForm;