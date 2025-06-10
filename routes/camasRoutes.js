const express = require('express');
const router = express.Router();
const controller = require('../controllers/camasController');

router.get('/', controller.listar);
router.get('/libres', controller.listarLibres);

module.exports = router;
