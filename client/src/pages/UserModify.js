import { useState, useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateCall, logout, loginCall } from "../apiCalls"
import "../components/User/usermodify.scss";
import PwModal from "../components/User/PwModal";
import InputRegister from "../components/Input/InputRegister";
import { useNavigate } from "react-router";
import InputSelect from "../components/Input/InputSelect";
import { put, deleteData, deleteNoToken } from "../utils/Axios";
import axios from "axios";

const UserModify = () => {
    const navigate = useNavigate();
    const {user, dispatch} = useContext(AuthContext);

    const [ isOpen, setOpen ] = useState(false);
    const [values, setValues] = useState({
        username: user.username,
        email: user.email,
        nickname: user.nickname,
        city: user.city
    });
    console.log(values)
   
    const inputs = [
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

    const OPTIONS = [
        { value: "서울시", name: "서울시" },
        { value: "강남구", name: "강남구" },
        { value: "강동구", name: "강동구" },
        { value: "강북구", name: "강북구" },
        { value: "강서구", name: "강서구" },
        { value: "관악구", name: "관악구" },
        { value: "광진구", name: "광진구" },
        { value: "구로구", name: "구로구" },
        { value: "금천구", name: "금천구" },
        { value: "노원구", name: "노원구" },
        { value: "도봉구", name: "도봉구" },
        { value: "동대문구", name: "동대문구" },
        { value: "동작구", name: "동작구" },
        { value: "마포구", name: "마포구" },
        { value: "서대문구", name: "서대문구" },
        { value: "서초구", name: "서초구" },
        { value: "성동구", name: "성동구" },
        { value: "성북구", name: "성북구" },
        { value: "송파구", name: "송파구" },
        { value: "양천구", name: "양천구" },
        { value: "영등포구", name: "영등포구" },
        { value: "용산구", name: "용산구" },
        { value: "은평구", name: "은평구" },
        { value: "종로구", name: "종로구" },
        { value: "중구", name: "중구" },
        { value: "중랑구", name: "중랑구" },
    ];

    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value });
    }

    const modifyUser = async (e) => {
        e.preventDefault();
        console.log("values", values);
        console.log(values["city"])


        const response = await put("/users/modify/"+ user._id, values);
        console.log(response);
        await updateCall( {userId: response.data._id, username: response.data.username}, dispatch );
        // alert("다시 로그인 해주세요.")
        // logout(dispatch);
        // if (response.status === 200) {navigate("/login");}
    }

    const deleteUser = async (e) => {
        const response = await deleteData("/users/modify/"+ user._id);
        console.log(response)
        alert("그동안 이용해주셔서 감사합니다.")
        logout(dispatch);
        if (response.status === 200) {navigate("/");}
    }
    return(
        <div className="UserModify">
        <h1>회원정보 수정</h1>
        <form className="modifyForm">
            <label>아이디</label>
            <input value={user.identity} readOnly style={{backgroundColor: "lightgray"}}></input>

            <label>이름</label>
            <input value={user.username} readOnly style={{backgroundColor: "lightgray"}}></input>

            {/* <label>닉네임</label>
            <input type="text" value={nickname} onChange={onChange}></input> */}
            
            {inputs.map((input) => (
                <InputRegister
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}  
                />
            ))}
            <InputSelect label={"지역 선택"} name={"city"} options={OPTIONS} onChange={onChange} value={values["city"]}/>
            <button type="button" onClick={modifyUser} >수정</button>
            <button type="button" onClick={deleteUser} >탈퇴</button>
        </form>

        {/* <label>비밀번호</label>
        <button type="button" onClick={ () => setOpen(true) }>비밀번호 재설정</button>
        {isOpen === true ? <PwModal id={user.identity} /> : null} */}

        </div>
    );
}

export default UserModify;