import {createError} from "../utils/error.js";
import Comment from "../models/Comment.js";
import Post from "../models/Post.js";
import util from "../utils/util.js"

export const addComment = async (req, res, next) => {
  // const newComment = new Comment({ ...req.body, userId: req.user.id });
  // try {
  //   const savedComment = await newComment.save();
  //   res.status(200).send(savedComment);
  // } catch (err) {
  //   next(err);
  // }

    // DB에서 찾은 post를 보관해서 다음 callback함수에서 계속해서 사용
    var post = res.locals.post; // 보내줄 때 post로 보내줘야 함
    req.body.userId = req.user._id;
    req.body.post = post._id;
};



export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(res.params.id);
    const post = await Post.findById(res.params.id);
    if (req.user.id === comment.userId || req.user.id === post.userId) {
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
  try {
    const comments = await Comment.find({ videoId: req.params.postId });
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};