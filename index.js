const express = require('express')
const staffRouter =require("./routes/staff")

require('dotenv').config();

const PORT=process.env.PORT || '3000'

const app = express();

app.use("/api/staff", staffRouter)

app.listen(PORT, () => {
    console.log("Welcome Clemnt to 127.0.0.1")
});