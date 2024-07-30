const mongoose=require("mongoose")
const loginSchema=mongoose.Schema(
{

    username:String,
    password:String
}
)
const loginModel=mongoose.model("adminLogindata",loginSchema)
module.exports=loginModel