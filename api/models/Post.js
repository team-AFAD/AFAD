import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
      userId:{
        type: String
      },
      nickname: {
        type: String,
        default:""
      },
      username: {
        type: String,
      },
      title: {
        type: String,
        required: true
      },
      merchandise: {
        type: String,
        required: true,
      },
      price:{
        type:Number,
        default:""
      },
      num_people:{
        type:String,
        default:"1"
      },
      perPayment:{
        type:Number,
        default:"0"
      },
      end_date:{
        type:String,
        default:""
      },  
      place:{
        type:String
      },
      photo: {
        type: String,
        required: false,
      },
      desc: {
        type: String,
        required: true,
      },
      url:{
        type: String,
      },    
      likes:{
        type: Array,
        default:[]
      },
    },
    { timestamps: true }
  );

export default mongoose.model("Post", PostSchema);