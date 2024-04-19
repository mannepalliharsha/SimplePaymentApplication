const express=require('express');
const {data}=require('../Database');
const {data2}=require('../Database');
const {middleware}=require('./middleware');
const mongoose=require("mongoose");
const router=express.Router();
router.use(express.json());
router.get('/getamount', middleware, async function(req,res){
      console.log(req.headers.authorization);
    //  console.log(req.id);
      const identify=await data2.findOne({userId : req.userId});
      if(!identify){
          res.status(404).json({
            msg : "user does not exit"
          })
          return ;
      }
      res.status(200).json({
           amount : identify.amount
      })
    })

  router.post('/transfer',middleware,async function(req,res){
    const session=await mongoose.startSession();
    session.startTransaction();
       const userId=req.userId;
       console.log(userId);
       const identify=await data2.findOne({userId : userId}).session(session);
       const payload=req.body;
       if(!identify || identify.amount<payload.amount ){
        await session.abortTransaction();
           res.status(404).json({
              mg : "user doent exist you cannot transfer money"
           })
           return;
       }
       const identify2=await data2.findOne({userId : payload.userId}).session();
       if(!identify2){
        await session.abortTransaction();
           res.status(404).json({
              msg : "enduser doesnot exist"
           })
           return ;
       }
       await data2.updateOne({
           userId : req.userId
       },{
            amount : identify.amount-payload.amount
       }).session(session)
       await data2.updateOne({
           userId : payload.userId
       },{
            amount : identify2.amount+payload.amount
       }).session(session)
       await session.commitTransaction();
       res.status(200).json({
           msg : "transfer successfully"
       })
   

  })
module.exports=router
