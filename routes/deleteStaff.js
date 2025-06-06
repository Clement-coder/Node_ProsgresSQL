const express = require('express');
const deleteStaffController = require('../controller/delete'); 

const router = express.Router();

router.delete('/:id', deleteStaffController);

module.exports = router;
