const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://harshamannepalli88:harsha@cluster0.yobv7cc.mongodb.net/Logindata");
const structure=mongoose.Schema({
    firstname : String,
    lastname  : String,
    username  : String,
    password  : String
})
const data=mongoose.model("signupdata",structure);
const structure2=mongoose.Schema({
     userId : {
         type : mongoose.Schema.Types.ObjectId,
        ref : "signupdata"
     },
     amount :{
         type : Number
     }
})
const data2=mongoose.model("amount",structure2);
module.exports={
      data,
      data2
}