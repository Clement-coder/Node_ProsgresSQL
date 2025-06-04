const { create } = require("domain");

// const createStaff 

async function createStaffController(req, res) {
    const{name, gender, department, email} = req.body;

    if(!name || !gender || !department || !email) {
        res.status(406).send({
            success: false,
            message:"All fields are required"
        });
    }

    try{
        let result = await createStaff(name, gender, department, email);
        res.status(201).send({
            success: true,
            message: "User was successfully created",
            data: result,
        })
    } catch (error) {
        
    }
    
}