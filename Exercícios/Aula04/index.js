const http = require('http')

const server = http.createServer()

server.listen(3001, 'localhost', () => {
    console.log('Servidor de pé em: localhost:3001')
    console.log('Para desligar: ctrl + c')
})
