import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './card.scss';
import PostImg from './PostImg';
import Title from "./_propeties/Title";
import Merchandise from './_propeties/Merchandise';
import RecruitingBtn from './_propeties/RecruitingBtn';
import Place from './_propeties/Place';
import NumPeople from './_propeties/NumPeople';
import PerPayment from './_propeties/PerPayment';
import Date from './_propeties/Date';

const BACK_SERVER = process.env.REACT_APP_URL + "/api";

function Card (props) {
    const [numPeople, setNumPeople] = useState(0);
    //   // 현제 참여 인원 가져오기
    // const getNumPeople = async () => {
    //     // console.log("getNumber");
    //     console.log(props.data._id);
    //     const result = await axios.get(BACK_SERVER + "/joins/groupPeople", {params : {postId : props.data._id}});
    //     console.log(result.data);
    //     setNumPeople(result.data);
    // }
    // console.log(props.data.createdAt);
    // console.log(props.data.photo);
    
        // 현재 참여 인원 가져오기
        const getNumPeople = async () => {
            // console.log("getNumber");
            // console.log(props.data._id);
            const result = await axios.get(BACK_SERVER + "/joins/groupPeople", {params : {postId : props.data._id}});
            // console.log(result.data);
            setNumPeople(result.data);
        }

        useEffect(()=>{
            getNumPeople();
        }, []);
    return(
        <div className="Card">
            
            <PostImg photo={props.data.photo}/>
            
            <div className='CompoWrap_flex topInfo'>
                <RecruitingBtn end_date={props.data} num_people={props.data.num_people} current_people={numPeople}/>
                <Place place={props.data.place}/>
            </div>

            <Title title={props.data.title}/>
            <Merchandise merchandise={props.data.merchandise}/>

            <div className='CompoWrap_flex bottomInfo'>
                <NumPeople num_people={props.data.num_people} current_people={numPeople}/>
                <PerPayment perPayment={props.data.perPayment}/>
            </div>

            <Date createdAt={props.data.createdAt} end_date={props.data.end_date}/>
        </div>
        
    )
}

export default Card;