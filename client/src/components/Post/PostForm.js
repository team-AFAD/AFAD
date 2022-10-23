import React, { useState } from 'react';
import './postForm.scss';
import InputPost from '../Input/InputPost';
import Textarea from '../Input/Textarea';
import InputPostFile from '../Input/InputPostFile';
// import Heart from '/heart_red.png';
function PostForm () {

    const [formValue, setFormValue] = useState({
        title : "",
        merchandiseName : "",
        amount : 0,
        num_people : 1,
        perPayment: "",
        time_limit : "",
        area : "",
        content : "",
        url : "",
    });

    const onChangeForm = (e) => {
        setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
        });
        // console.log({perPayment});
    };

    let formData = new FormData();

    const onChangeFile = () => {
        let fileUpload = document.querySelector(".InputPostFile input");
        console.log(fileUpload);
        formData.append("userfile", fileUpload.files[0]);
    }
    
    const onSubmit = () => {
        formData.append("title", formValue.title);
        formData.append("merchandiseName", formValue.merchandiseName);
        formData.appent("amount", formValue.amount);
        formData.appent("num_people", formValue.num_people);

        formData.appent("time_limit", formValue.time_limit);

        
        // for (let key of formData.keys()) {
        //     console.log(key, ":", formData.get(key));
        // }

        // let result = await axios.post("", {data: formData})
    }


    let perPayment = Math.ceil((formValue.amount)/(formValue.num_people));

    return (
        <div className="PostForm">
            <form>
                <InputPost title={"제목"} name={"title"} type={"text"} required
                onChangeForm={onChangeForm}
                />
                <InputPost title={"상품명"} name={"merchandiseName"} type={"text"} required
                onChangeForm={onChangeForm} inputSize="short"
                />
                <InputPost title={"금액"} name={"amount"} type={"text"} required
                onChangeForm={onChangeForm} inputSize="short"
                />
                <InputPost title={"모집 인원"} name={"num_people"} type={"number"} required
                onChangeForm={onChangeForm} inputSize="short"
                />
                
                <div className='payment'><p>1인 결제금액 : {perPayment} 원</p></div>

                <InputPost title={"모집 기한"} name={"time_limit"} type={"date"}
                onChangeForm={onChangeForm}
                />
                <InputPost title={"모집 장소"} name={"area"} type={"select"}
                onChangeForm={onChangeForm}
                />
                <Textarea title={"내용"} name={"content"}
                onChangeForm={onChangeForm}
                />
                <InputPost title={"관련 링크"} name={"url"} type={"url"}
                onChangeForm={onChangeForm}
                />
                <InputPostFile title={"이미지 첨부 파일"} name={"post_img"} type={"file"}
                functionName={onChangeFile} fileDefault={'heart.png'}
                />
                <button type="button" onClick={onSubmit}>등록</button>
            </form>
        </div>
    )
}

export default PostForm;