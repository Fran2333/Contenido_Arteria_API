const { response} = require('express');

const coleccionesPermitidas = [
    'usuarios',
    'eventos'
]

const buscar = (req, res = response) =>{

    const { coleccion, termino } = req.params;

    if(!coleccionesPermitidas.includes(coleccion)){
        return res.status(400).json({
            msg:`Las colecciones permitidas son: ${coleccionesPermitidas}`
        })
    }

    switch (key) {
        case 'usuarios':
            
            break;
        case 'eventos':

            break;

        default:
            res.status(500).json({
                msg:'se me olvido hacer esta busqueda'
            });
    }

}


module.exports = {buscar};