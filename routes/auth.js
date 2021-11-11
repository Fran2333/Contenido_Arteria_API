/*
Rutas de usuarios /auth 
host + api/auth
*/

const {Router} = require('express');
const {check} = require('express-validator');
const   {validarCampos} = require('../middlewares/validar-campos')
const { crearUsuario, loginUsuario, revalidarToken} = require('../controllers/auth');
const {validarJWT} = require('../middlewares/validar-jwt')

const router = Router();

router.post('/new', 
[
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('email', 'el email es obligatorio').isEmail(),
    check('password', 'el password debe de ser mas de 8 caracteres').isLength({min:8}),
    validarCampos
],
crearUsuario );

router.post('/', 
[
    check('email', 'el email es obligatorio').isEmail(),
    check('password', 'el password debe de ser mas de 8 caracteres').isLength({min:8}),
    validarCampos
],
loginUsuario);

router.get('/renew', validarJWT ,revalidarToken);

module.exports = router;