import Post from "../models/Post.js";
import Like from "../models/Like.js";
// import router from "../routes/posts.js";


//like
export const postLike =  async (req, res, next) => {
  // console.log("req.body", req.body);
  const newLike = new Like(req.body);

  try {
    const savedLike = await newLike.save();
    res.status(200).send(savedLike);
  } catch (err) {
    res.status(500).json(err);
  }
};

//dislike - destroy
export const deleteLike = async (req, res, next) => {
  console.log(req.body);
  console.log(res.params);
  try {
    // const like = await Like.findById(res.params.userId);
    // const post = await Like.findById(res.params.postId);
    // if (req.body.userId === res.params.userId || req.body.postId === res.params.postId) {
    //   await Like.findByIdAndDelete(req.query.id);
    //   res.status(200).json("The like has been deleted.");
    // } else {
    //   return next(createError(403, "I don't like it"));
    // }
  } catch (err) {
    next(err);
  }
};


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


// export const isLike = async (req, res, next) => {
//   try{
//       const match = await Like.findOne({ "userId": req.params.userId, 
//       "postId": req.params.postId});
//       console.log(match);
//       res.status(200).json(match);
//   }catch(err){
//       next(err);
//   }
// }
