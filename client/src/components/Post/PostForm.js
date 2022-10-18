import React, { useState } from 'react';
import './postForm.scss';
import InputPost from '../Input/InputPost';
import Textarea from '../Input/Textarea';
import InputPostFile from '../Input/InputPostFile';

function PostForm () {
    const [formValue, setFormValue] = useState({
        title : "",
        merchandiseName : "",
        amount : 0,
        num_people : 1,
        time_limit : "",
        area : "",
        content : "",
        url : "",
        post_img : ""
    });

    const onChangeForm = (e) => {
        setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
        });
    };
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
                onChangeForm={onChangeForm}
                />
            </form>
        </div>
    )
}

export default PostForm;