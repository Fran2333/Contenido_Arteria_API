const path = require('path');
const { v4: uuidv4 } = require('uuid');

const SubirArchivo = (files,extensionesValidas =['png','jpg','jpeg','gif'], carpeta ='') =>{

    return new Promise((resolve, reject) =>{

    const { archivo } = files;
    const nombresArray = [];

    archivo.map(arc => {
        const nommbreCortado = arc.name.split('.');
        const extension = nommbreCortado [nommbreCortado.length -1]

            //validar la extension
        if(!extensionesValidas.includes( extension )){
            return reject(`la extension ${extension} no es permitida, ${extensionesValidas} `);
        }

        const nombreTemp = uuidv4() + '.' + extension;
        const uploadPath = path.join(__dirname, '../uploads/', carpeta , nombreTemp);

        arc.mv(uploadPath, (err) => {
        if (err)
            reject(err)

        resolve(nombreTemp)
        });
    })

    

    })

}

const coleccionesPermitidas = ( coleccion = '', colecciones = []) => {

    const incluida = colecciones.includes( coleccion );
    if ( !incluida ) {
        throw new Error(`La colección ${ coleccion } no es permitida, ${ colecciones }`);
    }
    return true;
}

module.exports = {
    SubirArchivo,
    coleccionesPermitidas
}