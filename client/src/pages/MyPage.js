import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { logout } from "../apiCalls"
import { useNavigate } from "react-router-dom";
import "../components/User/mypage.scss"
import { deleteData } from "../utils/Axios";

const Mypage = () => {
    const {user, dispatch} = useContext(AuthContext);
    console.log(user);
    console.log(user.identity)
    const navigate = useNavigate();

    const deleteUser = async (e) => {
        if (window.confirm("탈퇴하시겠습니까?")) {
            const response = await deleteData("/users/modify/"+ user._id);
            console.log(response)
            alert("그동안 이용해주셔서 감사합니다.");
            logout(dispatch);
            if (response.status === 200) {navigate("/");}
      
          } else {
      
            // alert("취소합니다.");
      
          }

        // const response = await deleteData("/users/modify/"+ user._id);
        // console.log(response)
        // alert("그동안 이용해주셔서 감사합니다.")
        // logout(dispatch);
        // if (response.status === 200) {navigate("/");}
    }
   
    return(
        <div className="Mypage">
            <p className="title">My Page </p>
                {user.city ? <p className="city">서울시 {user.city}</p> : <p>서울시</p>} 
                <p className="nickname">{user.nickname}님</p>

                {/* <Link to={`/modify/${user._id}`} className="btn">회원정보 수정</Link> */}
            <div className="btns">
                <button className="btn" onClick={() => navigate(`/modify/${user._id}`)}>회원정보 수정</button>
                <button className="btn" onClick={() => navigate('/resetpw', { state: { id: user.identity , email: user.email }})}>비밀번호 변경</button>
                <button type="button" className="btn" onClick={deleteUser} >회원 탈퇴</button>
            </div>
            <hr />
        </div>
    );
}

export default Mypage;