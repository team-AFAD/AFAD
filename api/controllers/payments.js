import Payments from "../models/Payments.js"
// "/payments/complete"에 대한 POST 요청을 처리
export const paymentView = (req,res) => {
    res.render("payments");
}
export const payments =  async (req, res) => {
  try {
    const { imp_uid, merchant_uid } = req.body; // req의 body에서 imp_uid, merchant_uid 추출

    // 액세스 토큰(access token) 발급 받기
    const getToken = await axios({
      url: "https://api.iamport.kr/users/getToken",
      method: "post", // POST method
      headers: { "Content-Type": "application/json" }, // "Content-Type": "application/json"
      data: {
        imp_key: "7060135662772144", // REST API키
        imp_secret:
          "OfSIjYqeEfT3qSBATsIYI9MJ6soXb1iC0lWmEIGEGCHK34HIKBQvRcsSLDvAeUnYxMfa0nbqxuDua0rv", // REST API Secret
      },
    });

    const { access_token } = getToken.data.response; // 인증 토큰

    // imp_uid로 아임포트 서버에서 결제 정보 조회
    const getPaymentData = await axios({
      url: `https://api.iamport.kr/payments/${imp_uid}`, // imp_uid 전달
      method: "get", // GET method
      headers: { Authorization: access_token }, // 인증 토큰 Authorization header에 추가
    });
    const paymentData = getPaymentData.data.response; // 조회한 결제 정보

    // DB에서 결제되어야 하는 금액 조회
    const order = await Orders.findById(paymentData.merchant_uid);
    const amountToBePaid = order.amount; // 결제 되어야 하는 금액

    // 결제 검증하기
    const { amount, status } = paymentData;
    if (amount === amountToBePaid) {
      // 결제 금액 일치. 결제 된 금액 === 결제 되어야 하는 금액
      await Orders.findByIdAndUpdate(merchant_uid, { $set: paymentData }); // DB에 결제 정보 저장

      switch (status) {
        case "ready": // 가상계좌 발급
          // DB에 가상계좌 발급 정보 저장
          const { vbank_num, vbank_date, vbank_name } = paymentData;
          await Users.findByIdAndUpdate("/* 고객 id */", {
            $set: { vbank_num, vbank_date, vbank_name },
          });
          // 가상계좌 발급 안내 문자메시지 발송
          SMS.send({
            text: `가상계좌 발급이 성공되었습니다. 계좌 정보 ${vbank_num} \${vbank_date} \${vbank_name}`,
          });
          res.send({ status: "vbankIssued", message: "가상계좌 발급 성공" });
          break;
        case "paid": // 결제 완료
          res.send({ status: "success", message: "일반 결제 성공" });
          break;
      }
    } else {
      // 결제 금액 불일치. 위/변조 된 결제
      throw { status: "forgery", message: "위조된 결제시도" };
    }
  } catch (e) {
    res.status(400).send(e);
  }
};

// paymentsComp
export const paymentComp = (req,res) => {
  console.log( req.body );
  let data = {
    merchant_uid: req.body.merchant_uid,
    nickname: req.body.buyer_name,
    productName: req.body.name,
    productPrice: req.body.paid_amount
  }
  try{
    const newPayment = new Payments(data);
    const savedPayment = newPayment.save();  
    res.render("paymentsComp", data);
  } catch ( e ) {
    console.log( "err : ", e );
  }
}
