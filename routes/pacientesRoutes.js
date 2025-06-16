const express = require('express');
const router = express.Router();
const controller = require('../controllers/pacientesController');

router.get('/', controller.listar);
router.get('/nuevo', controller.formularioNuevo);
router.post('/crear', controller.crear);
router.get('/:id/editar', controller.formularioEditar);
router.post('/:id/actualizar', controller.actualizar);
router.post('/:id/eliminar', controller.eliminar);

module.exports = router;
