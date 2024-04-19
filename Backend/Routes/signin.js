const express=require('express');
const {data}=require('../Database');
const {validationchecking2}=require('../inputvalidation');
const {jwtpassword}=require('../config');
const jwt=require('jsonwebtoken');
const router=express.Router();
  router.use(express.json());
router.post('/signin',async function(req,res){
      const payload=req.body;
      const jj=validationchecking2.safeParse(payload);
      if(!jj.success){
         res.status(511).json({
            msg : "wrong Inputssss"
         })
         return ;
      }
    const checck=await data.findOne({
         username : payload.username,
         password : payload.password
    })
      if(!checck){
         res.status(511).json({
             msg : "username is not exist"
         }) 
         return ;
      }
    const id=checck._id;
    const token=jwt.sign({id},jwtpassword);
    res.status(200).json({
         token : token
    })
})
module.exports=router