const mongoose= require('mongoose');

const transactions= mongoose.Schema({

    accno:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    balance:{
           type:Number,
           required:true
    },
    description:{
         type:String
    },
    type:{
       type:String,
       enum:["credited","debited"],
       required:true
    },
    time:{
         type:Date,
         default:Date.now
    }
})

module.exports=mongoose.model("transaction",transactions);