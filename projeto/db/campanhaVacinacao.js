const pool = require('./index');

const adicionarCampanha = async (descricao, dataInicio, dataFim) => {
  const result = pool.query(`INSERT INTO CAMPANHA (ID_CAMPANHA, DESCRICAO, DATA_INICIO, DATA_FIM) VALUES ((SELECT COALESCE(MAX(ID_CAMPANHA), 0) + 1 FROM CAMPANHA), $1, $2, $3)`, [descricao, dataInicio, dataFim]);

  return result.rows;
}

const atualizarCampanha = async (descricao, dataInicio, dataFim, id) => {
  const result = await pool.query('UPDATE CAMPANHA SET DESCRICAO = $1, DATA_INICIO = $2, DATA_FIM = $3 WHERE ID_CAMPANHA = $4', [descricao, dataInicio, dataFim, id]);

  return result.rows;
}

const pesquisaCampanhaData = async (data) => {
  const result = await pool.query('SELECT * FROM CAMPANHA WHERE DATA_INICIO >= $1 AND DATA_FIM <= $1', [data]);

  return result.rows;
}

const adicionarVacinaCampanha = async (idCampanha, idVacina) => {
  const result = await pool.query('INSERT INTO CAMPANHAVACINA (ID_CAMPANHA, ID_VACINA) VALUES ($1, $2)', [idCampanha, idVacina]);

  return result.rows;
}

const deletarVacinaCampanha = async (idVacina) => {
  const result = await pool.query('DELETE FROM CAMPANHAVACINA WHERE ID_VACINA = $1', [idVacina]);

  return { "message": "Campanha deleted successfully" };
}

const mostrarCampanhaVacina = async (text) => {
  const result = await pool.query('SELECT C.* FROM CAMPANHA C JOIN CAMPANHAVACINA CV ON C.ID_CAMPANHA = CV.ID_CAMPANHA JOIN VACINA V ON CV.ID_VACINA = V.ID_VACINA WHERE V.DOENCA_PROTECAO ILIKE $1', [`%${text}%`]);
  console.log(result);
  return result;
}

mostrarCampanhaVacina()

module.exports = { adicionarCampanha, atualizarCampanha, pesquisaCampanhaData, adicionarVacinaCampanha, deletarVacinaCampanha, mostrarCampanhaVacina };