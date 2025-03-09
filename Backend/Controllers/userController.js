const user= require('../models/userModel');
const transaction=require('../models/transactionModel');
exports.createUser= async(req,res)=>{
    console.log(req.body);
    const {name,phno,balance,address,password}=req.body;

    try{
        const accno=await generateAccno();
        console.log("the accno",accno);
        const User= await user.create({name,phno,accno,balance,address,password});
        res.status(201).json({success:true,user:User});
    }
    catch(e)
    {
      res.status(500).json({message:"failed"});
    }
}
async function generateAccno()
{
    const lastacc= await user.findOne().sort({accno:-1}).select("accno").lean();
    const newaccno = (lastacc?.accno ?? 1000) + 1;
    return (newaccno);
}
exports.getUser= async(req,res)=>{
    console.log(req.body.name);
    try{
        const User=await user.findOne({name:req.body.name});
        if(!User)
        {
               return res.status(404).json({message:"user not found"});
        }
            res.status(200).json({User});
        // res.status(404).json({"not found"});
    }
    catch(e)
    {
        res.status(500);
    }


}
exports.withDraw=async(req,res)=>{

    try{
        console.log(req.body)
    let accnum=req.body.accno;
     let money=req.body.amount;
     
     const User = await user.findOne({accno:accnum});
     console.log(User);
     if(!User)
     {
        return res.status(404).json({message:"user not found"});
     }
        let balance=User.balance;
        if(balance>money)
        {
            let newbalance=balance-money;
            const updatebalance= await user.findOneAndUpdate({accno:accnum},{$set:{balance:newbalance}},{new:true});
             let obj={accno:accnum,amount:money,balance:updatebalance.balance,description:"Withdrawed",type:"debited"}
             const trans=await transaction.create(obj);
            res.status(200).json({success:true,balance:updatebalance.balance});
        }
        else{
            res.status(401).json({message:"balance is insufficient"});
        }

     
    }
    catch(e)
    {
    res.status(500).send("error occured!");
    }
}
exports.depositAmount=async(req,res)=>{
    try{
        let amount=req.body.amount;
        let accno=req.body.accno;
        console.log(req.body);
        const User=await user.findOne({accno:accno});
        if(User)
        {
            console.log("here");
            const result= await user.findOneAndUpdate({accno:accno},{$inc:{balance:amount}},{new:true});
            if(result)
            {
                res.status(200).json({success:true,balance:result.balance});
                //transaction
                let obj={accno:accno, amount:amount,balance:result.balance,description :"Deposited",type:"credited"};
                const trans= await transaction.create(obj);
            }
            else{
                return res.status(404).json({messgae:"error in updating balance"});
            }
            
           
        }
        else{
            return res.status(404).json({message:"user not found"});
        }
    }
    catch(e)
    {
       console.log(e);
    }
}
exports.transferAmount=async(req,res)=>{
    try{
       console.log(req.body);
       let accno=req.body.accno;
       let taccno=req.body.taccno;
       let amount=req.body.amount;
       const User=await user.findOne({accno:accno});
       const tUser=await user.findOne({accno:taccno});
       if(User&&tUser)
       {
        console.log(`user balance ${User.balance}`)
          if(User.balance>amount)
          {
            const updatedUser= await user.findOneAndUpdate({accno:accno},{$inc:{balance:-amount}},{new:true});
            const updatedTUser=await user.findOneAndUpdate({accno:taccno},{$inc:{balance:amount}},{new:true});
            let obj={accno:accno,amount:amount,balance:updatedUser.balance,description:`sent to ${taccno}`,type:"debited"};
            let object={accno:taccno,amount:amount,balance:updatedTUser.balance,description:`reveived from ${accno}`,type:"credited"};
            let trans=await transaction.create(obj);
            let transac=await transaction.create(object);
            res.status(200).json({success:true, balance:updatedUser.balance});
          }
          else{
             res.status(404).json({message:"insufficient balance!"});
          }
          
          
       }
       else{
        return res.status(404).json({message:"Both users should be valid"});
       }
    }
    catch(e)
    {
        console.log(e);
    }
}
exports.getHistory=async(req,res)=>{
    try{
        let accno=req.body.accno;
        console.log(accno);
        const result=await transaction.find({accno:accno}).sort({time:-1});
        console.log(result);
        res.status(200).json({success:true,history:result});
    }
    catch(e)
    {
        console.log(e);
    }
}
exports.deleteUser=async(req,res)=>{
    console.log(req.body.accno);
    try{
        const User=await user.findOneAndDelete({accno:req.body.accno});
        if(!User)
        {
            return res.status(404).json({message:"not user found"});
        }
        res.status(200).json({success:true});
    }
    catch(e)
    {
        res.status(500).send("error occur");;
    }
}