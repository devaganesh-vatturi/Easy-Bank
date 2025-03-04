const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();
const MONGO_URL=process.env.MONGO_URL;
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hey");
});

if (!MONGO_URL) {
    console.error("MONGO_URL is not defined. Check your .env file.");
    process.exit(1);
}

const user=require('./Routes/userRoute.js');
app.use("/bank",user);
mongoose.connect(MONGO_URL).then(()=>{
    console.log("DB is Connected");
    app.listen(3000,()=>{
        console.log("running in port 3000");
    })
})
.catch(()=>{
    console.log("Failed to connect");
})
module.exports=app;