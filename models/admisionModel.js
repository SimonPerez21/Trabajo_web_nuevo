const db = require('../config/db');

exports.obtenerTodas = () =>
  db.query(`
    SELECT a.*, p.nombre, p.apellido 
    FROM admisiones a 
    JOIN pacientes p ON a.paciente_id = p.id
  `);

exports.obtenerActivas = () =>
  db.query(`
    SELECT a.id, p.nombre, p.apellido 
    FROM admisiones a 
    JOIN pacientes p ON a.paciente_id = p.id 
    WHERE a.estado = 'activa'
  `);

exports.crear = (data) =>
  db.query(
    'INSERT INTO admisiones (paciente_id, fecha_admision, tipo_ingreso, estado) VALUES (?, ?, ?, ?)',
    [data.paciente_id, data.fecha_admision, data.tipo_ingreso, data.estado || 'activa']
  );
