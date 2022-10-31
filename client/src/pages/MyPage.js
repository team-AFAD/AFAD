import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "../components/User/mypage.scss"

const Mypage = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
   



    return(
        <div className="Mypage">
        <h1>마이페이지 - {user.nickname}님</h1>
        {user.city ? <p>서울시 {user.city}</p> : <p>서울시</p>}
        <br />
        <Link to={`/modify/${user._id}`}>회원정보 수정</Link>
        <hr />
        찜 목록
            
      
    
        
        </div>
    );
}

export default Mypage;