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

const vacinaPaciente = async (id) => {
  const result = await pool.query(`SELECT * FROM VACINAAPLICADA VA JOIN PACIENTE PA ON VA.ID_PACIENTE = PA.ID_PACIENTE JOIN VACINA VC ON VA.ID_VACINA = VC.ID_VACINA WHERE PA.ID_PACIENTE = $1;`, [id]);
  return result.rows;
}

module.exports = { cadastrarVacina, deletarVacina, mostrarAplicacoes, vacinaPaciente };