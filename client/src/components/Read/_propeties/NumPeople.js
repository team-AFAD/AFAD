import React from 'react'

const NumPeople = (props) => {
    return (
        <div className='NumPeople'>
            모집인원 {}/{props.num_people}명
        </div>
    )
}

export default NumPeople;
