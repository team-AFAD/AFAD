import mongoose from "mongoose";

const JoinSchema = new mongoose.Schema({
      userId:{
        type: String
      },
      postId:{
        type: String
      }
    },
    { timestamps: true }
  );

export default mongoose.model("Join", JoinSchema);