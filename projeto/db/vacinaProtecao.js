const pool = require('./index');

const mostrarVacinaProtecao = async (text) => {
  const result = await pool.query(`SELECT * FROM VACINA WHERE DOENCA_PROTECAO ILIKE $1`, [`%${text}%`]);
  return result.rows;
}

module.exports = { mostrarVacinaProtecao }