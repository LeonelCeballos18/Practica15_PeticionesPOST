const express = require('express') //Inyeccion de la dependencia
const app = express()
let port = process.env.PORT || 3000; //Definicion del puerto de escucha
app.use('/assets', express.static(__dirname + '/public')); //Contenido estatico

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs');

app.get('/', function (req, res) { //render de vista student
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

app.post('/addStudent', function(req, res){ //render de los datos guardados del formulario
    res.render('displayData', { 
        nombre: req.body.nombre, //Datos que plasmaremos en nuestra vista
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre
    })
})

app.listen(port)