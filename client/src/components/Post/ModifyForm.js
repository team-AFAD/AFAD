import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { put } from "../../utils/Axios";
import axios from "axios";

import './postForm.scss';
import InputPost from '../Input/InputPost';
import Textarea from '../Input/Textarea';
import InputPostFile from '../Input/InputPostFile';
import JoinBtn from "../Read/_propeties/JoinBtn";
import { updateCall } from "../../apiCalls";



const BACK_SERVER = process.env.REACT_APP_URL + "/api";

function ModifyForm (props) {
    // const {user ,dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id)

    // const [data, setData] = useState(null);

    const [formValue, setFormValue] = useState({
        title : "",
        merchandise : "",
        price : 0,
        num_people : 1,
        perPayment : 0,
        end_date : "",
        place : "",
        desc : "",
        photo : ""
    });

    const getData = async () => {
        const response = await axios.get(`${BACK_SERVER}/posts/${id}`);
        setFormValue(response.data);
    }
    
    useEffect(() => {
        getData();
    }, []);


    //Form에 내용이 채워질때
    const onChangeForm = (e) => {
        setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
        });
    };
    console.log(formValue);
    
    let formData = new FormData();
    
    //이미지 미리보기
    const onChangeFile = () => {
        let fileUpload = document.querySelector(".InputPostFile input");
        console.log(fileUpload);
        formData.append("photo", fileUpload.files[0]);
        console.log(fileUpload.files[0]);
        // setFormValue("photo", fileUpload.files[0].name)
    }
    console.log("photo", formValue["photo"])
    
    // 등록
    const modifyPost = async () => {
        // formData.append("userId", user._id);
        // formData.append("nickname", user.nickname);
        formData.append("title", formValue.title);
        formData.append("merchandise", formValue.merchandise);
        // formData.append("price", formValue.price);
        // formData.append("num_people", formValue.num_people);
        // formData.append("perPayment", formValue.perPayment);
        formData.append("end_date", formValue.end_date);
        formData.append("place", formValue.place);
        formData.append("desc", formValue.desc);
        
        for (let key of formData.keys()) {
            console.log(key, ":", formData.get(key));
        }

        const response = await axios.put(`${BACK_SERVER}/posts/modify/${id}`, formData,
            {
            headers: {
                "Authorization": localStorage.getItem('access_token'),
                "Content-Type": "multipart/form-data",
            }});
        alert("수정 완료");
        console.log(response.data);
    }

    const cancel = () => {
        navigate(-1);
    }

    // let perPayment = Math.ceil((formValue.price)/(formValue.num_people));

    return (
        <div className="PostForm ModifyForm">
            <form>
                <InputPost title={"제목"} name={"title"} type={"text"} required
                onChangeForm={onChangeForm} value={formValue["title"]}
                />
                <InputPost title={"상품명"} name={"merchandise"} type={"text"} required
                onChangeForm={onChangeForm} inputSize="short" value={formValue["merchandise"]}
                /> 
                <p>한 사람이 구매할 수량 (예시 : 사과 5kg을 본인을 포함하여 5명이 나눌 경우 <span>사과 1kg</span>으로 작성)</p>
                <div className="CompoWrap_flex">
                <InputPost title={"총 금액"} name={"price"} type={"text"} 
                onChangeForm={onChangeForm} inputSize="short"
                value={formValue["price"]} readOnly
                style={{ backgroundColor: "lightgray" }}
                />
                <InputPost title={"모집 인원"} name={"num_people"} type={"number"}
                onChangeForm={onChangeForm} inputSize="short"
                value={formValue["num_people"]} readOnly
                style={{backgroundColor: "lightgray"}}
                />
                <div className='payment'>1인 결제금액 : {formValue["perPayment"]} 원</div>
                </div>
                <p>수정이 불가한 항목입니다. ( 전체금액 / 본인 포함 인원 수 )</p>
                
                
                <InputPost title={"모집 기한"} name={"end_date"} type={"date"}
                onChangeForm={onChangeForm} value={formValue["end_date"]}
                />
                <InputPost title={"모집 장소"} name={"place"} type={"select"}
                onChangeForm={onChangeForm} value={formValue["place"]}
                />
                <Textarea title={"내용"} name={"desc"} onChangeForm={onChangeForm} value={formValue["desc"]}></Textarea>
                {/* <InputPost title={"관련 링크"} name={"url"} type={"url"}
                onChangeForm={onChangeForm}
                /> */}
                <InputPostFile title={"이미지 첨부 파일"} name={"photo"} type={"file"}
                functionName={onChangeFile} fileDefault={formValue["photo"] ? `/images/${formValue["photo"]}` : '/defaultImage.jpg'}
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