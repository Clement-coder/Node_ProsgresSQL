const express = require('express');
const createStaffController = require("../controller/user");
const getStaffController = require("../controller/myBoys");
const updateStaffController = require("../controller/update");
const deleteStaffController = require("../controller/delete");

const router = express.Router();

router.post("/", createStaffController);
router.get("/", getStaffController);
router.put("/:id", updateStaffController);
router.delete("/:id", deleteStaffController);

module.exports = router;