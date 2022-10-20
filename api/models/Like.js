import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
      userId:{
        type: String
      },
      postId:{
        type: String
      },
      likes:{
        type: Array,
        default:[]
      },
    },
    { timestamps: true }
  );

export default mongoose.model("Like", LikeSchema);