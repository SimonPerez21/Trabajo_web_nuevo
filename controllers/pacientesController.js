const Paciente = require('../models/pacienteModel');

exports.listar = async (req, res) => {
  const pacientes = await Paciente.obtenerTodos();

  for (const paciente of pacientes) {
    paciente.tieneAdmisiones = await Paciente.tieneAdmisiones(paciente.id);
  }

  res.render('pacientes/index', { pacientes });
};

exports.formularioNuevo = async (req, res) => {
  res.render('pacientes/nuevo');
};

exports.crear = async (req, res) => {
  await Paciente.crear(req.body);
  res.redirect('/pacientes');
};

exports.formularioEditar = async (req, res) => {
  const paciente = await Paciente.obtenerPorId(req.params.id);
  paciente.tieneAdmisiones = await Paciente.tieneAdmisiones(paciente.id);
  res.render('pacientes/editar', { paciente });
};


exports.actualizar = async (req, res) => {
  await Paciente.actualizar(req.params.id, req.body);
  res.redirect('/pacientes');
};

exports.eliminar = async (req, res) => {
  const tieneAdmisiones = await Paciente.tieneAdmisiones(req.params.id);
  if (!tieneAdmisiones) {
    await Paciente.eliminar(req.params.id);
  }
  res.redirect('/pacientes');
};
