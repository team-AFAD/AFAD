import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../components/User/usermodify.scss";
import axios from 'axios';
import PwModal from "../components/User/PwModal";


const BACK_SERVER = "http://localhost:8080/api";

const UserModify = () => {
    const {user} = useContext(AuthContext);
    console.log(user);

    const [nickname, setNickname] = useState(user.nickname);
    const [ isOpen, setOpen ] = useState(false);

    const handleClick = () => {
        setOpen(true);
        console.log(isOpen)
    }
    

    const onChange = (e) => {
        let {value} ={...e.target}
        setNickname(value);
    }

    return(
        <div className="UserModify">
        <h1>회원정보 수정</h1>
        <form className="modifyForm">
            <label>아이디</label>
            <input value={user.identity} readOnly></input>

            <label>이메일</label>
            <input value={user.email} readOnly></input>

            <label>닉네임</label>
            <input type="text" value={nickname} onChange={onChange}></input>
                
        </form>

        <label>비밀번호</label>
        <button type="button" onClick={ handleClick }>비밀번호 재설정</button>
        {isOpen === true ? <PwModal id={user.identity} /> : null}
        
        </div>
    );
}

export default UserModify;