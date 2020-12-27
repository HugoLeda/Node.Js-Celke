const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('<h1>Home</h1>')
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