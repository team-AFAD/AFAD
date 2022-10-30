import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import './postForm.scss';
import InputPost from '../Input/InputPost';
import Textarea from '../Input/Textarea';
import InputPostFile from '../Input/InputPostFile';



// import Heart from '/heart_red.png';
const BACK_SERVER = "http://localhost:8080/api";

function PostForm () {
    const {user} = useContext(AuthContext);
    console.log(user._id);
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        title : "",
        merchandise : "",
        amount : 0,
        num_people : 1,
        time_limit : "",
        place : "",
        content : "",
        url : "",
        userfile : "/defaultImage.jpg"
    });

    //Form에 내용이 채워질때
    const onChangeForm = (e) => {
        setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
        });
    };

    let formData = new FormData();
    
    //이미지 미리보기
    const onChangeFile = () => {
        let fileUpload = document.querySelector(".InputPostFile input");
        console.log(fileUpload);
        formData.append("photo", fileUpload.files[0]);
    }
    
    // 등록
    const onSubmit = async () => {
        formData.append("userId", user._id);
        formData.append("nickname", user.nickname);
        formData.append("title", formValue.title);
        formData.append("merchandise", formValue.merchandise);
        formData.append("price", formValue.price);
        formData.append("num_people", formValue.num_people);
        formData.append("perPayment", perPayment);
        formData.append("end_date", formValue.end_date);
        formData.append("place", formValue.place);
        formData.append("desc", formValue.desc);
        
        for (let key of formData.keys()) {
            console.log(key, ":", formData.get(key));
        }

        let result = await axios.post(BACK_SERVER + "/posts/write", 
            formData,
            {
            headers: {
                "Content-Type": "multipart/form-data",
            }});
            alert("작성 완료");
            navigate("/post");
    }


    let perPayment = Math.ceil((formValue.price)/(formValue.num_people));

    return (
        <div className="PostForm">
            <form>
                <InputPost title={"제목"} name={"title"} type={"text"} required
                onChangeForm={onChangeForm}
                />
                <InputPost title={"상품명"} name={"merchandise"} type={"text"} required
                onChangeForm={onChangeForm} inputSize="short"
                />
                <InputPost title={"총 금액"} name={"price"} type={"text"} required
                onChangeForm={onChangeForm} inputSize="short"
                />
                <InputPost title={"모집 인원"} name={"num_people"} type={"number"} required
                onChangeForm={onChangeForm} inputSize="short"
                />
                
                <div className='payment'><p>1인 결제금액 : {perPayment} 원</p></div>

                <InputPost title={"모집 기한"} name={"end_date"} type={"date"}
                onChangeForm={onChangeForm}
                />
                <InputPost title={"모집 장소"} name={"place"} type={"select"}
                onChangeForm={onChangeForm} 
                />
                <Textarea title={"내용"} name={"desc"}
                onChangeForm={onChangeForm}
                />
                <InputPost title={"관련 링크"} name={"url"} type={"url"}
                onChangeForm={onChangeForm}
                />
                <InputPostFile title={"이미지 첨부 파일"} name={"photo"} type={"file"}
                functionName={onChangeFile} fileDefault={'/defaultImage.jpg'}
                />
                <button type="button" onClick={onSubmit}>등록</button>
            </form>
        </div>
    )
}

export default PostForm;