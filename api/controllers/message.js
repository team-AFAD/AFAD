import Message from "../models/Message.js"
// import {createError} from "../utils/error.js";

//add
export const addMessage =  async (req, res, next) => {
    const newMessage = new Message(req.body);
  
    try {
      const savedMessage = await newMessage.save();
      res.status(200).json(savedMessage);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  //get
  export const getMessage =  async (req, res, next) => {
    try {
      const messages = await Message.find({
        conversationId:req.params.conversationId
      });
      res.status(200).json(messages);
    } catch (err) {
      res.status(500).json(err);
    }
  };