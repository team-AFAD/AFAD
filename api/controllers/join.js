import Join from "../models/Join.js"

//add
export const joinPeople =  async (req, res, next) => {
    console.log("req.body", req.body);
    const newJoin = new Join(req.body);
  
    try {
      const savedJoin = await newJoin.save();
      res.status(200).send(savedJoin);
    } catch (err) {
      res.status(500).json(err);
    }
};

//join 중복확인
export const joinCheck = async (req, res, next) =>{ 
  let result = await User.findOne(
      {userId : req.body.id},
      {postId : req.body.id}
  );

  console.log(result);

  if (result == null) {
      res.send({valid: true});
  } else {
      res.send({valid: false});
  }
}


//group
  export const groupPeople =  async (req, res, next) => {
    try{
      const groupJoin = await Join.aggregate([
        {
          $match : {
            postId: `req.query.변수명`
          }
        },
        {
            $group: {
               _id: '$postId',
              count: {$sum:1}
           }
       }
     ]);
      res.status(200).json(groupJoin)
  }catch(err){
