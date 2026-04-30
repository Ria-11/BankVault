const express = require('express');
const authController = require("../controllers/auth.controller")



const router = express.Router();



router.post("/register" , authController.userRegisterController)
///*POST/api/login */
//router.post("/login" , authController.userLoginController)




module.exports = router;