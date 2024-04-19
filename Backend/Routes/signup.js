const express=require('express');
const jwt=require('jsonwebtoken');
const {data,data2}=require('../Database');
const {validationchecking1}=require('../inputvalidation');
const {jwtpassword}=require('../config');
const router=express.Router();
router.use(express.json());
router.post('/signup',async function(req,res){
   const payload=req.body;
   console.log(payload);
   const jj=validationchecking1.safeParse(payload);
   if(!jj.success){
      res.status(511).json({
         msg :"wrong Inputs"
      })
      return ;
   }
   const identification= await data.findOne({username : payload.username});
   if(identification){
        res.status(511).json({
           msg : "username is already exist"
        })
        return ;
   }
     
  const creation=await data.create({
     username : payload.username,
     password : payload.password,
     firstname : payload.firstname,
     lastname : payload.lastname
   })
   const add=await data2.create({
        userId : creation._id,
        amount :1+ Math.random(1,1000)*100
   })
   const id=creation._id;
   const token=jwt.sign({id},jwtpassword);
   res.status(200).json({
      msg : "data is added",
      token : token
   })

})
module.exports=router;