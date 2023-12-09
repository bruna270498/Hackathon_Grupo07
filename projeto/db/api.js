const { Pool } = require('pg');

const pool = new Pool({
    user: 'irene',
    host: 'itcpostgresql.postgres.database.azure.com',
    database: 'db007',
    password: '%&unsas_aew27007',
    port: 5432,
    ssl: true
});

const showVacinasCount = async () => {
    const result = await pool.query('SELECT count(*) from VACINA');
    console.log(result.rows);
}

const criarPaciente = async (nome, dataNascimento) => {
    const result = await pool.query('INSERT INTO PACIENTE (NOME, DATA_NASCIMENTO) VALUES ($1, $2)', [nome, dataNascimento]);

    return result;
}

const mostrarPacientes = async () => {
    const result = await pool.query(`SELECT * FROM PACIENTE`);
    console.log(result.rows);
}

const atualizarPaciente = async (nome, dataNascimento, id) => {
    const result = await pool.query('UPDATE PACIENTE SET NOME = $1, DATA_NASCIMENTO = $2 WHERE ID_PACIENTE = $3', [nome, dataNascimento, id]);

    console.log(result.rows);
}

// console.log(pool.options.user);
// console.log(pool.options.database);
// showVacinasCount();
// mostrarPacientes();

module.exports = { showVacinasCount, criarPaciente, atualizarPaciente };