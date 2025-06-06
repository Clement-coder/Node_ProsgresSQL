const express = require('express');
const createStaffRouter = require('./routes/createStaff');
const getStaffRouter = require('./routes/getstaff');
const deleteStaffRouter = require("./routes/deleteStaff");
const updateStaffRouter = require('./routes/updateStaff');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/staff", createStaffRouter);
app.use("/api/staffs", getStaffRouter); 
app.use("/api/delete", deleteStaffRouter);
app.use('/api/update', updateStaffRouter);


app.listen(PORT, () => {
  console.log("Welcome Clemnt to 127.0.0.1");
});
