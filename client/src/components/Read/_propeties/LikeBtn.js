// import React, { useState, useEffect }from 'react;'
import './likeBtn.scss';
// import HeartImg from '../../../images/heart_red.png';
import EmptyHeartImg from '../../../images/heart.png';

const LikeBtn = () => {

    return (
        <div className='LikeBtn'>
            <div className='likeBtnWrap'>
                <img src={EmptyHeartImg} alt="unlike"/>
            {/* <img src={like?HeartImg:EmptyHeartImg} onClick={onClick} alt="likebtn"/> */}
            </div>
        </div>
    )
}

export default LikeBtn;


