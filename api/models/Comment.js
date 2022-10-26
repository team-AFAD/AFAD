import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    // 댓글 작성자
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'User', // user인지 User인지 헷갈림.
      required: true,
    },
    // 댓글이 달리는 게시물
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Post',
      required: true,
    },
    // 대댓글은 다른 댓글에 달리므로 댓글 간의 관계 형성 필요.
    // 자기 자신의 모델을 자신의 항목으로 갖는 것을 self referencing relationship이라 함.
    parentComment: {
      type:mongoose.Schema.Types.ObjectId, 
      ref:'Comment'
    },
    isDeleted: 
      {type:Boolean
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// DB에는 대댓글의 부모정보만 저장하지만 웹사이트에서는 부모로부터 자식을 찾아내려가는 것이
// 편리하므로 자식 댓글의 정보를 갖는 항목을 가상 항목으로 추가.
CommentSchema.virtual('childComments')
  .get(function(){ return this._childComments; })
  .set(function(value){ this._childComments=value; });

export default mongoose.model("Comment", CommentSchema);