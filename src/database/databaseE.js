const {Pool}=  require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'encuestas_db',
    port: '5432'
});


module.exports ={pool};
