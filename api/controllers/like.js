import Post from "../models/Post.js";
import Like from "../models/Like.js";
// import router from "../routes/posts.js";


// export const postLike =  async (req, res, next) => {
  // console.log("req.body", req.body);
//   const newLike = new Like({
//     postId : req.body.postId,
//     userId : req.body.userId
//   });

//   try {
//     const savedLike = await newLike.save();
//     res.status(200).send(savedLike);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };


//like
export const postLike =  async (req, res, next) => {
  console.log("좋아요 :", req.body);
  try {
    const newLike = new Like({
      postId : req.body.postId,
      userId : req.user.id
    });
    await newLike.save();
    res.status(200).send("Like it");
  } catch (err) {
    res.status(500).json(err);
  }
};


  //DELETE
export const deleteLike = async (req, res, next) =>{
  console.log( "Like Delete : ", req.body );
  try{
      await Like.deleteOne(req.body);
      res.status(200).json("I don't like it! :( ")
  }catch(err){
    res.status(500).json(err);
  }
}



//유지
export const isLike = async (req, res, next) => {
    // console.log(req.params.userId);
    try{
        const match = await Like.findOne({ "userId": req.query.userId, 
        "postId": req.query.postId});
        // console.log(match);
        res.status(200).json(match);
    }catch(err){
        next(err);
    }
}

export const getLike = async (req, res, next) => {
  console.log("req.query.userId", req.query.userId);
  try{
      const result = await Like.find({ "userId": req.query.userId});
      console.log("likelike", result);
      res.status(200).json(result);
  }catch(err){
      next(err);
  }
}
