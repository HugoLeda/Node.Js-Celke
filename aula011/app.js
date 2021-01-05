const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('celke', 'curso', '040303', {
    host        : 'localhost',
    dialect     : 'mysql'
})

sequelize.authenticate().then(function () {
    console.log('Conexão realizada com sucesso!')
}).catch(function (error) {
    console.log('Erro ao realizar conexão: ' + error)
})

/*
const Sequelize = require('sequelize')

const sequelize = new Sequelize('celke', 'curso', '040303', {
    host        : 'localhost',
    dialect     : 'mysql'
})

sequelize.authenticate().then(function () {
    console.log(`Conexão realizada com sucesso!`)
}).cath(function (error) {
    console.log('Erro ao realizar a conexão: ' + error)
})
*/