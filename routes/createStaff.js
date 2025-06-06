const express = require('express');
const createStaffController = require("../controller/user");
const router = express.Router();

router.post("/", createStaffController);

module.exports = router;
