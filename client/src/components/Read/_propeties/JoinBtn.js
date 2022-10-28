// import React, { useState, useEffect }from 'react;'
import './joinBtn.scss';


const JoinBtn = ({title, joinPost}) => {

    return (
        <div className='JoinBtn'>
            <div className='joinBtnWrap'>
                <button className='ReadBtn' type='button' onClick={joinPost}>{title}</button>
            </div>
        </div>
    )
}

export default JoinBtn;


