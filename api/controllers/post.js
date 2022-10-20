import Post from "../models/Post.js";
import router from "../routes/posts.js";

//CREATE
export const createPost = async (req, res, next) => {
   const newPost = new Post(req.body);
   try{
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
   }catch(err){
    res.status(500).json(err)
   }
};


//UPDATE
export const updatePost = async (req, res, next) =>{
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
          try {
            const updatedPost = await Post.findByIdAndUpdate(
              req.params.id,
              {
                $set: req.body,
              },
              { new: true }
            );
            res.status(200).json(updatedPost);
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.status(401).json("You can update only your post!");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    };



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


//DELETE
export const deletePost = async (req, res, next) =>{
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
          try {
            await post.delete();
            res.status(200).json("Post has been deleted...");
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.status(401).json("You can delete only your post!");
        }
      } catch (err) {
        res.status(500).json(err);
      }
};

//GET(find)
export const getPost = async (req, res, next) =>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        next(err);
    }
}

//GET ALL POSTS
export const getPosts = async (req, res, next) =>{
    const username = req.query.user;
    const cateName = req.query.cate;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (cateName) {
      posts = await Post.find({
        categories: {
          $in: [cateName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

