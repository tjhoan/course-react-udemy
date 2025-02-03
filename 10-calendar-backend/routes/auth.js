const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

router.post(
  '/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe contener al menos 6 caracteres').isLength({ min: 6 }),
    validarCampos
  ],
  loginUsuario
);

router.post(
  '/new',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe contener al menos 6 caracteres').isLength({ min: 6 }),
    validarCampos
  ],
  crearUsuario
);

router.get('/renew', revalidarToken);

module.exports = router;
