const pool = require('./index');

const cadastrarVacina = async (idPaciente, idVacina, dataAplicacao) => {
  const result = await pool.query('INSERT INTO VACINAAPLICADA (ID_PACIENTE, ID_VACINA, DATA_APLICACAO) VALUES ($1, $2, $3)', [idPaciente, idVacina, dataAplicacao]);

  return result.rows
}

const deletarVacina = async (idVacina, idPaciente) => {
  const result = await pool.query(`DELETE FROM VACINAAPLICADA WHERE ID_VACINA = $1 AND ID_PACIENTE = $2`, [idVacina, idPaciente]);

  return { "message": "Vacina deleted successfully" };
}

const mostrarAplicacoes = async () => {
  const result = await pool.query(`SELECT * FROM VACINAAPLICADA`);
  return result.rows;
}
module.exports = { cadastrarVacina, deletarVacina, mostrarAplicacoes };