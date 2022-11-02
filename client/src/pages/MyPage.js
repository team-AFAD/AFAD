import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { logout } from "../apiCalls"
import { useNavigate } from "react-router-dom";
import "../components/User/mypage.scss"
import { getNoToken, deleteData } from "../utils/Axios";

import Card from "../components/Read/Card";

const Mypage = () => {
    const {user, dispatch} = useContext(AuthContext);
    console.log(user);
    const navigate = useNavigate();

    const deleteUser = async (e) => {
        if (window.confirm("탈퇴하시겠습니까?")) {
            const response = await deleteData("/users/modify/"+ user._id);
            alert("그동안 이용해주셔서 감사합니다.");
            logout(dispatch);
            if (response.status === 200) {navigate("/");}
        } else {
        }
    }

    const [data, setData] = useState([]);
    console.log("user", user["_id"])
    const getData = async () => {
        const response = await getNoToken(`/posts`);
        console.log( response.data );
        setData(response.data);
    }

    useEffect(() => {
        getData();
        // getLikeStatus();
    }, []);


    const link = (url) => {
        console.log("work");
        navigate("/post/" + url);
    }

    return(
        <div className="Mypage">
            <p className="title">마이페이지</p>
                {user.city ? <p className="city">서울시 {user.city}</p> : <p>서울시</p>} 
                <p className="nickname">{user.nickname}님</p>

                {/* <Link to={`/modify/${user._id}`} className="btn">회원정보 수정</Link> */}
            <div className="btns">
                <button className="btn" onClick={() => navigate(`/modify/${user._id}`)}>회원정보 수정</button>
                <button className="btn" onClick={() => navigate('/resetpw', { state: { id: user.identity , email: user.email }})}>비밀번호 변경</button>
                <button type="button" className="btn" onClick={deleteUser} >회원 탈퇴</button>
            </div>
            <hr />
            <p className="title">내가 작성한 글 목록</p>
            {data.map( data =>{
                    console.log(data.id);
                    return (
                        <div className='cardWrap'>
                            {
                            user["_id"] === data.userId && 
                            <div onClick={() => {link(data._id)}}> 
                                <Card key={data._id} data={data} />
                            </div>
                            }
                        </div>
                    );
                })}
            {/* <hr />
            <p className="title">좋아요한 목록</p>
            {data.map( data =>{
                    console.log(data.id);
                    return (
                        <div className='cardWrap'>
                            {
                            user["_id"] === data.userId && 
                            <div onClick={() => {link(data._id)}}> 
                                <Card key={data._id} data={data} />
                            </div>
                            }
                        </div>
                    );
                })} */}
        </div>
    );
}

export default Mypage;