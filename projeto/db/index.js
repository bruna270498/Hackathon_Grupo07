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



// console.log(pool.options.user);
// console.log(pool.options.database);
// showVacinasCount();
// mostrarPacientes();

module.exports = pool;