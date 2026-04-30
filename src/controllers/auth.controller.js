const userModel = require('../models/user.model');

/**
 
 * - user register controller
 * - POST /api/auth/register
 
 */
async function userRegisterController(req, res) {
        const { name, email, password } = req.body;


        const isExist = await  userModel.findOne({
            email: email
             
        })

        
    
}

module.exports ={
    userRegisterController
}