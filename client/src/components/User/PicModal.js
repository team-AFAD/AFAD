import {useContext} from "react";
import InputPostFile from "../Input/InputPostFile";
import { AuthContext } from "../../context/AuthContext"
import { logout } from "../../apiCalls"
import { useNavigate } from "react-router";
import axios from 'axios';
const BACK_SERVER = process.env.REACT_APP_URL + "/api";

const PicModal = () => {
    const navigate = useNavigate();
    const {user, dispatch} = useContext(AuthContext);
    console.log(user.profilePicture)
    let formData = new FormData();
    
    //이미지 미리보기
    const onChangeFile = () => {
        let fileUpload = document.querySelector(".InputPostFile input");
        console.log(fileUpload);
        formData.append("profilePicture", fileUpload.files[0]);
    }

    const modifyPic = async () => {
        axios.put(BACK_SERVER + "/users/modify/"+ user._id, formData, 
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            console.log(response.data);
            // console.log(response.status);
            // alert("다시 로그인 해주세요.")
            // logout(dispatch);
            // if (response.status === 200) {navigate("/login");}
            
        })
        .catch((error) => {
            console.log(error.toJSON());
          });
    }
    


    return(
        <>
        <InputPostFile title={"프로필 사진"} name={"profilePicture"} type={"file"}
                functionName={onChangeFile} fileDefault={user.profilePicture ? `/images/${user.profilePicture}` : '/profilePic.png'}
                />
        <button type="button" onClick={modifyPic}>프로필 변경</button>
        </>
    );
}

export default PicModal;