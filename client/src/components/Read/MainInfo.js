import React, { useState } from 'react';
import './mainInfo.scss';
import Title from "./_propeties/Title";
import RecruitingBtn from './_propeties/RecruitingBtn';
import Amount from './_propeties/Amount';
import NumPeople from './_propeties/NumPeople';
import PerPayment from './_propeties/PerPayment';
import Area from './_propeties/Area';
import Date from './_propeties/Date';
import LikeBtn from './_propeties/LikeBtn';
import JoinBtn from './_propeties/JoinBtn';

function MainInfo (props) {

    console.log( props );
    return (
        <div className="MainInfo">
            <Title title={props.data.title}/> <br />
            <div className='CompoWrap_flex topInfo'>
                <RecruitingBtn />
                <Amount />
            </div>

            <div className='CompoWrap_flex middleInfo'>
                { props.data.num_people != "" &&  <NumPeople num_people={props.data.num_people} /> }
                <PerPayment />
            </div>

            <div className='bottomInfo'>
                <Area title="모집 장소 :"/>
                <Date title="모집 기한 :"/>
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