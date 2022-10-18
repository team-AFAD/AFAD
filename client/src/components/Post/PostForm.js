import React, { useState } from 'react';
import './postForm.scss';
import InputTitle from '../Input/Input_Title';

function PostForm () {
    const [formValue, setFormValue] = useState({
        title : ""
        ,merchandiseName : ""
      });

      const onChangeForm = (e) => {
        setFormValue({
          ...formValue,
          [e.target.name]: e.target.value,
        });
        console.log(formValue.title);
        console.log(formValue.merchandiseName);
      };
    
    return (
        <div className="PostForm">
            <form>
                <InputTitle title={"제목"} name={"title"} type={"text"}
                onChangeForm={onChangeForm}
                />
                <InputTitle title={"상품명"} name={"merchandiseName"} type={"text"}
                onChangeForm={onChangeForm}
                />
                <InputTitle title={"상품명"} name={"merchandiseName"} type={"text"}
                onChangeForm={onChangeForm}
                />

            </form>
        </div>
    )
}

export default PostForm;