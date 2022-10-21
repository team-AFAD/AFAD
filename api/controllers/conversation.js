import express from "express";
import Conversation from "../models/Conversation.js"
// import {createError} from "../utils/error.js";

//new conv

export const savedConversation = async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
      });
    
      try {
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
      } catch (err) {
        res.status(500).json(err);
      }
};

//get conv of a user
export const getConversation = async (req, res) => {   
      try {
        const conversation = await Conversation.find({
            members:{ $in:[req.params.userId]}
        });
        res.status(200).json(conversation);
      } catch (err) {
        res.status(500).json(err);
      }
};





// export const createLike = async (req, res, next) => {
//   console.log(req.body);
//   const newLike = new Like(req.body);
//   try{
//    const savedLike = await newLike.save();
//    res.status(200).json(savedLike);
//   }catch(err){
//    res.status(500).json(err)
//   }
// };
