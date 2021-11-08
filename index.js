const express = require('express');
require('dotenv').config();


//crear ek servidor de express
const app = express();

//Directorio publico
app.use( express.static('public'))

//Rutas
//app.get('/', (req,res)=>{
  //      res.json({
    //        ok:true
      //  })
//})


//escuchar peticiones 
app.listen( process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT}`)
})