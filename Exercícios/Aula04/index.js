import { createServer } from 'http'

createServer(function(req, res){
    res.end(`Gerenciador`)
}).listen(8080)