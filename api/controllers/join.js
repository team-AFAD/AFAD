import Join from "../models/Join.js"

// add
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

//join 중복확인 - joinpeople에서
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



export const groupPeople =  async (req, res, next) => {
  console.log(req.query.postId);
  try{
    const groupJoin = await Join.aggregate([
      {
        $group: {
          _id : '$postId',
          count : {$sum: 1}
        }
      }
    ]);

    let count;
    for (let i=0; i<groupJoin.length; i++) {
      if (groupJoin[i]._id == req.query.postId) {
        console.log(groupJoin[i].count);
        count = groupJoin[i].count;
      }
    }
    // console.log("group", groupJoin[0]._id);
    res.status(200).json(count);
  } catch(err){
    console.log(err);
    next(err);
  }
};
