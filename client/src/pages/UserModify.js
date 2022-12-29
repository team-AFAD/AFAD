import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateCall, logout } from "../apiCalls"
import { useNavigate } from "react-router";
import InputSelect from "../components/Input/InputSelect";
import { put, deleteData } from "../utils/Axios";
import axios from "axios";
import '../styles/ModifyReset.scss';

const UserModify = () => {
    const navigate = useNavigate();
    const {user, dispatch} = useContext(AuthContext);
    const [text, setText] = useState();
    const [ warning, setWarning ] = useState();

    const [values, setValues] = useState({
        username: user.username,
        email: user.email,
        nickname: user.nickname,
        city: user.city
    });
    // console.log(values);
   

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
    

    // 이메일 중복 확인
    const emailCheck = async (e) => {
        setValues({...values, [e.target.name]: e.target.value });
        const response = await axios.post( process.env.REACT_APP_URL + '/api/auth/emailCheck', {email : e.target.value});
        // console.log(e.target.value);
        const validEmail = response.data.valid;
        // console.log("validEmail", validEmail);
        const regExp =  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        if (!regExp .test(e.target.value)) {
            setWarning('error');
            setText('이메일 형식이 올바르지 않습니다. 다시 입력해 주세요.');
        }else {
            if (validEmail === true || e.target.value === user["email"]) {
                setWarning('success');
                setText('사용가능한 이메일입니다.');
            }else {
                setWarning('error');
                setText('중복된 이메일입니다.');
            }
        }
    }
    // 닉네임 중복 확인
    const nicknameCheck = async (e) => {
        setValues({...values, [e.target.name]: e.target.value });
        const response = await axios.post( process.env.REACT_APP_URL + '/api/auth/nicknameCheck', {nickname : e.target.value});
        // console.log(e.target.value);
        const validNickname = response.data.valid;
        // console.log("validNickname", validNickname);

        if (e.target.value !== "") {
            if (validNickname === true || e.target.value === user["nickname"]) {
                setWarning('success');
                setText('사용 가능한 닉네임입니다.');
            }else {
                setWarning('error');
                setText('중복 닉네임입니다.');
            }
        } else {
            setText("");
        }
    }

    const modifyUser = async (e) => {
        e.preventDefault();

        if(warning !== "error"){
            const response = await put("/users/modify/"+ user._id, values);
            // console.log(response);
            alert("수정 완료");
            navigate(-1);
            await updateCall( {userId: response.data._id, username: response.data.username}, dispatch );
        }
    }

    const cancel = () => {
        navigate(-1);
    }

    return(
        <div className="wrapper">
        <form>
            <div className='Title'>회원정보 수정</div>
            <p className={warning}>{text}</p>
            <label>아이디</label>
            <input value={user.identity} readOnly style={{backgroundColor: "lightgray"}}></input>

            <label>이름</label>
            <input value={user.username} readOnly style={{backgroundColor: "lightgray"}}></input>

            <label>이메일</label>
            <input type="email" name="email" onChange={emailCheck} value={values["email"]} required ></input>

            <label>닉네임</label>
            <input type="text" name="nickname" onChange={nicknameCheck} value={values["nickname"]} required ></input>

            <InputSelect label={"지역 선택"} name={"city"} options={OPTIONS} onChange={onChange} value={values["city"]}/>

            <div className='btns'>
                <button type="button" onClick={modifyUser} >수정</button>
                <button type="button" onClick={cancel} >취소</button>
            </div>
        </form>
            

        </div>
    );
}

export default UserModify;