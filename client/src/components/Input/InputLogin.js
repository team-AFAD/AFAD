import React, { useState } from 'react';
import './inputLogin.scss';

const InputLogin = (props) => {
    const {label, errorMessage, onChange, id, ...inputProps} = props;



    return (
        <div className="InputLogin">
            <label className='labels'>
                <input 
                    className='inputs'
                    {...inputProps}
                    onChange={onChange} />
            </label>
        </div>
    );
}

export default InputLogin;