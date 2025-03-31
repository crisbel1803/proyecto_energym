require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

//conexion a la bd
(async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI_TEST);
        console.log('Te has conectado a MongoDB');
    } catch (error) {
        console.log(error);
    }
})()

//RUTAS FRONTEND localhost:3000/
app.use('/',express.static(path.resolve('views','home'))); //INICIO
app.use('/login',express.static(path.resolve('views','login'))); //LOGIN
app.use('/styles',express.static(path.resolve('views','css'))); //ESTILOS
app.use('/components',express.static(path.resolve('views','components'))); //COMPONENTES JS
app.use('/images',express.static(path.resolve('views','img'))); //IMAGENES

module.exports = app;