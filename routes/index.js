const express = require('express');
const router = express.Router();

router.use('/', require('./todo'))

module.exports = router;