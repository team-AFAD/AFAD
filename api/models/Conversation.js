import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema({
    members : {
        type: Array
    },
    sender : {
        type: String
    },
    text : {
        type: String
    },

    },
    { timestamps: true }
  );

export default mongoose.model("Conversation", ConversationSchema);