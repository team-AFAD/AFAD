import React from 'react';
import "./textarea.scss";

const Textarea = ({title, name, type, onChangeForm, ...inputProps }) => {
    return (
        <div className="Textarea">
            <div className="title">{title}</div> <br/>
            <textarea type={type} name={name} onChange={onChangeForm} {...inputProps}></textarea>
        </div>
    )
}

export default Textarea;
