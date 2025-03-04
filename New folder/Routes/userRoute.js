const express=require('express');
const { createUser,getUser,deleteUser, withDraw,depositAmount, transferAmount, getHistory} = require('../Controllers/userController');
const router=express.Router();
router.route('/createuser').post(createUser);
router.route('/withdraw').post(withDraw);
router.route('/deposit').post(depositAmount);
router.route('/getuser').post(getUser);
router.route('/deleteuser').post(deleteUser);
router.route('/transfer').post(transferAmount);
router.route('/history').post(getHistory);

module.exports=router;