import User from "../models/User.js";

//UPDATE
export const updateUser = async (req, res, next) =>{
    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {$set : req.body}, 
            {new: true}
        );
        res.status(200).json(updatedUser)
    }catch(err){
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

