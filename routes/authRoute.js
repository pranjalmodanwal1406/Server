const express = require('express');
const {login,registerAdmin,sendEmail,resetPassword} = require('../controllers/authController')

//as User
const router = express.Router();
router.post('/login', login);
//as Admin
router.post('/register-admin', registerAdmin);

//send reset email

router.post('/send-email',sendEmail)

//Reset Password
router.post("/resetPassword", resetPassword);

module.exports = router;