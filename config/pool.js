const {pool} =require("pg")

require('dotenv').config()
module.exports = new pool({
    host
})