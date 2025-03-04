
const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phno:{
        type:Number,
        required:true
    },
    accno:{
        type:Number,
        required:true
    },
    balance:{
        type:Number,
        required:true,
        default:0
    },
    address:{
        type:String,
        required:true
    },
    password:{
         type:String,
         required:true
    }



},
{
    timestamp:true
})

module.exports=mongoose.model("user",userSchema);