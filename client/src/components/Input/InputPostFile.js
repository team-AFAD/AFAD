import React from 'react';
import './inputPostFile.scss';

const InputPostFile = ({title, name, type, onChangeForm}) => {
    return (
        <div className="InputPostFile">
            <div className="title">{title}</div>
            <input type={type} name={name} onChange={onChangeForm}></input>
            {/* 사진 미리보기 창 */}
            <div className='showImg'></div>
        </div>
    )
}

export default InputPostFile;

