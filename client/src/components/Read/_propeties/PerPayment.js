const PerPayment = (props) => {
    return (
        <div className='PerPayment'>
            1인 결제금액 <br/>
            <p>{props.perPayment}원</p>
        </div>
    )
}

export default PerPayment;
