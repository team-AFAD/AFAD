import React, { useState, useContext } from 'react';
import './loginForm.scss';
import axios from 'axios';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from "react-router-dom";

// axios.defaults.withCredentials = true;
function LoginForm() {
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

    const loginSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        // axios 수정할 예정
        try{
            const response = await axios.post('http://localhost:8080/api/auth/login', values)
            
            console.log(response.data);
            setWarning('login_success');
            setText("로그인 성공")
            navigate("/");

            localStorage.setItem("access_token", response.data.access_token);
            console.log( "storage : ", localStorage.getItem("access_token"));
            await loginCall( {userId: response.data._id, username: response.data.username}, dispatch );
        }catch(error) {
            console.log(error);
            setWarning('login_error');
            setText("아이디 또는 비밀번호를 다시 확인해 주세요.")
        }
        
        // const response = await axios.post('http://localhost:8080/api/auth/login', values)
        
        // localStorage.setItem("access_token", response.data.access_token);
        // console.log( "storage : ", localStorage.getItem("access_token"));
        // await loginCall( {userId: response.data._id, username: response.data.username}, dispatch );
        
    }

    return(
        <div className='LoginForm'>
            <form onSubmit={loginSubmit}>
                <div className='loginTitle'>로그인</div>

                <label className='labels'>
                    <input className='inputs' id='id' name='id' type="text" placeholder="아이디" onChange={onChange} required />
                </label>
                <label className='labels'>
                    <input className='inputs' id='password' name='password' type="password" placeholder="비밀번호" onChange={onChange} required />
                </label>
                <p className={warning}>{text}</p>
                <button className='btn'>로그인</button>

                <ul className='find_wrap'>
                   <li><Link to="/findid" className='links'>아이디 찾기 / 비밀번호 변경</Link></li>  
                   {/* <li><Link to="/findid" className='links'>비밀번호 찾기</Link></li> */}
                   <li><Link to="/register" className='links'>회원가입</Link></li>
                </ul>
            </form>
            
        </div>
    );
}

export default LoginForm;