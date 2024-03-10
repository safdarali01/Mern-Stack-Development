var express = require('express');
const router = express.Router();
// const {home, register} = require('../controllers/auth-controller');
const authcontrollers = require('../controllers/auth-controller');

// router.get('/', (req, res) => {
//     res.send('Trough Home');
// });

// router.route("/").get(home);
router.route("/").get(authcontrollers.home);
// router.route("/register").get(register);
router.route("/register").post(authcontrollers.register);


module.exports = router;