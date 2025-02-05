const { check } = require('express-validator');
const { Router } = require('express');
const router = Router();

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { isDate } = require('../helpers/isDate');

const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento
} = require('../controllers/events');

router.use(validarJWT);

router.get('/', getEventos);
router.post(
  '/',
  [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'La fecha de inicio es obligatoria').custom(isDate),
    check('end', 'La fecha de finalización es obligatoria').custom(isDate),
    validarCampos
  ],
  crearEvento
);
router.put(
  '/:id',
  [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'La fecha de inicio es obligatoria').custom(isDate),
    check('end', 'La fecha de finalización es obligatoria').custom(isDate),
    validarCampos
  ],
  actualizarEvento
);
router.delete('/:id', eliminarEvento);

module.exports = router;
