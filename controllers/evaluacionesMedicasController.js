const Evaluacion = require('../models/evaluacionMedicaModel');
const Admision = require('../models/admisionModel');
const Internacion = require('../models/internacionModel');

exports.listar = async (req, res) => {
  const evaluaciones = await Evaluacion.obtenerTodas();
  res.render('evaluacionesMedicas/index', { evaluaciones });
};

exports.formularioNueva = async (req, res) => {
  const admisiones = await Admision.obtenerActivas();
  const internaciones = await Internacion.obtenerTodas();
  res.render('evaluacionesMedicas/nueva', { admisiones, internaciones });
};

exports.crear = async (req, res) => {
  await Evaluacion.crear(req.body);
  res.redirect('/evaluacionesMedicas');
};
