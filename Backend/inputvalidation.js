const zod=require('zod');
const validationchecking1=zod.object({
    firstname : zod.string(),
    lastname : zod.string(),
    username : zod.string().email(),
    password : zod.string()
})
const validationchecking2=zod.object({
     username : zod.string().email(),
     password  : zod.string()
})
module.exports={
      validationchecking1,
      validationchecking2
}