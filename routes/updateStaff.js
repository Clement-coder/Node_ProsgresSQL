const express = require('express');
const updateStaffController = require('../controller/update');

const router = express.Router();

router.put('/:id', updateStaffController); // 

module.exports = router;
