const express = require('express')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const urlencodeParser = bodyParser.urlencoded({ extended: false })

const crud = require('crud')
let cruds = new crud()

const app = express()

app.use('/css', express.static('css'))
app.use('/js', express.static('js'))
app.use('/img', express.static('img'))

//Template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Routes and templates
app.get('/', (req, res) => { res.render('index') })
app.get('/inserir', (req, res) => { res.render('inserir') })
app.get('/select/:Nome?', (req, res) => { cruds.read(req, res) })
app.post('/controllerForm', urlencodeParser, (req, res) => { cruds.create(req, res) })
app.get('/deletar/:Nome', (req, res) => { cruds.delete(req, res) })
app.get('/update/:Nome', (req, res) => { res.render('update', {data:req.params.Nome}) })
app.post('/update/controllerUpdate', urlencodeParser, (req, res) => { cruds.update(req, res) })

//Start Serer
app.listen(8080, () => { console.log('Server started at localhost:8080') })