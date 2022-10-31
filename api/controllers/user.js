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


//follow a user;
export const followUser = async (req, res, next) =>{
    if (req.body.userId !== req.params.id) {
        try {
          const user = await User.findById(req.params.id);
          const currentUser = await User.findById(req.body.userId);
          if (!user.followers.includes(req.body.userId)) {
            await user.updateOne({ $push: { followers: req.body.userId } });
            await currentUser.updateOne({ $push: { followings: req.params.id } });
            res.status(200).json("user has been followed");
          } else {
            res.status(403).json("you allready follow this user");
          }
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(403).json("you cant follow yourself");
      }
    };


//unfollow a user
export const unfollowUser = async (req, res, next) =>{
    if (req.body.userId !== req.params.id) {
        try {
          const user = await User.findById(req.params.id);
          const currentUser = await User.findById(req.body.userId);
          if (user.followers.includes(req.body.userId)) {
            await user.updateOne({ $pull: { followers: req.body.userId } });
            await currentUser.updateOne({ $pull: { followings: req.params.id } });
            res.status(200).json("user has been unfollowed");
          } else {
            res.status(403).json("you dont follow this user");
          }
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(403).json("you cant unfollow yourself");
      }
    };
