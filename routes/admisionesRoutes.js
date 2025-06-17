const express = require('express');
const router = express.Router();
const controller = require('../controllers/admisionesController');

router.get('/', controller.listar);
router.get('/nuevo', controller.formularioNuevo);
router.post('/crear', controller.crear);
router.get('/:id/editar', controller.formularioEditar);
router.post('/:id/actualizar', controller.actualizar);

module.exports = router;
