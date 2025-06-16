const express = require('express');
const router = express.Router();
const controller = require('../controllers/evaluacionesMedicasController');

router.get('/', controller.listar);
router.get('/nueva', controller.formularioNueva);
router.post('/crear', controller.crear);

module.exports = router;
