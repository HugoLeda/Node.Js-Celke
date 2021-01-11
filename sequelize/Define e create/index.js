const { Sequelize }  = require('sequelize')

const sequelize = new Sequelize('celke', 'curso', '040303', {
    host:   'localhost',
    dialect:    'mysql'
})

module.exports = sequelize

try {
    sequelize.authenticate()
    console.log('Conexão realizada com sucesso!')
} catch (error) {
    console.log(`Erro ao conectar! Erro:${error}`)
}

const Alunos = sequelize.define('Alunos', {
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,        
        allowNull:  false
    },
    Nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    D_Nasc: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Alunos
/* Comando para criar tabela
Alunos.sync({ force: true })
*/
function dataAlunos() {
    let nomeAluno = 'Rafa'
    let dNasc = '2003-03-04'
    createAlunos(nomeAluno, dNasc)     
    const consultaAlunos = Alunos.findAll()
    console.log(consultaAlunos)        
}

function createAlunos(nome, dNasc) {
    Alunos.create({
        Nome: nome,
        D_Nasc: dNasc
    })
}

//dataAlunos()