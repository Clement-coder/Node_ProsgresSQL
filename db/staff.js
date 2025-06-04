const pool=require("../config/pool")

async function createStaff(name, gender, department, email) {
    try{
        let {rows} = await pool.query("INSERT INTO staffs (name, gender, department, email) VALUES($1,$2,$3,$4)", 
        [name, gender, department, email]
        )

        return rows

    } catch (error) {
        
        throw new Error(`Error: ${error.message}`)
    }
    
}

module.exports = createStaff