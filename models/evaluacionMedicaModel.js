const db = require('../config/db');

exports.obtenerTodas = () =>
  db.query(`
    SELECT em.*, p.nombre, p.apellido
    FROM evaluacionesmedicas em
    LEFT JOIN internaciones i ON em.internacion_id = i.id
    LEFT JOIN admisiones a ON em.admision_id = a.id
    LEFT JOIN pacientes p ON a.paciente_id = p.id
    ORDER BY em.fecha DESC
  `);

exports.crear = (data) =>
  db.query(
    `INSERT INTO evaluacionesmedicas 
     (internacion_id, admision_id, fecha, diagnostico, tratamiento, medicamentos, observaciones)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      data.internacion_id || null,
      data.admision_id || null,
      data.fecha,
      data.diagnostico,
      data.tratamiento,
      data.medicamentos,
      data.observaciones,
    ]
  );
