import React, { useState } from 'react';
import './mainInfo.scss';
import Title from "./_propeties/Title";
import RecruitingBtn from './_propeties/RecruitingBtn';
import Amount from './_propeties/Amount';
import NumPeople from './_propeties/NumPeople';
import PerPayment from './_propeties/PerPayment';
import AreaDate from './_propeties/AreaDate';
import LikeBtn from './_propeties/LikeBtn';
import JoinBtn from './_propeties/JoinBtn';

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