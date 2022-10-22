// import React, { useState, useEffect }from 'react;'
import './joinBtn.scss';


const JoinBtn = ({title}) => {

    return (
        <div className='JoinBtn'>
            <div className='joinBtnWrap'>
                <button className='ReadBtn' type='button'>{title}</button>
           
            </div>
        </div>
    )
}

export default JoinBtn;


