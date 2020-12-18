import express from 'express';
const server = express()

server(3001, () => {
    console.log('Servidor em pé em http://localhost/3001')
    console.log('Para derrubar basta ctrl + c')
})