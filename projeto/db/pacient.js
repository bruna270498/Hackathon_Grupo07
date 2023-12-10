const pool = require('./index');

const criarPaciente = async (nome, data_nascimento) => {
  const result = await pool.query('INSERT INTO PACIENTE (ID_PACIENTE, NOME, DATA_NASCIMENTO) VALUES ((SELECT COALESCE(MAX(ID_PACIENTE), 0) + 1 FROM PACIENTE), $1, $2)', [nome, data_nascimento]);

  return { message: "Patient successfully registered." };
}

const mostrarPacientes = async (nome) => {
  const result = await pool.query(`SELECT ID_PACIENTE, NOME, DATA_NASCIMENTO FROM PACIENTE WHERE NOME ILIKE $1`, [`%${nome}%`]);
  // const result = await pool.query(`SELECT NOME, DATA_NASCIMENTO FROM PACIENTE WHERE ID_PACIENTE = $1`, [id]);
  return result.rows;
}

const atualizarPaciente = async (nome, dataNascimento, id) => {
  const result = await pool.query('UPDATE PACIENTE SET NOME = $1, DATA_NASCIMENTO = $2 WHERE ID_PACIENTE = $3 RETURNING *', [nome, dataNascimento, id]);

  return result.rows;
}

const deletarPaciente = async (id) => {
  const result = await pool.query(`DELETE FROM PACIENTE WHERE ID_PACIENTE = $1`, [id]);

  return { "message": "Patient deleted successfully" };
}

const todosPacientes = async () => {
  const result = await pool.query(`SELECT * FROM PACIENTE`);
  return result.rows;
}


module.exports = { criarPaciente, atualizarPaciente, mostrarPacientes, deletarPaciente, todosPacientes };