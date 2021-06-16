var router = require('express').Router();

router.use('/users', require('./users/users'));
router.use('/sites', require('./sites/sites'));
router.use('/events', require('./events/events'));
console.log(`Step 8 index.js`);
module.exports = router;