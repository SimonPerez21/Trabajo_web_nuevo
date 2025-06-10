const Paciente = require('../models/pacienteModel');
//const { listar, formularioNuevo, crear } = require('./admisionesController');

listar = async (req, res) => {
  const [pacientes] = await Paciente.obtenerTodos();
  res.render('pacientes/index', { pacientes });
};

formularioNuevo = (req, res) => {
  res.render('pacientes/nuevo');
};

crear = async (req, res) => {
  await Paciente.crear(req.body);
  res.redirect('/pacientes');
};

module.exports= {
  listar,formularioNuevo,crear
}
