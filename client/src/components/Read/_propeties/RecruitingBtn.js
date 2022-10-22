import React from 'react';
import './recruitingBtn.scss'

export const RecruitingBtn = () => {
    return (
        <div className='RecruitingBtn'>
            <div className='recruitingBtnWrap'>
                <div className='recruitingBtnWrap Ing'>
                    <p>모집중</p>
                </div>
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