let expressJwt = require('express-jwt');
let auth = expressJwt({
    secret: '123456ABCDEF',
    userProperty:'payload'
});
console.log(`Step 15 auth.js`);
module.exports = auth;
