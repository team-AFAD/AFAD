import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
     conversationId : {
        type: string
       }
    },
    { timestamps: true }
  );

export default mongoose.model("Message", MessageSchema);