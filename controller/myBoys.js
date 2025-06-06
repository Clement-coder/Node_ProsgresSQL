const pool = require('../config/pool'); 

const getStaffController = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM staffs');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching staffs:', error);
    res.status(500).json({ error: 'Problem dey massive' });
  }
};

module.exports = getStaffController;
