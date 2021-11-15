const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {dbConnection} = require('./database/config');
const fileUpload = require('express-fileupload');

//crear ek servidor de express
const app = express();

//bd
dbConnection();

//CORS
app.use(cors());

//Directorio publico
app.use( express.static('public'));

//lectura y parseo del body
app.use(express.json());  

//fileupload - carga de archivos

app.use( fileUpload({
    useTempFiles : true,
    tempFileDir :'/tmp/'
}))

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
app.use('/api/uploads', require('./routes/uploads'));

//escuchar peticiones 
app.listen( process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT}`);
})