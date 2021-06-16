const router = require('express').Router();
const LoginController = require('../controllers/login/loginCtr');
const UsersController = require('../controllers/users');
console.log(`Step 5 login.js`);

//http://localhost:3001/login
router.post('/login', LoginController.login);
//http://localhost:3001/signup
router.post('/signup', UsersController.signup);
router.post('/getReport',UsersController.getReport);


module.exports = router;