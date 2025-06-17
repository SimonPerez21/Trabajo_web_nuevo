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

exports.formularioEditar = async (req, res) => {
  const admision = await Admision.obtenerPorId(req.params.id);
  const pacientes = await Paciente.obtenerTodos();

  // Detectar si el origen es personalizado
  const hospitales = [
    "Hospital Regional", "Hospital Central", "Hospital Municipal", "Hospital del Sur", "Hospital del Norte",
    "Clínica San Martín", "Hospital Universitario", "Hospital Provincial", "Clínica Santa Rosa",
    "Hospital de Alta Complejidad", "Hospital Materno Infantil", "Clínica del Valle", "Hospital General",
    "Sanatorio Nuestra Señora", "Centro Médico Los Andes"
  ];
  admision.usa_origen_personalizado = !hospitales.includes(admision.origen_derivacion);

  res.render('admisiones/editar', { admision, pacientes });
};

exports.actualizar = async (req, res) => {
  await Admision.actualizar(req.params.id, req.body);
  res.redirect('/admisiones');
};
