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
                onBlur={handleFocus}
                onFocus={() => 
                    inputProps.name==="confirmPassword" && setFocused(true)
                }
                focused={focused.toString()} />
            <span>{errorMessage}</span>
        </div>
    );
}

export default InputRegister;