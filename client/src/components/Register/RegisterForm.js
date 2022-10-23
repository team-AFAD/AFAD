import React, { useState } from 'react';
import InputRegister from "../Input/InputRegister";
import './registerForm.scss';
import InputPostFile from '../Input/InputPostFile';
import InputSelect from '../Input/InputSelect';
import axios from 'axios';

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
    ];

    const OPTIONS = [
        { value: "seoul", name: "서울시" },
        { value: "gangnam", name: "강남구" },
        { value: "gangdong", name: "강동구" },
        { value: "gangbuk", name: "강북구" },
        { value: "gangseo", name: "강서구" },
        { value: "gwanak", name: "관악구" },
        { value: "gwangjin", name: "광진구" },
        { value: "guro", name: "구로구" },
        { value: "geumcheon", name: "금천구" },
        { value: "nowon", name: "노원구" },
        { value: "dobong", name: "도봉구" },
        { value: "dongdaemun", name: "동대문구" },
        { value: "dongjak", name: "동작구" },
        { value: "mapo", name: "마포구" },
        { value: "seodaemun", name: "서대문구" },
        { value: "seocho", name: "서초구" },
        { value: "seongdong", name: "성동구" },
        { value: "seongbuk", name: "성북구" },
        { value: "songpa", name: "송파구" },
        { value: "yangcheon", name: "양천구" },
        { value: "yeongdeungop", name: "영등포구" },
        { value: "yongsan", name: "용산구" },
        { value: "eunpyeong", name: "은평구" },
        { value: "jongno", name: "종로구" },
        { value: "junggu", name: "중구" },
        { value: "jungnang", name: "중랑구" },
    ];

    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value });
    }

    // let formData = new FormData();
    const onChangeFile = () => {
        let fileUpload = document.querySelector(".InputPostFile input");
        console.log(fileUpload);
        // formData.append("profilePicture", fileUpload.files[0]);
    }

    const registerSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(Object.fromEntries(formData.entries()));
        for(var pair of formData.entries()) {
            console.log(pair[0]+ ': '+ pair[1]); 
        };
        console.log([...formData])
        // axios 수정할 예정
        axios.post('url', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
              },
        })
        .then((res) => {console.log(res)})
    }

    // console.log(values);
    return(
        <div className="RegisterForm">

            <form onSubmit={registerSubmit}>
                <div className='registerTitle'>회원가입</div>

                {inputs.map((input) =>(
                <InputRegister 
                    key={input.id} 
                    {...input} 
                    values={values[input.name]}
                    onChange={onChange}  
                />
                ) )}
                <InputSelect label={"지역 선택"} name={"city"} options={OPTIONS} defaultValue="seoul" />
                <InputPostFile title={"프로필 사진"} name={"profilePicture"} type={"file"}
                functionName={onChangeFile} fileDefault={'profilePic.png'}
                />
            <button>가입하기</button>
            </form>
        </div>
        
    );
}

export default RegisterForm;