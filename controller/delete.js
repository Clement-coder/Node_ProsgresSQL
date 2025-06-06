const { deleteStaff } = require("../db/staff");

const deleteStaffController = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await deleteStaff(id);

    if (!deleted) {
      return res.status(404).json({ error: "Staff not found" });
    }

    res.status(200).json({ message: "Staff deleted", data: deleted });
  } catch (error) {
    res.status(500).json({ error: "Problem dey: " + error.message });
  }
};

module.exports = deleteStaffController;
