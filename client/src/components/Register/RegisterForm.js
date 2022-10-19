import React, { useState } from 'react';
import InputRegister from "../Input/InputRegister";

import './registerForm.scss';

function RegisterForm () {
    const [formValue, setFormValue] = useState({
        email : "",
        password : "",
        passwordCheck : "",
        username : "",
        nickname : "",
        profilePicture : ""
    });

    const onChangeForm = (e) => {
        setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
        });
    };
    return(
        <div className="RegisterForm">
            <InputRegister title={"이메일"} type={"text"} id={"email"} name={"email"} required
            onChangeForm={onChangeForm} />
            <InputRegister title={"비밀번호"} type={"password"} id={"password"} name={"password"} required
            onChangeForm={onChangeForm} />
            <InputRegister title={"비밀번호 확인"} type={"password"} id={"passwordCheck"} name={"passwordCheck"} required 
            onChangeForm={onChangeForm} />
            <InputRegister title={"이름"} type={"email"} id={"username"} name={"username"} required 
            onChangeForm={onChangeForm} />
            <InputRegister title={"닉네임"} type={"text"} id={"nickname"} name={"nickname"} required 
            onChangeForm={onChangeForm} />

            
        </div>
        
    );
}

export default RegisterForm;