// import React, { useState, useEffect }from 'react;'
import './joinBtn.scss';


const JoinBtn = (props) => {

    return (
        <div className='JoinBtn'>
            <div className='joinBtnWrap'>
                <button className='ReadBtn' type='button' onClick={props.onClick}>{props.title}</button>
            </div>
        </div>
    )
}

export default JoinBtn;


