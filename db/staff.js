const pool = require('../config/pool');

async function createStaff(name, gender, department, email) {
  const result = await pool.query(
    'INSERT INTO staffs (name, gender, department, email) VALUES($1, $2, $3, $4) RETURNING *',
    [name, gender, department, email]
  );
  return result.rows[0];
}

async function getAllStaff() {
  const result = await pool.query('SELECT * FROM staffs');
  return result.rows;
}

async function updateStaff(id, name, gender, department, email) {
  const result = await pool.query(
    'UPDATE staffs SET name = $1, gender = $2, department = $3, email = $4 WHERE id = $5 RETURNING *',
    [name, gender, department, email, id]
  );
  return result.rows[0];
}

async function deleteStaff(id) {
  const result = await pool.query('DELETE FROM staffs WHERE id = $1 RETURNING *', [id]);
  return result.rows[0]; 
}

module.exports = {
  createStaff,
  getAllStaff,
  updateStaff,
  deleteStaff
};