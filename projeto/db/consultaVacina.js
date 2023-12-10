const pool = require('./index');

const consultaVacinaAno = async () => {
    const result = await pool.query('SELECT * FROM VACINA V JOIN PERIODOAPLICACAOANO A ON V.ID_VACINA = A.ID_VACINA JOIN REDE R ON V.ID_REDE = R.ID_REDE');
    return result.rows;
};

const consultaVacinaMes = async () => {
    const result = await pool.query('SELECT * FROM VACINA V JOIN PERIODOAPLICACAOMES M ON V.ID_VACINA = M.ID_VACINA JOIN REDE R ON V.ID_REDE = R.ID_REDE');
    return result.rows;
};

module.exports = { consultaVacinaAno, consultaVacinaMes }