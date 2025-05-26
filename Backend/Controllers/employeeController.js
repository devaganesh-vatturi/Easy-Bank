const employee=require('../models/employeeModel');
exports.empLogin=async(req,res)=>{
    console.log(req.body);
    const {employeeId,password}=req.body;
    try{
     const emp= await employee.findOne({empid:employeeId});
     if(emp)
     {
        console.log(password);
        console.log("emp pass",emp.password);
        
        if(password===emp.password)
        {
            return res.status(200).json({success:true});
        }
        return res.status(401).json({success:false,message:"incorrect password"});
    }
    return res.status(404).json({success:false,message:"user not found"});
    }
    catch(e)
    {
        console.log(e);
    }
}