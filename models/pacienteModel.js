const db = require('../config/db');

exports.obtenerTodos = () =>
  db.query('SELECT * FROM pacientes');

exports.obtenerPorId = (id) =>
  db.query('SELECT * FROM pacientes WHERE id = ?', [id]);

exports.crear = (data) =>
  db.query(
    'INSERT INTO pacientes (nombre, apellido, dni, fecha_nacimiento, sexo, direccion, telefono, contacto_emergencia, telefono_emergencia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      data.nombre,
      data.apellido,
      data.dni,
      data.fecha_nacimiento,
      data.sexo,
      data.direccion,
      data.telefono,
      data.contacto_emergencia,
      data.telefono_emergencia,
    ]
  );
