import React, { useState } from 'react';
import './inputRegister.css';

const InputRegister = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, errorMessage, onChange, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="InputRegister">
            <label className='labels'>{label}</label>
            <input 
                className='inputs'
                {...inputProps}
                onChange={onChange}
                // 포커스 해지할 때
                onBlur={handleFocus}
                // 포커스 할 때
                onFocus={() => 
                    inputProps.name==="confirmPassword" && setFocused(true)
                }
                focused={focused.toString()} />
            <span className='errmsg'>{errorMessage}</span>
        </div>
    );
}

export default InputRegister;