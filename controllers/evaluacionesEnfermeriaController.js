const Evaluacion = require('../models/evaluacionEnfermeriaModel');
const Admision = require('../models/admisionModel');
const Internacion = require('../models/internacionModel');

exports.listar = async (req, res) => {
  const evaluaciones = await Evaluacion.obtenerTodas();
  res.render('evaluacionesEnfermeria/index', { evaluaciones });
};

exports.formularioNueva = async (req, res) => {
  const admisiones = await Admision.obtenerActivas();
  const internaciones = await Internacion.obtenerTodas();
  res.render('evaluacionesEnfermeria/nueva', { admisiones, internaciones });
};

exports.crear = async (req, res) => {
  await Evaluacion.crear(req.body);
  res.redirect('/evaluacionesEnfermeria');
};
