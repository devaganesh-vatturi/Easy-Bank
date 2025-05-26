const express=require("express");
const {empLogin}=require("../Controllers/employeeController");
const router=express.Router();
router.route('/emplogin').post(empLogin);
module.exports=router;