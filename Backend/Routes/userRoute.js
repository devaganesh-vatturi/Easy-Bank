const express=require('express');
const { createUser,getUser,deleteUser, withDraw,depositAmount, transferAmount, getHistory,
  userLogin,checkBalance,selfDetails
} = require('../Controllers/userController');
const router=express.Router();
router.route('/createuser').post(createUser);
router.route('/withdraw').post(withDraw);
router.route('/deposit').post(depositAmount);
router.route('/getuser').post(getUser);
router.route('/userlogin').post(userLogin);
router.route('/checkbalance').post(checkBalance);
router.route('/transfer').post(transferAmount);
router.route('/history').post(getHistory);
router.route('/selfdetails').post(selfDetails);
module.exports=router;