import React from 'react';
import './recruitingBtn.scss'

export const RecruitingBtn = (props) => {
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);
    let todayDate = year + '-' + month  + '-' + day;
    // console.log("종료일",end_date.end_date);
    // console.log("오늘날짜",todayDate);
    const endDate = props.end_date.end_date;
    
    console.log("props", props);
    console.log("참여인원",props.current_people);
    console.log("현재인원",props.num_people);
    return (
        <div className='RecruitingBtn'>
            <div className='recruitingBtnWrap'>
                {todayDate >= endDate || props.current_people==props.num_people
                ?
                (<div className='recruitingBtnWrap Stop'>
                    <p>모집종료</p>
                </div>) 
                :
                <div className='recruitingBtnWrap Ing'>
                    <p>모집중</p>
                </div>
                }
            </div>
        </div>
    )
}
//인원이 다 찼을 경우
//모집기한이 지났을 경우
//.. 등 모집마감일 때 className을 'Ing'에서 'Stop'으로 바꿀 수 있게
//'모집중' '모집종료'
//p태그도 글씨 바뀌어야 함 어렵겠군..
export default RecruitingBtn;