import React from 'react';
import './inputPost.scss';

const InputPost = ({title, name, type, onChangeForm, inputSize}) => {
    return (
        <div className="InputPost">
            <div className="title">{title}</div> <br/>
            <input className={`input ${inputSize}`} type={type} name={name} onChange={onChangeForm}></input>
        </div>
    );
}

export default InputPost;

