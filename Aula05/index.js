const express = require('express')
const server = expres()

server.get('/', function(req, res){
    res.send('Gerenciador financeiro')
})
server.listen(3001, 'localhost')