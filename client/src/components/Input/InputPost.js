import React from 'react';
import './inputPost.scss';

const InputPost = ({title, name, type, onChangeForm}) => {
    return (
        <div className="InputPost">
            <div className="title">{title}</div>
            <input type={type} name={name} onChange={onChangeForm}></input>
        </div>
    )
}

export default InputPost;

