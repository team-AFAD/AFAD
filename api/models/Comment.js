import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    postId: {
      type: String,
      required: true,
    },
    nickname : {
      type: String
    },
    desc: {
      type: String
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);