const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const MONGO_URL=process.env.MONGO_URL;
app.use(express.json());
app.use(cors());
console.log("MONGO_URL from process.env:", process.env.MONGO_URL);
if (!MONGO_URL) {
    console.error("MONGO_URL is not defined. Check your .env file.");
    process.exit(1);
}
const user=require('./Routes/userRoute.js');
const employee=require('./Routes/employeeRoute.js');
app.use("/bank",user);
app.use("/bank",employee);
app.get(['/', '/bank'], (req, res) => {
    try{
    res.sendFile(__dirname + '/index.html');
    }catch(e){
      console.log("erorrrrr", e);
    }
  });
mongoose.connect(MONGO_URL).then(()=>{
    console.log("DB is Connected");
    app.listen(5000,()=>{
        console.log("running in port 5000");
    })
})
.catch(()=>{
    console.log("Failed to connect");
})
module.exports=app;
