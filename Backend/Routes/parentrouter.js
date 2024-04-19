const express=require('express');
const user1=require('./signin')
const  user2=require('./signup')
const account =require('./account');
const filteringdata=require('./filter');
const router=express.Router();
router.use('/user1',user1);
router.use('/user2',user2);
router.use('/account',account);
router.use('/filter',filteringdata);
module.exports=router