import {createError} from "../utils/error.js";
import Comment from "../models/Comment.js";
import Post from "../models/Post.js";

// export const addComment = async (req, res, next) => {
//   console.log(req.query.desc);
//   const newComment = new Comment(...req.body);
//   try {
//     const savedComment = await newComment.save();
//     res.status(200).send(savedComment);
//   } catch (err) {
//     next(err);
//   }
// };

//댓글작성(수정)
export const addComment = async (req, res, next) => {  
  try {
    const newComment = new Comment({
      postId : req.body.postId,
      userId : req.body.userId,
      desc : req.body.desc,
      nickname : req.body.nickname
    });
    await newComment.save();
    res.status(200).send("댓글완성");
  } catch (err) {
    next(err);
  }
};

// 정화 원본
// export const deleteComment = async (req, res, next) => {
//   try {
//     const comment = await Comment.findById(res.params.id);
//     console.log(comment);
//     if ( req.user.id === comment.userId ) {
//       await Comment.findByIdAndDelete(req.params.id);
//       res.status(200).json("The comment has been deleted.");
//     } else {
//       return next(createError(403, "You can delete ony your comment!"));
//     }
//   } catch (err) {
//     next(err);
//   }
// };

// 유정 수정본
export const deleteComment = async (req, res, next) => {
  console.log("나도 삭제하고 싶어"); // 여기까지 Ok
  console.log(res); // 매우 긴 객체옴.
  console.log(res.params); // undefined
  console.log(res.params.id); // TypeError: Cannot read properties of undefined (reading 'id')

  try {
    const comment = await Comment.findById(res.params.id);
    console.log(comment);
    if ( req.user.id === comment.userId ) {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("The comment has been deleted.");
    } else {
      return next(createError(403, "You can delete ony your comment!"));
    }
  } catch (err) {
    next(err);
  }
};

export const getComments = async (req, res, next) => {
  console.log("모르겠다 정말",req.params);
  try {
    const comments = await Comment.find({ postId: req.params.postid });
    // console.log("모르겠다 정말222",comments);
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};