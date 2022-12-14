import React, { useState, useContext } from 'react';
import axios from 'axios';
import { loginCall } from '../apiCalls';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import '../styles/LoginFindID.scss';

const Login = () => {
    const [text, setText] = useState();
    const [ warning, setWarning ] = useState();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        id:"",
        password:"",
    });
    const { isFetching, dispatch } = useContext(AuthContext);
    
    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value });
    }
    // console.log(values);

    const msg = () => {
        alert("본인 인증을 위해 아이디 찾기로 이동합니다.")
    }

    const loginSubmit = async (e) => {
        e.preventDefault();
        // console.log(values);
        // axios 수정할 예정
        try{
            const response = await axios.post(process.env.REACT_APP_URL + '/api/auth/login', values)
            // console.log(response.data);
            setWarning('success');
            setText("로그인 성공")
            navigate("/");

            localStorage.setItem("access_token", response.data.access_token);
            console.log( "storage : ", localStorage.getItem("access_token"));
            await loginCall( {userId: response.data._id, username: response.data.username}, dispatch );
        }catch(error) {
            console.log(error);
            setWarning('error');
            setText("아이디 또는 비밀번호를 다시 확인해 주세요.")
        }
    }
    return (
        <div className='warpper'>
            <form onSubmit={loginSubmit}>
                <div className='Title'>로그인</div>

                <label>
                    <input id='id' name='id' type="text" placeholder="아이디" onChange={onChange} required />
                </label>
                <label>
                    <input id='password' name='password' type="password" placeholder="비밀번호" onChange={onChange} required />
                </label>
                <p className={warning}>{text}</p>
                <button>로그인</button>

                <ul className='find_wrap'>
                   <li><Link to="/findid" className='links'>아이디 찾기</Link></li>  
                   <li><Link to="/findid" className='links' onClick={msg}>비밀번호 찾기</Link></li>
                   <li><Link to="/register" className='links'>회원가입</Link></li>
                </ul>
            </form>
        </div>
    );
}

export default Login;