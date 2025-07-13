const express=require("express");
const protect=require('../MiddleWares/tokenCheck');
const {empLogin, validateJWT}=require("../Controllers/employeeController");
const router=express.Router();
router.route('/emplogin').post(empLogin);
router.route('/validatejwt').get(protect,validateJWT);
module.exports=router;