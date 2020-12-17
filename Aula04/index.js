import http from http

http.createServer(function(req, res){
    res.end(`Gerenciador`)
}).listen(8080)