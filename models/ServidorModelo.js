const express = require('express')


//IMORTAR LA FUCION PARA CONECTARME CON LA BD

const{ conectBD } = require ('../database/conexion.js')

class ServidorModelo {

    constructor(){

        this.app = express()
        this.despertarBD()
        this.enrutarPeticiones()

    }

    despertarServidor(){

        this.app.listen(process.env.PUERTO,function(){
            console.log("servidor encendido "+process.env.PUERTO)
        })

    }

    enrutarPeticiones(){

        this.app.get('/avanzada/v1/jugadores', function (req, res) {
            res.send('Hello World')
        })
          
        this.app.post('/avanzada/v1/jugadores', function (req, res) {
            res.send('Hello World')
        })
          
        this.app.put('/avanzada/v1/jugadores', function (req, res) {
            res.send('Hello World')
        })
          
        this.app.delete('/avanzada/v1/jugadores', function (req, res) {
            res.send('Hello World')
        })

    }

    despertarBD(){
        conectBD()
    }

}

module.exports=ServidorModelo