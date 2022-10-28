import React from 'react'


const Amount = ({price}) => {
    return (
        <div className='Amount'>
            <div>전체 금액 <br/>
                {price}원</div>
        </div>
    )
}


export default Amount;