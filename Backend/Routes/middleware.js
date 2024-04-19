 const jwt=require("jsonwebtoken");
 const {jwtpassword}=require('../config');
 function middleware(req,res,next){
     const header=req.headers.authorization;
     console.log(header);
    //    if(!header.startsWith("Bearer")){
    //        res.status(411).json({
    //           msg : "Invalid token"
    //        })
    //        return ;
    //    }
    //   const token=header.split(' ')[1];
       try{
        const valid=jwt.verify(header,jwtpassword);
       //  console.log(valid);
        req.userId=valid.id;
        console.log(req.userId);
        next();
       }
      catch{
          res.status(404).json({
             msg : "Invalid Token"
          })
      }
 }
 module.exports={
      middleware
 }