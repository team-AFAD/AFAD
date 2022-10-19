import React from "react";
import './inputRegister.scss';

const InputRegister = ({title, type, id, name, onChangeForm}) => {
    return(
        <div className="InputRegister">
            <div className="title">{title}</div>
            <input type={type} id={id} name={name} onChange={onChangeForm}></input>
        </div>

    );
}

export default InputRegister;