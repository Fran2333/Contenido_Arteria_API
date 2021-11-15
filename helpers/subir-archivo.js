

const SubirArchivo = (files) =>{

    return new Promise((resolve, reject) =>{

    })

    const { archivo } = req.files;
    const nommbreCortado = archivo.name.split('.');
    const extension = nommbreCortado [nommbreCortado.length -1]

    //validar la extension
    const extensionesValidas =['png','jpg','jpeg','gif'];
    if(!extensionesValidas.includes( extension )){
        return res.status(400).json({
            msg: `la extension ${extension} no es permitida, ${extensionesValidas} `
        })
    }

    const nombreTemp = uuidv4() + '.' + extension;
    const uploadPath = path.join(__dirname, '../uploads/', nombreTemp);

    archivo.mv(uploadPath, (err) => {
    if (err)
        return res.status(500).json({err});

    res.json({ msg: 'File uploaded!' + uploadPath});
    });


}

module.exports = {
    SubirArchivo
}