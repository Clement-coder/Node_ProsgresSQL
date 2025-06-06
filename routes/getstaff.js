const express = require('express');
const getStaffController = require("../controller/myBoys");
const router = express.Router();

router.get("/", getStaffController);
module.exports = router;