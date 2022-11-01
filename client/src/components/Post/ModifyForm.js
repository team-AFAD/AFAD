import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { get } from "../../utils/Axios";
import axios from "axios";

import './postForm.scss';
import InputPost from '../Input/InputPost';
import Textarea from '../Input/Textarea';
import InputPostFile from '../Input/InputPostFile';
import JoinBtn from "../Read/_propeties/JoinBtn";




const BACK_SERVER = "http://localhost:8080/api";

function ModifyForm () {
    const {user} = useContext(AuthContext);
    console.log(user._id);
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({});

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
    const modifyPost = async () => {
        // formData.append("userId", user._id);
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
                "Authorization": localStorage.getItem('access_token'),
                "Content-Type": "multipart/form-data",
            }});
            alert("작성 완료");
            navigate("/post");
    }

    const cancel = () => {
        navigate(-1);
    }

    let perPayment = Math.ceil((formValue.price)/(formValue.num_people));

    return (
        <div className="PostForm ModifyForm">
            <form>
                <InputPost title={"제목"} name={"title"} type={"text"} required
                onChangeForm={onChangeForm}
                />
                <InputPost title={"상품명"} name={"merchandise"} type={"text"} required
                onChangeForm={onChangeForm} inputSize="short"
                /> <p>한 사람이 구매할 수량 (예시 : 사과 5kg을 본인을 포함하여 5명이 나눌 경우 <span>사과 1kg</span>으로 작성)</p>
                <div className="CompoWrap_flex">
                <InputPost title={"총 금액"} name={"price"} type={"text"} required
                onChangeForm={onChangeForm} inputSize="short"
                />
                <InputPost title={"모집 인원"} name={"num_people"} type={"number"} required
                onChangeForm={onChangeForm} inputSize="short"
                />
                <div className='payment'>1인 결제금액 : {perPayment} 원</div>
                </div>
                <p>수정이 불가한 항목입니다. ( 전체금액 / 본인 포함 인원 수 )</p>
                
                
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
                <br />
                <div className="CompoWrap_flex">
                    <JoinBtn title="수 정" onClick={modifyPost}></JoinBtn>
                    <JoinBtn title="취 소" onClick={cancel}></JoinBtn>
                </div>
                <br />
            </form>
        </div>
    )
}

export default ModifyForm;