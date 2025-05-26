const mongoose=require("mongoose");
const employemodel=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    empid:{
       type:Number,
       require:true
    },
    password:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("employee",employemodel);