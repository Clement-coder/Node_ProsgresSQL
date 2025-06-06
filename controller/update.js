const { updateStaff } = require('../db/staff');

const updateStaffController = async (req, res) => {
  const { id } = req.params;
  const { name, gender, department, email } = req.body;

  try {
    const updated = await updateStaff(id, name, gender, department, email);

    if (!updated) {
      return res.status(404).json({ error: "Staff not found" });
    }

    res.status(200).json({ message: "updated successfully", data: updated });
  } catch (error) {
    res.status(500).json({ error: "Problem dey when updating: " + error.message });
  }
};

module.exports = updateStaffController;
