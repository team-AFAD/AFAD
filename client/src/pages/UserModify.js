import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import InputRegister from "../components/Input/InputRegister";

const UserModify = () => {
    const {user} = useContext(AuthContext);
    console.log(user);

    const [nickname, setNickname] = useState(user.nickname);
    console.log(nickname)

    const onChange = (e) => {
        let {value} ={...e.target}
        setNickname(value);
    }

    return(
        <>
        <h1>회원정보 수정</h1>
        <form>
                
        </form>
        닉네임
        <input type="text" value={nickname} onChange={onChange}></input>
        </>
    );
}

export default UserModify;