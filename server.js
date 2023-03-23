const express = require('express')
const app = express()
let port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('student')
})

/*app.get('/person/:id', function (req,res) {
    res.render('person', {ID: req.params.id, Qstr: req.query.qstr, Message: req.query.message, Times: req.query.times});
});*/

/*app.post('/addStudent', function(req, res){
    res.send(` Nombre: ${req.body.nombre},
                Edad: ${req.body.edad},
                NSS: ${req.body.nss},
                Tipo de sangre ${req.body.tipoSangre}`)
})*/

app.post('/addStudent', function(req, res){
    res.render('displayData', {
        nombre: req.body.nombre,
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre
    })
})

app.listen(port)