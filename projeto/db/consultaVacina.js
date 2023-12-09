const pool = require('./index');

const consultaVacinaAno = async () => {
    const result = await pool.query('SELECT * FROM VACINA V JOIN PERIODOAPLICACAOANO A ON V.ID_VACINA = A.ID_VACINA JOIN REDE R ON V.ID_REDE = R.ID_REDE');
    return result.rows;
};

const consultaVacinaMes = async () => {
    const result = await pool.query('SELECT * FROM VACINA V JOIN PERIODOAPLICACAOMES M ON V.ID_VACINA = M.ID_VACINA JOIN REDE R ON V.ID_REDE = R.ID_REDE');
    return result.rows;
};

const consultaVacinaAnoExato = async (ano) => {
    const result = await pool.query('SELECT * FROM VACINA V JOIN PERIODOAPLICACAOANO A ON V.ID_VACINA = A.ID_VACINA JOIN REDE R ON V.ID_REDE = R.ID_REDE WHERE QTD_ANO_INICIAL >= $1 AND QTD_ANO_FINAL <= $1;', [ano]);

    return result.rows;
}

const consultaVacinaMesExato = async (mes) => {
    const result = await pool.query('SELECT * FROM VACINA V JOIN PERIODOAPLICACAOMES M ON V.ID_VACINA = M.ID_VACINA JOIN REDE R ON V.ID_REDE = R.ID_REDE WHERE QTD_MESES_INICIAL >= $1 AND QTD_MESES_FINAL <= $1;', [mes]);

    return result.rows;
}

const consultaVacinaIdade = async (idade) => {
    const result = await pool.query('SELECT * FROM VACINA V JOIN PERIODOAPLICACAOANO A ON V.ID_VACINA = A.ID_VACINA JOIN REDE R ON V.ID_REDE = R.ID_REDE WHERE $1 BETWEEN QTD_ANO_INICIAL AND QTD_ANO_FINAL;', [idade]);

    return result.rows;
}

const consultaVacinaIdadeMes = async (mes) => {
    const result = await pool.query('SELECT * FROM VACINA V JOIN PERIODOAPLICACAOMES M ON V.ID_VACINA = M.ID_VACINA JOIN REDE R ON V.ID_REDE = R.ID_REDE WHERE $1 BETWEEN QTD_MESES_INICIAL AND QTD_MESES_FINAL;', [mes]);

    return result.rows;
}

module.exports = { consultaVacinaAno, consultaVacinaMes, consultaVacinaAnoExato, consultaVacinaMesExato, consultaVacinaIdade, consultaVacinaIdadeMes };