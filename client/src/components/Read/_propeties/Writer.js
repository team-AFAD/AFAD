import React, { useState, useContext, useEffect, useRef } from 'react';
import './writer.scss';

function Writer( props ){
    const div = useRef();

    const onclick = () => {
        const icon = div.current.querySelector("i");
        if (icon.classList.contains("bi-person-plus")) {
            icon.classList.remove("bi-person-plus");
            icon.classList.add("bi-person-check");
        } else {
            icon.classList.add("bi-person-plus");
            icon.classList.remove("bi-person-check");
        }
    }  

    const style={
        cursor: "pointer",
        fontSize: "20px"
    }
    return(
        <div className='Writer'>
            공동구매 주최자 : {props.writer}
            <div style={{display : "inline-block"}} onClick={onclick} ref={div}>
                <i style={style} className="bi bi-person-plus"></i>
            </div>
        </div>
    )
}

export default Writer;