import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
let pool = mysql.createPool({
    connectionLimit: 3,
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'threeway_studio',
    multipleStatements: true
});
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.');
        }
    }
    if (connection) {
        connection.release();
        console.log('Connection Established!!');
    }
    return;
});
export default pool;
//# sourceMappingURL=database.js.map