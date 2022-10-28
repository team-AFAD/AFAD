import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    nickname:{
        type: String,
        required: true,
        default:""
    },
    identity:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    profilePicture:{
        type:String,
        default:""
    },
    city: {
        type: String,
        max: 50,
        default:""
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
},{timestamps : true});

export default mongoose.model("User", UserSchema);