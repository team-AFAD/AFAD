import mongoose from "mongoose";

const FollowSchema = new mongoose.Schema({
      userId:{
        type: String
      },
      followerId:{
        type: String
      }
    },
    { timestamps: true }
  );

export default mongoose.model("Follow", FollowSchema);