import { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { logout } from "../apiCalls"

const Main = () => {
    const {user, dispatch} = useContext(AuthContext);
    console.log(user);

    const LogOut = async () => {
        logout(dispatch);
    }

    return(
        <>
            <h3>로그인/로그아웃 연습</h3>
            {user ? 
            (
                <div>
                    <p>반갑습니다. {user.nickname}님</p> 
                    <button onClick={LogOut}>로그아웃</button>
                </div>
            )
            :
            (
                <Link to="/login" className='links'>로그인하러 가기</Link>
            )
            }
            

        </>
    );
}

export default Main;