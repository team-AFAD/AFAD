import React, { useState } from 'react';
import './mainInfo.scss';
import Title from "./Title";
import RecruitingBtn from './RecruitingBtn';
import Amount from './Amount';
import NumPeople from './NumPeople';
import PerPayment from './PerPayment';
import AreaDate from './AreaDate';
import LikeBtn from './LikeBtn';
import JoinBtn from './JoinBtn';

function MainInfo () {
    

    return (
        <div className="MainInfo">
            <Title /> <br />
            <div className='CompoWrap_flex topInfo'>
                <RecruitingBtn />
                <Amount />
            </div>

            <div className='CompoWrap_flex middleInfo'>
                <NumPeople />
                <PerPayment />
            </div>

            <div className='bottomInfo'>
                <AreaDate />
            </div>
            
            <div className='CompoWrap_flex ReadBtn'>
                <LikeBtn />
                <div className='TowBtnFlex'>
                    <JoinBtn title="채팅하기"/>
                    <JoinBtn title="공동구매 참여"/>
                </div>
            </div>

        </div>
    )
}

export default MainInfo;