import React from 'react';
import './inputPost.scss';

const InputPost = ({title, name, type, onChangeForm, inputSize, ...inputProps}) => {
    return (
        <div className="InputPost">
            <div className="title">{title}</div> <br/>
            <input className={`input ${inputSize}`} type={type} name={name} onChange={onChangeForm} {...inputProps} ></input>
        </div>
    );
}

export default InputPost;

