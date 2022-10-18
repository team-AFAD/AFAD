import React from 'react';
import './input_title.scss';

const Input_Title = ({title, name,type, onChangeForm}) => {
    return (
        <div className="Input_TitleWrap">
            <div className="title">{title}</div>
            <input type={type} name={name} onChange={onChangeForm}></input>
        </div>
    )
}

export default Input_Title;

