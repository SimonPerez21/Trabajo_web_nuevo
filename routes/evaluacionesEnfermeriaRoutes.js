const express = require('express');
const router = express.Router();
const controller = require('../controllers/evaluacionesEnfermeriaController');

router.get('/', controller.listar);
router.get('/nueva', controller.formularioNueva);
router.post('/crear', controller.crear);

module.exports = router;
