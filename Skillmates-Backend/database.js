const mysql =require('mysql2');
const fs = require('fs');

require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: {
        ca: fs.readFileSync(process.env.DB_SSL_CA_PATH),
        rejectUnauthorized: false
    }
}).promise();

module.exports=pool;
