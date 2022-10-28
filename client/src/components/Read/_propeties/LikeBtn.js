// import React, { useState, useEffect }from 'react;'
import './likeBtn.scss';
import HeartImg from '../../../images/heart_red.png';
import EmptyHeartImg from '../../../images/heart.png';

const LikeBtn = (props) => {

    return (
        <div className='LikeBtn'>
            <div className='likeBtnWrap'>
                <img src={ props.like ? HeartImg : EmptyHeartImg } onClick={props.onClick} alt="likebtn"/>
            </div>
        </div>
    )
}

export default LikeBtn;


