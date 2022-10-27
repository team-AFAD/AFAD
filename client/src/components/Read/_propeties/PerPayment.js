const PerPayment = ({perPayment}) => {
    return (
        <div className='PerPayment'>
            1인 결제금액 <br/>
            <span>{perPayment} 00원</span>
        </div>
    )
}

export default PerPayment;
