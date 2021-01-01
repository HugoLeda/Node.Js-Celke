/*
    npm init
    npm install mysql
    npm install express
    npm install - nodemon
*/
const mysql = require('mysql')

const connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'curso',
    password    : '040303',
    database    : 'celke'
})

connection.connect(function (error) {
    if (error) {
        console.log('error: ' + err.stack)
        return
    }    

    console.log('connected as id ' + connection.threadId)
})

var nome = 'nome'
var email = 'email'

connection.query(`
    INSERT INTO users 
    (nome, email)
    VALUES
    ('${nome}', '${email}');
`, function(error, result) {
    if (!error) {
        console.log('Cadastro realizado com sucesso!')        
    } else {
        console.log('Erro ao executar a query')
    }
})

connection.query(`SELECT * FROM users`, function(err, rows, fields) {
    if (!err) {
        console.log('Resultado', rows)
    } else {
        console.log('Erro ao executar a query')
    }
})

const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.send('<h1>Olá Mundo</h1>')
})

server.listen(5050, () => {
    console.log('Servidor de pé em localhost:5050')
    console.log('Para derrubar: CTRL + C')
})