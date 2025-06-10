const db = require('../config/db');

exports.obtenerTodas = () =>
  db.query(`
    SELECT ee.*, p.nombre, p.apellido
    FROM evaluacionesenfermeria ee
    LEFT JOIN internaciones i ON ee.internacion_id = i.id
    LEFT JOIN admisiones a ON ee.admision_id = a.id
    LEFT JOIN pacientes p ON a.paciente_id = p.id
    ORDER BY ee.fecha DESC
  `);

exports.crear = (data) =>
  db.query(
    `INSERT INTO evaluacionesenfermeria 
     (internacion_id, admision_id, fecha, sintomas, antecedentes, plan_cuidados)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [
      data.internacion_id || null,
      data.admision_id || null,
      data.fecha,
      data.sintomas,
      data.antecedentes,
      data.plan_cuidados,
    ]
  );
