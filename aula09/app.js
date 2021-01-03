const mysql = require('mysql')

const connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'curso',
    password    : '040303',
    database    : 'celke'
})

connection.connect(function (err) {
    if (err) {
        console.log('Erro ao realizar a conexão: ' + err.stack)
        return
    }

    console.log('Conexão ID: ' + connection.threadId)
})

connection.query('SELECT * FROM users;', function (err, rows, fields) {
     if(!err) {
        console.log("Resultados: ", rows)
    } else {
        console.log("Erro ao realizar a consulta")
    }
})

connection.query(`UPDATE users SET email = 'joaohugok4@gmail.com' WHERE nome = 'joao' `, function (err, result) {
    if (!err) {
        connection.query('SELECT * FROM users;', function (err, rows, fields) {
            if(!err) {
               console.log("Resultados: ", rows)
           } else {
               console.log("Erro ao realizar a consulta")
           }
        })
    } else {
        console.log('Erro ao realizar alteração: ' + err.stack)
    }
})

connection.query(`DELETE FROM users WHERE nome = 'Cesar'; `, function (err, result) {
    if (!err) {
        connection.query('SELECT * FROM users;', function (err, rows, fields) {
            if(!err) {
               console.log("Resultados: ", rows)
           } else {
               console.log("Erro ao realizar a consulta")
           }
        })
    } else {
        console.log('Erro ao realizar exclusão: ' + err.stack)
    }
})
