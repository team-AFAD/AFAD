import React, { useEffect } from 'react'
import axios from 'axios';

const Payments = (props) => {
    console.log( props );
    const { user, data } = props;
    const {IMP} = window;
    const BACK_SERVER = process.env.REACT_APP_URL + "/api";

    IMP.init('imp42661587');
    
    useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery); document.head.appendChild(iamport);
        return () => { 
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        }
    }, [])
    
        IMP.request_pay({ 
            pg: "kakaopay.TC0ONETIME",
            pay_method: "card",
            merchant_uid: 'merchant_' + new Date().getTime(),
            name: data.merchandise,
            amount: data.perPayment,
            buyer_email: user.email,
            buyer_name: user.username,
            buyer_tel: "010-0000-0000",
            m_redirect_url : 'https://example.com/mobile/complete', // 모바일용
            digital: true,
            app_scheme : ''
            }, function (rsp) { 
                if (rsp.success) {  
                    let { merchant_uid, name, paid_amount, buyer_name } = rsp;
                    axios({
                        method: 'post',
                        url: BACK_SERVER + "/payments/complete",
                        data: {
                            merchant_uid, name, amount: paid_amount, buyer_name 
                        }
                    }).then((result) => {
                        console.log( "result : ", result );
                        console.log('*******************');
                        props.payComplete('success');
                        alert ("결제성공");
                    });
                }
                else {
                    var msg = '결제 실패';
                    msg += '에러 내용: ' + rsp.error_msg;
                    props.payComplete(msg);
                }
            });


    return (
        <div className='Payments'>
            <form id="form_result" action="/api/payments/complete">
                <input type="hidden" name="merchant_uid"/>
                <input type="hidden" name="buyer_name"/>
                <input type="hidden" name="name"/>
                <input type="hidden" name="amount"/>
            </form>
        </div>
    )
}

export default Payments;