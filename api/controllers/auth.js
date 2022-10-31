import User from "../models/User.js"
import bcrypt from "bcryptjs";
import {createError} from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    console.log( req.body );
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            nickname : req.body.nickname,
            email: req.body.email,
            identity: req.body.id,
            city: req.body.city,
            password: hash
        });
        console.log("newUSer : ", newUser);

        await newUser.save().catch( err => console.log(err) );
        res.status(200).send("User has been created.")
    } catch(err){
        next(err)
    }
};

//username에서 email로 바꿈 나중에 확인부탁
export const login = async (req, res, next) => {
    try{
        const user = await User.findOne({ identity: req.body.id });
        console.log(user)
        if(!user) 
            return next(createError(404, "User not found!"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password, user.password
            );
        if(!isPasswordCorrect) {
            return next(createError(400, "Wrong password or username!"));
        } else{
            const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT);
            
            const { password, isAdmin, ...otherDetails } = user._doc;
            otherDetails["access_token"] = token;
            res.status(200).json({...otherDetails});
        }
    } catch(err){
        next(err);
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

export const emailCheck = async (req, res, next) =>{ 
    let result = await User.findOne(
        {email: req.body.email}
    );

    console.log(result);

    if (result == null) {
        res.send({valid: true});
    } else {
        res.send({valid: false});
    }
}

export const nicknameCheck = async (req, res, next) =>{ 
    let result = await User.findOne(
        {nickname: req.body.nickname}
    );

    console.log(result);

    if (result == null) {
        res.send({valid: true});
    } else {
        res.send({valid: false});
    }
}