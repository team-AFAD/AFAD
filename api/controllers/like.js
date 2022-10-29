import Post from "../models/Post.js";
import Like from "../models/Like.js";
// import router from "../routes/posts.js";


//like
export const postLike =  async (req, res, next) => {
  console.log("req.body", req.body);
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
  try {
    // const like = await Like.findById(res.params.userId);
    // const post = await Like.findById(res.params.postId);
    if (req.body.userId === res.params.userId || req.body.postId === res.params.postId) {
      await Like.findByIdAndDelete(req.params.id);
      res.status(200).json("The like has been deleted.");
    } else {
      return next(createError(403, "I don't like it"));
    }
  } catch (err) {
    next(err);
  }
};


