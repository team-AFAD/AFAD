import Post from "../models/Post.js";
import Like from "../models/Like.js";
// import router from "../routes/posts.js";

//like & dislike a post
export const likePost = async(req, res, next) => {
    try{
      const post = await Post.findById(req.params.id);
      if(!post.likes.includes(req.body.userId)){
        await post.updateOne({
          $push:{likes : req.body.userId}
        });
        res.status(200).json("I like it!");
      } else {
        await post.updateOne({
          $pull:{likes : req.body.userId}
        });
        res.status(200).json("I don't like it! :( ");
      }
    } catch(err){
      res.status(500).json(err);
    }
  };