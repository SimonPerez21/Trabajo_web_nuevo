const db = require('../config/db');
const getDB = require('../config/db');

exports.obtenerTodas = async () => {
  const db = await getDB();
  return db.all(`
    SELECT c.*, h.numero AS habitacion, h.ala 
    FROM camas c 
    JOIN habitaciones h ON c.habitacion_id = h.id
  `);
};

exports.obtenerLibres = async () => {
  const db = await getDB();
  return db.all(`
    SELECT c.id, c.numero, h.numero AS habitacion, h.ala
    FROM camas c
    JOIN habitaciones h ON c.habitacion_id = h.id
    WHERE c.estado = 'libre'
  `);
};

exports.actualizarEstado = async (id, estado) => {
  const db = await getDB();
  return db.run('UPDATE camas SET estado = ? WHERE id = ?', [estado, id]);
};
