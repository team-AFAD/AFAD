import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import './mainInfo.scss';
import Title from "./_propeties/Title";
import RecruitingBtn from './_propeties/RecruitingBtn';
import Amount from './_propeties/Amount';
import NumPeople from './_propeties/NumPeople';
import PerPayment from './_propeties/PerPayment';
import Place from './_propeties/Place';
import Date from './_propeties/Date';
import LikeBtn from './_propeties/LikeBtn';
import JoinBtn from './_propeties/JoinBtn';

import { AuthContext } from "../../context/AuthContext";

const BACK_SERVER = "http://localhost:8080/api";

function MainInfo (props) {
    const {user} = useContext(AuthContext);
    console.log(user);
    console.log(user._id);

    const [numPeople, setNumPeople] = useState(1);
    const [likeStatus, setLikeStatus] = useState(false);

    // 참여하기
    const joinPost = async () => {
        console.log("joinPost");
        console.log("참여버튼 이거" + props.data._id);
        const result = await axios.post(BACK_SERVER+"/joins", {postId : props.data._id, userId : user._id});
        console.log(result);
        getNumPeople();

    }

    // 좋아요 버튼
    const likePost = async () => {
        if (likeStatus) {
            // 좋아요 취소
            console.log("dislike");
            const result = await axios.delete(BACK_SERVER + "/likes/delete", { data : {postId : props.data._id, userId : user._id}});
            setLikeStatus(false);
        } else {
            // 좋아요
            console.log("like");
            const result = await axios.post(BACK_SERVER + "/likes", {postId : props.data._id, userId : user._id});
            setLikeStatus(true);
        }
    }

    // 현재 좋아요 상태 가져오기
    const getLikeStatus = async () => {
        console.log("likeStatus");
        const result = await axios.get(BACK_SERVER + "/likes/islike", { params : {postId : props.data._id, userId : user._id}});
        console.log(result.data);
        if (result.data == null) {
            setLikeStatus(false);
        } else {
            setLikeStatus(true);
        }
    }

    // 현재 인원 가져오기
    const getNumPeople = async () => {
        // console.log("getNumber");
        console.log(props.data._id);
        const result = await axios.get(BACK_SERVER + "/joins/groupPeople", {params : {postId : props.data._id}});
        console.log(result.data);
        setNumPeople(result.data);
    }

    useEffect(()=>{
        getNumPeople();
        getLikeStatus();
    }, []);



    console.log( props );
    return (
        <div className="MainInfo">
            <Title title={props.data.title}/> <br />
            <div className='CompoWrap_flex topInfo'>
                <RecruitingBtn />
                <Amount price={props.data.price}/>
            </div>

            <div className='CompoWrap_flex middleInfo'>
                { props.data.num_people != "" &&  <NumPeople current_people={numPeople} num_people={props.data.num_people} /> }
                <PerPayment perPayment={props.data.perPayment}/>
            </div>

            <div className='bottomInfo'>
                <Place title="모집 장소 :"/>
                <Date title="모집 기한 :" createdAt={props.data.createdAt} end_date={props.data.end_date}/>
            </div>

            <div className='CompoWrap_flex ReadBtn'>
                <LikeBtn like={likeStatus} onClick={likePost}/>
                <div className='TowBtnFlex'>
                    <JoinBtn title="채팅하기"/>
                    <JoinBtn title="공동구매 참여" joinPost={joinPost}/>
                </div>
            </div>

        </div>
    )
}

export default MainInfo;