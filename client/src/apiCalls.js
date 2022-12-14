import axios from "axios";

export const loginCall = async (userCredential,dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try{
        console.log( "token" );
        const res =  await axios({
            // url: "http://localhost:8080/api/users",
            url: process.env.REACT_APP_URL + "/api/users",
            params: userCredential,
            headers: {
                'Authorization': localStorage.getItem('access_token'),
            }
        });
        // const res = await axios.post("http://localhost:8080/api/auth/login", userCredential);
        // console.log( res );
        dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    }catch(err){
        dispatch({type:"LOGIN_FAILURE", err});
    }
};

export const updateCall = async (userCredential,dispatch) => {
    dispatch({ type: "MODIFY", payload: JSON.parse(localStorage.getItem("user")) });
    try{
        console.log( "token1111" );
        console.log( "params : ", userCredential );
        const res =  await axios({
            url: process.env.REACT_APP_URL + "/api/users",
            params: userCredential,
            headers: {
                'Authorization': localStorage.getItem('access_token'),
            }
        });
        // const res = await axios.post("http://localhost:8080/api/auth/login", userCredential);
        console.log( res );
        dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    }catch(err){
        dispatch({type:"LOGIN_FAILURE", err});
    }
};

// 로그아웃 추가
export async function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.clear()
}