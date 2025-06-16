const Admision = require('../models/admisionModel');
const Paciente = require('../models/pacienteModel');

exports.listar = async (req, res) => {
  const admisiones = await Admision.obtenerTodas();
  res.render('admisiones/index', { admisiones });
};

exports.formularioNuevo = async (req, res) => {
  const pacientes = await Paciente.obtenerTodos();
  res.render('admisiones/nuevo', { pacientes });
};

exports.crear = async (req, res) => {
  await Admision.crear(req.body);
  res.redirect('/admisiones');
};
