import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";


const Mypage = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    console.log(user.profilePicture)

    return(
        <>
        <h1>마이페이지 - {user.nickname}님</h1>
        <br />
        <img src={`images/${user.profilePicture}`} />
        <Link to="/modify">회원정보 수정</Link>
        <hr />
        찜 목록
        
        </>
    );
}

export default Mypage;