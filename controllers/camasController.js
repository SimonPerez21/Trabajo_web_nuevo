const Cama = require('../models/camaModel');

exports.listar = async (req, res) => {
  const camas = await Cama.obtenerTodas();
  res.render('camas/index', { camas });
};

exports.listarLibres = async (req, res) => {
  const camas = await Cama.obtenerLibres();
  res.render('camas/libres', { camas });
};
