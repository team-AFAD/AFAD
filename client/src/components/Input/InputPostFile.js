import React, {useRef} from 'react';
import './inputPostFile.scss';

const InputPostFile = ({title, name, type, functionName, fileDefault }) => {

    const file = useRef();

    const imgPreview = () => {
        const file_tag = file.current;
        const file_img = document.querySelector(".InputPostFile .showImg");

        if (file_tag.files.length > 0) {
            let reader = new FileReader();
        
            reader.onload = function(data) {
                file_img.src = data.target.result;
            }

            reader.readAsDataURL(file_tag.files[0]);
        } else {
            file_img.src = `/${fileDefault}`;
        }
    }

    return (
        <div className="InputPostFile">
            <div className="title">{title}</div>
            <label>
                <input type={type} name={name} onChange={() => {imgPreview(); functionName()}}  ref={file}></input>
                {/* 사진 미리보기 창 */}
                <img className='showImg' src={fileDefault}></img>
            </label>
        </div>
    )
}

export default InputPostFile;

