import React, { useState } from 'react';
import InputRegister from "../Input/InputRegister";
import './registerForm.scss';
import InputPostFile from '../Input/InputPostFile';
import InputSelect from '../Input/InputSelect';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterForm () {
    const [text, setText] = useState();
    const [ warning, setWarning ] = useState();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        id: "",
        password:"",
        confirmPassword:"",
        username:"",
        email:"",
        nickname:"",
      });

    const inputs = [
    {
        id: 1,
        name: "id",
        type: "text",
        placeholder: "4~20자의 영문, 숫자 조합 ",
        errorMessage:
          "4~20자로  영문, 숫자 조합으로 작성해 주세요.",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{4,20}$`,
        label:"아이디",
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
        name: "email",
        type: "email",
        placeholder: "이메일 주소를 입력해 주세요.",
        errorMessage: "이메일 형식이 올바르지 않습니다. 다시 입력해 주세요.",
        label:"이메일",
        required: true,
    },
    {
        id: 6,
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
    // 아이디 중복 확인
    const idCheck = async (e) => {
        const response = await axios.post('http://localhost:8080/api/auth/idCheck', {id : e.target.value});
        console.log(e.target.value);
        const validId = response.data.valid;
        console.log("validId", validId);

        if (e.target.value != "") {
            if (validId == true) {
                console.log("유효한 아이디");
                setWarning('sign_checking');
                setText('사용가능한 아이디입니다.');
            } else {
                console.log("중복 아이디");
                setWarning('sign_warning');
                setText('중복된 아이디입니다.');
            }
        } else {
            setText("");
        }
    }

    // 이메일 중복 확인
    const emailCheck = async (e) => {
        const response = await axios.post('http://localhost:8080/api/auth/emailCheck', {email : e.target.value});
        console.log(e.target.value);
        const validId = response.data.valid;
        console.log("validId", validId);
        if (e.target.value != "") {
            if (validId == true) {
                console.log("유효한 이메일");
                setWarning('sign_checking');
                setText('사용가능한 이메일입니다.');
            } else {
                console.log("중복 이메일");
                setWarning('sign_warning');
                setText('중복된 이메일입니다.');
            }
        } else {
            setText("");
        }
    }

    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value });
    }

    const onChangeFile = () => {
        let fileUpload = document.querySelector(".InputPostFile input");
        console.log(fileUpload);
    }

    const registerSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        for(var pair of formData.entries()) {
            console.log(pair[0]+ ': '+ pair[1]); 
        };

        axios.post('http://localhost:8080/api/auth/register',formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            console.log(response.data);
            alert("회원가입 성공");
            navigate("/login")
        })
        .catch((error) => {
            console.log(error.toJSON());
            alert("회원가입 실패")
          });
    }

    return(
        <div className="RegisterForm">

            <form onSubmit={registerSubmit}>
                <div className='registerTitle'>회원가입</div>
                <p className={warning}>{text}</p>

                {inputs.map((input) =>(
                    input.id != 1 && input.id != 5 ?
                    <InputRegister 
                        key={input.id} 
                        {...input} 
                        values={values[input.name]}
                        onChange={onChange}  
                    /> :
                    <InputRegister 
                        key={input.id} 
                        {...input} 
                        values={values[input.name]}
                        onChange={input.id === 1 ? idCheck : emailCheck}  
                    />
                ) )}
                <InputSelect label={"지역 선택"} name={"city"} options={OPTIONS} defaultValue="seoul" />
                <InputPostFile title={"프로필 사진"} name={"profilePicture"} type={"file"}
                functionName={onChangeFile} fileDefault={'profilePic.png'}
                />
            <button className='btn'>가입하기</button>
            </form>
        </div>
        
    );
}

export default RegisterForm;