var express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Trough Home');
});

module.exports = router;