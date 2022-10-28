import nodemailer from "nodemailer";

export const sendEmail = async(req, res, next) => {
    console.log(req.body.email);
    const number = Math.floor((Math.random() * (99999 - 11111)) + 11111);

    let transporter = nodemailer.createTransport({
        service: 'gmail', 
        prot: 587, 
        host: 'smtp.gmail.com', 
        secure: false, 
        requireTLS: true,
        auth: {
            user: process.env.google_email, 
            pass: process.env.google_pw
        }
    });

    let info = await transporter.sendMail({   
        from: process.env.google_email,
        to: req.body.email,
        subject: '[AFAD]의 인증 메일입니다.',
        text: "인증번호 " + String(number)
    });
	
    res.send({code: String(number)});
}