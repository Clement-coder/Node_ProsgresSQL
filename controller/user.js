const createStaff = require("../db/staff");

async function createStaffController(req, res) {
    const { name, gender, department, email } = req.body;

    if (!name || typeof name !== 'string' || name.length < 3) {
        return res.status(406).send({
            success: false,
            message: "Name is required and must be at least 3 characters.",
        });
    }

    if (!gender || !["male", "female"].includes(gender)) {
        return res.status(406).send({
            success: false,
            message: "Gender must be 'male' or 'female'.",
        });
    }

    if (!department || typeof department !== 'string') {
        return res.status(406).send({
            success: false,
            message: "Department is required.",
        });
    }

 if (typeof email === 'string') {
    email = email.toLowerCase();
}

if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(406).send({
        success: false,
        message: "Invalid email",
    });
}

    try {
        const result = await createStaff.createStaff(name, gender, department, email);
        return res.status(201).send({
            success: true,
            message: "Broo you successfully created a staff!!",
            data: result,
        });
    } catch (error) {
        console.error("Create staff error:", error);
        return res.status(500).send({
            success: false,
            message: "Serious error occurred.",
        });
    }
}

module.exports = createStaffController;
