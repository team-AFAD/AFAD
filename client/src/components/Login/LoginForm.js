import React, { useState } from 'react';
import InputLogin from "../Input/InputLogin";
import './loginForm.scss';

function LoginForm() {
    const [values, setValues] = useState({
        email:"",
        password:"",
    });
    
    const inputs = [
    {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "이메일",
        required: true,
    },
    {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "비밀번호",
        required: true,
      },
    ]

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
        // axios 추가 예정
    }

    return(
        <div className='LoginForm'>
            <form onSubmit={loginSubmit}>
                <div className='loginTitle'>로그인</div>

                {inputs.map((input) =>(
                <InputLogin 
                    key={input.id} 
                    {...input} 
                    values={values[input.name]}
                    onChange={onChange}  
                />
                ) )}
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