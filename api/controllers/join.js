import Join from "../models/Join.js"

//add
export const joinPeople =  async (req, res, next) => {
    console.log(req.body);
    const newJoin = new Join(req.body);
  
    try {
        const savedJoin = await newJoin.save();
      res.status(200).send(savedJoin);
    } catch (err) {
      res.status(500).json(err);
    }
  };
