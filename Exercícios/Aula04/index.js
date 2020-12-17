/*
import { createServer } from 'http'

createServer(function(req, res){
    res.end(`Gerenciador`)
}).listen(8080)
*/

var http = require('http')

http.createServer(function(req, res){
    res.end('Gerenciador')
}).listen(800)