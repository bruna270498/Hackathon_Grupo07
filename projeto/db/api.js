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

const criarPaciente = async (id_paciente, nome, data_nascimento) => {
    const result = await pool.query('INSERT INTO PACIENTE (ID_PACIENTE, NOME, DATA_NASCIMENTO) VALUES ($1, $2, $3)', [id_paciente, nome, data_nascimento]);

    return result;
}

const mostrarPacientes = async (id) => {
    // const result = await pool.query(`SELECT NOME, DATA_NASCIMENTO FROM PACIENTE WHERE NOME = $1`, [`%${nome}%`]);
    const result = await pool.query(`SELECT NOME, DATA_NASCIMENTO FROM PACIENTE WHERE ID_PACIENTE = $1`, [id]);
    return result.rows;
}

const atualizarPaciente = async (nome, dataNascimento, id) => {
    const result = await pool.query('UPDATE PACIENTE SET NOME = $1, DATA_NASCIMENTO = $2 WHERE ID_PACIENTE = $3', [nome, dataNascimento, id]);

    console.log(result.rows);
}

const deletarPaciente = async (id) => {
    const result = await pool.query(`DELETE FROM PACIENTE WHERE ID_PACIENTE = $1`, [id]);

    return {"message": "Patient deleted successfully"};
}

const todosPacientes = async () => {
    const result = await pool.query(`SELECT * FROM PACIENTE`);

    return result.rows;
}

// console.log(pool.options.user);
// console.log(pool.options.database);
// showVacinasCount();
// mostrarPacientes();


module.exports = { showVacinasCount, criarPaciente, atualizarPaciente, mostrarPacientes, deletarPaciente, todosPacientes };