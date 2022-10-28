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

//group
  export const groupPeople =  async (req, res, next) => {
    try{
      const groupJoin = await Join.aggregate([
        {
            $group: {
               _id: '$postId',
              $count: '$postId'
           }
       }
     ]);
      res.status(200).json(updatedUser)
  }catch(err){
      next(err);
  }
  };

