const http = require('http')

const server = http.createServer( (req, res) => {
    const resp = []
    resp['/'] = '<h1>Home</h1>'
    resp['/contato'] = '<h1>Contato</h1>'
    resp['semURL'] = 'Sem resposta para essa URL'

    res.end(resp[req.url] || resp['semURL'])
    /*
    if(req.url == '/') {
        res.end('<h1>Home</h1>')
    } else if (req.url == '/contato') {
        res.end('<h1>Contato</h1>')
    } else {
        res.end('Sem resposta para essa URL')
    }
    */
})

server.listen(3001, 'localhost', () => {
    console.log('Servidor de pé em: localhost:3001')
    console.log('Para desligar: ctrl + c')
})
