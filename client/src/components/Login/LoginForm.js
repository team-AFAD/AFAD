import React, { useState } from 'react';
import './loginForm.scss';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function LoginForm() {
    const [values, setValues] = useState({
        email:"",
        password:"",
    });
    
    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value });
    }
    // console.log(values);

    const loginSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        // axios 수정할 예정
        
        axios.post('http://localhost:8080/api/auth/login', values)
        .then((rep) => {
            console.log(rep.data);
            // navigate("/")
        })
        .catch(function (error) {
            alert("실패");
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        });
        
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