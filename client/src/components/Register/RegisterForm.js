import React, { useState } from 'react';
import InputRegister from "../Input/InputRegister";
import './registerForm.scss';
import InputPostFile from '../Input/InputPostFile';

function RegisterForm () {
    const [values, setValues] = useState({
        email:"",
        password:"",
        confirmPassword:"",
        username:"",
        nickname:"",
      });

    const inputs = [
    {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "이메일 주소를 입력해 주세요.",
        errorMessage: "이메일 형식이 올바르지 않습니다. 다시 입력해 주세요.",
        label:"이메일",
        required: true,
    },
    {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "8~20자의 영문,숫자,특수문자(!@#$%^&*) 조합",
        errorMessage:
          "8~20자로 문자/숫자/특수문자(!@#$%^&*)가 적어도 1개 이상을 포함해 주세요.",
        label:"비밀번호",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
    {
        id: 3,
        name: "confirmPassword",
        type: "password",
        placeholder: "비밀번호를 한번 더 입력해 주세요.",
        errorMessage: "비밀번호가 일치하지 않습니다. 다시 입력해 주세요.",
        label:"비밀번호 확인",
        pattern: values.password,
        required: true,
    },
    {
        id: 4,
        name: "username",
        type: "text",
        placeholder: "이름을 입력해 주세요.",
        label:"이름",
        required: true,
    },
    {
        id: 5,
        name: "nickname",
        type: "text",
        placeholder: "닉네임을 입력해 주세요.",
        label:"닉네임",
        required: true,
    },

    ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(Object.fromEntries(formData(e.target).entries()));
        console.log(values);
      }

    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value })
    }

    let formData = new FormData();

    const onChangeFile = () => {
        let fileUpload = document.querySelector(".InputPostFile input");
        console.log(fileUpload);
        formData.append("userfile", fileUpload.files[0]);

    }

    console.log(values);
    return(
        <div className="RegisterForm">

            <form onSubmit={handleSubmit}>
                <h2>회원가입</h2>

                {inputs.map((input) =>(
                <InputRegister 
                    key={input.id} 
                    {...input} 
                    values={values[input.name]}
                    onChange={onChange}  
                />
                ) )}
                <InputPostFile title={"프로필 사진"} name={"profilePicture"} type={"file"}
                functionName={onChangeFile} fileDefault={'profilePic.png'}
                />
            <button>가입하기</button>
            </form>
        </div>
        
    );
}

export default RegisterForm;