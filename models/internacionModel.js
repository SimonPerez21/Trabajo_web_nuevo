const getDB = require('../config/db');

exports.obtenerTodas = async () => {
  const db = await getDB();
  return db.all(`
    SELECT i.*, p.nombre, p.apellido, h.numero AS habitacion, c.numero AS cama
    FROM internaciones i
    JOIN admisiones a ON i.admision_id = a.id
    JOIN pacientes p ON a.paciente_id = p.id
    JOIN camas c ON i.cama_id = c.id
    JOIN habitaciones h ON c.habitacion_id = h.id
  `);
};

exports.crear = async (data) => {
  const db = await getDB();
  return db.run(
    'INSERT INTO internaciones (admision_id, cama_id, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?)',
    [data.admision_id, data.cama_id, data.fecha_inicio, data.fecha_fin || null]
  );
};
