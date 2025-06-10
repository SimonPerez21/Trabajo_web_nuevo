const db = require('../config/db');

exports.obtenerTodas = () =>
  db.query(`
    SELECT c.*, h.numero AS habitacion, h.ala 
    FROM camas c 
    JOIN habitaciones h ON c.habitacion_id = h.id
  `);

exports.obtenerLibres = () =>
  db.query(`
    SELECT c.id, c.numero, h.numero AS habitacion, h.ala
    FROM camas c
    JOIN habitaciones h ON c.habitacion_id = h.id
    WHERE c.estado = 'libre'
  `);

exports.actualizarEstado = (id, estado) =>
  db.query('UPDATE camas SET estado = ? WHERE id = ?', [estado, id]);
