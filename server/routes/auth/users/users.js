const router = require('express').Router();
const UsersController = require('../../../controllers/users');
console.log(`Step 9 users.js`);
// http://localhost:3001/auth/users/getAllUsers
router.get('/getAllUsers', UsersController.getAllUsers);

router.post('/logout', UsersController.logout);

router.post('/createUser', UsersController.getAllUsers);
router.get('/getUserDetail', UsersController.getUserDetail);
router.put('/editUser', UsersController.editUser);
router.delete('/deleteUser', UsersController.deleteUser);
router.get('/getReport', UsersController.getReport);

module.exports = router;