const Internacion = require('../models/internacionModel');
const Admision = require('../models/admisionModel');
const Cama = require('../models/camaModel');

exports.listar = async (req, res) => {
  const internaciones = await Internacion.obtenerTodas();
  res.render('internaciones/index', { internaciones });
};

exports.formularioNueva = async (req, res) => {
  const admisiones = await Admision.obtenerActivas();
  const camas = await Cama.obtenerLibres();
  res.render('internaciones/nuevo', { admisiones, camas });
};

exports.crear = async (req, res) => {
  await Internacion.crear(req.body);
  await Cama.actualizarEstado(req.body.cama_id, 'ocupada');
  res.redirect('/internaciones');
};
