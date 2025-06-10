const router = require('express').Router();
//const router = express.Router();
const controller = require('../controllers/pacienteController');
//const {listar,formularioNuevo,crear} = require('../controllers/pacienteController');


router.get('/', controller.listar);
router.get('/nuevo', controller.formularioNuevo);
router.post('/crear', controller.crear);

module.exports = router;
