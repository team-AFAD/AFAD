import { useState, useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import "../components/User/usermodify.scss";
import axios from 'axios';
import PwModal from "../components/User/PwModal";
import InputRegister from "../components/Input/InputRegister";
import { useNavigate } from "react-router";

const BACK_SERVER = "http://localhost:8080/api";

const UserModify = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

   
    const [ isOpen, setOpen ] = useState(false);
    
    const [values, setValues] = useState({
        username: user.username,
        email: user.email,
        nickname: user.nickname,
    });
    //   console.log("정보확인 : ", user.email)
      const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value });
    }
    console.log(values);
   
      const inputs = [
        {
            id: 4,
            name: "username",
            type: "text",
            label:"이름",
            required: true,
        },
        {
            id: 5,
            name: "email",
            type: "email",
            errorMessage: "이메일 형식이 올바르지 않습니다. 다시 입력해 주세요.",
            label:"이메일",
            required: true,
        },
        {
            id: 6,
            name: "nickname",
            type: "text",
            label:"닉네임",
            required: true,
        },
        ];
        
        // console.log('http://localhost:8080/api/users/'+ user._id)

        const modify = async (e) => {
            e.preventDefault();
            console.log("values", values);

            const response = await axios.put(BACK_SERVER + "/users/modify/"+ user._id, values);
            console.log(response.data);
            // 로그인 다시 하라고 ~
        }
    return(
        <div className="UserModify">
        <h1>회원정보 수정</h1>
        <form className="modifyForm">
            {/* <label>아이디</label>
            <input value={user.identity} readOnly></input>

            <label>이메일</label>
            <input value={user.email} readOnly></input>

            <label>닉네임</label>
            <input type="text" value={nickname} onChange={onChange}></input> */}
            
            {inputs.map((input) => (
                <InputRegister
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}  
                />
            ))}

            <button type="button" onClick={modify} >수정</button>
            <button >탈퇴</button>
        </form>

        <label>비밀번호</label>
        <button type="button" onClick={ () => setOpen(true) }>비밀번호 재설정</button>
        {isOpen === true ? <PwModal id={user.identity} /> : null}
        
        </div>
    );
}

export default UserModify;