import mongoose from "mongoose";

const PaymentsSchema = new mongoose.Schema({
    merchant_uid:{
        type: String,
        required: true,
        unique: true
    },
    nickname:{
        type: String,
        required: true,
        default:""
    },
    productName:{
        type: String,
        required: true
    },
    productPrice:{
        type: Number,
        required: true
    }
},{timestamps : true});

export default mongoose.model("Payments", PaymentsSchema);