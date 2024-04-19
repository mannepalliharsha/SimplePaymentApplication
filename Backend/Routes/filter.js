const express=require('express');
const {data}=require('../Database');
const {middleware}=require('./middleware');
const router=express.Router();
router.use(express.json());
router.get('/match',async function(req,res){
   const search=req.query.name || "";
   console.log(search);
     const checkking=await data.find({
         $or : [
              {
                 firstname :{
                      "$regex" : search
                 }
              },
              {
                  lastname : {
                      "$regex" : search
                  }
              }
         ]
     })
     console.log(checkking);
     if(checkking){
     res.status(200).json({
       userdata :  checkking.map(function(check){
        return{
              id : check._id,
             firstname : check.firstname,
             lastname : check.lastname 
        } 
         })
     })
     return ;
    }
  
    res.status(404).json({
          msg : "entered username is not there"
    })

})
module.exports=router