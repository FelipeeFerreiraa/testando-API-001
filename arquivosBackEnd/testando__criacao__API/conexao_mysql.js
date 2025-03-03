import mysql from "mysql2/promise"; // Use mysql2/promise para evitar callbacks

// Criar conexão com o MySQL
const connection = await mysql.createConnection({
    host: "127.0.0.1", // ou 127.0.0.1
    user: "root",
    password: "admadm",
    database: "ex003_controleDeJogos" // Nome do banco de dados
});

console.log("✅ Conectado ao MySQL!");

export default connection;


// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'l127.0.0.1', // ou '127.0.0.1'
//   user: 'root',
//   password: 'admadm',
//   database: 'testando_conectar_API'
// });

// // Conectar ao banco
// connection.connect((err) => {
//   if (err) {
//     console.error('Erro ao conectar no MySQL:', err);
//     return;
//   }
//   console.log('Conectado ao MySQL!');
// });

// module.exports = connection;
