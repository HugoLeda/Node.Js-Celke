const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('celke', 'curso', '040303', {
  host      : 'localhost',
  dialect   : 'mysql' 
})

module.exports = sequelize;

try {
    sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
}

const Produto = sequelize.define('produto', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: Sequelize.DOUBLE,
  }  
})

//Criar tabela com sequelize
//Produto.sync({  force:  true  })

Produto.create({
  nome: 'Condicionador',
  preco: 19.20
})
