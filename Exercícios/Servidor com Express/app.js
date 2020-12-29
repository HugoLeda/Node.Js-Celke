const express = require('express')
const server = express()

//Conexão DB MySQL
const mysql = require('mysql')

const connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'joao',
    password    : '040303',
    database    : 'celke'
})

connection.connect(function (err) {
    if (err) {
        console.log('error connecting ' + err.stack)
        return
    }

    console.log('connected as id ' + connection.threadId)
})

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
})

server.get('/sobre-empresa', (req, res) => {
    res.sendFile(__dirname + '/src/sobre-empresa.html')
})

server.get('/contato', (req, res) => {
    res.send(`
        <form action="/contato" method="POST">
            <input type="submit" value="Enviar">  
        </form>      
    `)
})

server.post('/contato', (req, res) => {
    res.send(`Enviado baby!`)
})

server.listen(5050, () =>{
    console.log('Servidor de pé em localhost:5050')
    console.log('Para derrubar ctrl + c')
})

/*
npm install -g nodemon
*/