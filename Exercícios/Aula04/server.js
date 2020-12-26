const express = require('express')
const server = express()

server.listen(3001, () => {
    console.log('Servidor em pé em http://localhost/3001')
    console.log('Para derrubar basta ctrl + c')
})