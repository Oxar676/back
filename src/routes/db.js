import cliente from 'pg';

const { Pool } = cliente;

const pool = new Pool({
    /*
    user: 'postgres',
    host: 'localhost',
    database: 'back',
    password: '123456',
    port:5432
    */
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

export {
    pool
};