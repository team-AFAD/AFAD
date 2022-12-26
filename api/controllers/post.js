import Post from "../models/Post.js";
import router from "../routes/posts.js";

//CREATE
export const createPost = async (req, res, next) => {
  req.body["photo"] = (req.file == undefined) ? 'defaultImage.jpg' : req.file.filename;
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
      const data = {
        title : req.body.title,
        merchandise: req.body.merchandise,
        end_date: req.body.end_date,
        place: req.body.place,
        desc: req.body.desc, 
        photo: req.file != undefined ? req.file.filename : post.photo,
        // price:req.body.price, 
      }
      console.log( data );
        // 
        // if (post.userId === req.body.userId) {
          try {
            console.log("************");
            const updatedPost = await Post.findByIdAndUpdate(
              req.params.id,
              {
                $set: data,
              },
              { new: true }
            );
            res.status(200).json(updatedPost);
          } catch (err) {
            res.status(500).json(err);
          }
        // } else {
          // res.status(401).json("You can update only your post!");
        // }
      } catch (err) {
        res.status(500).json(err);
      }
    };




//DELETE
export const deletePost = async (req, res, next) =>{
    try {
      const post = await Post.findById(req.params.id);
      console.log(post);
      // if (post.nickname === req.body.nickname) {
        try {
          await post.delete();
          res.status(200).json("Post has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      // } else {
        // res.status(401).json("You can delete only your post!");
      // }
    } catch (err) {
      res.status(500).json(err);
    }
};

//GET(find)
export const getPost = async (req, res, next) =>{
    try{
        const post = await Post.findById(req.params.id).sort({'create_at' : -1});
        res.status(200).json(post);
    }catch(err){
        next(err);
    }
}

//GET ALL POSTS(게시판 띄우기)
export const getPosts = async (req, res, next) =>{
    const username = req.query.user;
    // console.log(username);
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
      posts = await Post.find().sort({'createdAt' : -1});
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

