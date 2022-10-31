import User from "../models/User.js";
import bcrypt from "bcryptjs";

//UPDATE
export const updateUser = async (req, res, next) =>{
    console.log("정보확인 : ", req.params.id )
    const data = {
            nickname : req.body.nickname,
            email: req.body.email,
            city: req.body.city
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {$set : data}, 
            {new: true}
        );
        res.status(200).json(updatedUser)
    }catch(err){
        console.log( "err : ", err );
        next(err);
    }
}

//업데이트test중
// export const updateUser = async (req, res, next) =>{
//     console.log("req확인용 : ", req.body.userId);
//     if (req.body.userId === req.params.id) {
//         try {
//           const updatedUser = await User.findByIdAndUpdate(
//             req.params.id,
//             {
//               $set: req.body,
//             },
//             { new: true }
//           );
//           res.status(200).json(updatedUser);
//         } catch (err) {
//           res.status(500).json(err);
//         }
//       } else {
//         res.status(401).json("You can update only your account!");
//       }
//     };


//DELETE
export const deleteUser = async (req, res, next) =>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.")
    }catch(err){
        next(err);
    }
}

// user정보 가져오기(conversation.jsx 14번째줄 에서 쓰임)
export const getUser = async (req, res, next) =>{
    // date fetch시에 사용되는 코드
    const userId = req.query.userId;
    const username = req.query.username;
    console.log(userId);
    try{
        const user = userId
        ? await User.findById(userId)
        : await User.findOne({username:  username});
        const { password, isAdmin, ...otherDetails } = user._doc;
        res.status(200).json(otherDetails)
    }catch(err){
        next(err)
    }
};


// 아이디 중복확인
export const idCheck = async (req, res, next) =>{ 
    let result = await User.findOne(
        {identity : req.body.id}
    );

    console.log(result);

    if (result == null) {
        res.send({valid: true});
    } else {
        res.send({valid: false});
    }
}


// 아이디 찾기(이메일)
export const findId = async (req, res, next) => {

    let result = await User.findOne(
        {email: req.body.email}
    );
    console.log(result);
    res.send({id: result});
}


// 비밀번호 재설정
export const resetPW = async (req, res, next) => {
    let { id, password } = req.body;
    console.log(id);
    console.log(password);

    const doBcrypt = (password) => {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        return hash
    }

    const hashedPassword = doBcrypt(password);
    
    let obj = {
        password : hashedPassword
    };

    User.updateOne( {identity: `${id}`}, { $set: { password: `${hashedPassword}`}})
    .then((result) => {
        console.log(result);
        res.send(result);
    })
    .catch((e) => {
        console.log(e);
    })
}




//GET(find)
// export const getUser = async (req, res, next) =>{
//     try{
//         const user = await User.findById(req.params.id);
//         const { password, isAdmin, ...otherDetails } = user._doc;
//         res.status(200).json(otherDetails)
//     }catch(err){
//         next(err);
//     }
// }