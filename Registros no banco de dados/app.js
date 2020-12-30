const mysql = require('mysql')

const connection = mysql.createConnection({
    host:       'localhost',
    user:       'curso',
    password:   '040303',
    database:   'celke'
})

connection.connect(function (error) {
    if (error) {
        console.log('error connecting ' +    error.stack)
        return
    }

    console.log('connected as id ' + connection.threadId)
})

connection.query(
    `
        INSERT INTO users
        (nome, email)
        VALUES
        ('Rafa', 'rafaela@gmaii.com');
    `, function (error, result) {
        if (!error) {
            console.log('Usuario cadatrado com sucesso!')
        } else {
            console.log('Erro ao cadastrar: ')
        }
    }
)