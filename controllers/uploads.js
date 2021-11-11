const {response} = require('express');
const fileUpload = require('express-fileupload');

const cargarArchivo = (req, res= response) =>{
    
    if(!req.files || object.keys(req.files).length === 0 || !req.files.archivo){
        res.status(400).json({msg: "no hay archivos por subir"})
        return;
    }

    console.log('req.files >>>', req.files);
    

    sampleFile = req.files.sample;
    uploadPath = __dirname + '/uploads/' + sampleFile;
    
    sampleFile.mv(uploadPath, function(err){
        if(err){
            return res.status(500).send(err)
        }
        res.send('file uploaded to ' + uploadPath);
    })
}


module.exports = {
    cargarArchivo
}