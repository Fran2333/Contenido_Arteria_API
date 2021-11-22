

const {Router} = require('express');
const {check} = require('express-validator');
const   {validarCampos} = require('../middlewares/validar-campos');
const { validarArchivSubir } = require('../middlewares/validar-archivo')
const {cargarArchivo, actualizarImagen, mostrarImagen} = require('../controllers/uploads');
const { coleccionesPermitidas } = require('../helpers/subir-archivo');

const router = Router();

router.post('/',validarArchivSubir,cargarArchivo);

router.put('/:coleccion/:id',[
    validarArchivSubir,
    check('id','El id debe de ser de mongo').isMongoId(),
    check('coleccion').custom( c => coleccionesPermitidas( c, ['usuarios','eventos'] ) ),
    validarCampos
], actualizarImagen)

router.get('/:coleccion/:id',[
    check('id','El id debe de ser de mongo').isMongoId(),
    check('coleccion').custom( c => coleccionesPermitidas( c, ['usuarios','eventos'] ) ),
    validarCampos
], mostrarImagen)

module.exports = router;