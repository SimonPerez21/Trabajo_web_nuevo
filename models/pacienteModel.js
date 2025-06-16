const getDB = require('../config/db');

exports.obtenerTodos = async () => {
  const db = await getDB();
  return db.all('SELECT * FROM pacientes');
};

exports.obtenerPorId = async (id) => {
  const db = await getDB();
  return db.get('SELECT * FROM pacientes WHERE id = ?', [id]);
};

exports.crear = async (data) => {
  const db = await getDB();
  return db.run(
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
      data.telefono_emergencia
    ]
  );
};

exports.actualizar = async (id, data) => {
  const db = await getDB();
  return db.run(
    `UPDATE pacientes SET nombre = ?, apellido = ?, dni = ?, fecha_nacimiento = ?, sexo = ?, direccion = ?, telefono = ?, contacto_emergencia = ?, telefono_emergencia = ?
     WHERE id = ?`,
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
      id
    ]
  );
};

exports.eliminar = async (id) => {
  const db = await getDB();
  return db.run('DELETE FROM pacientes WHERE id = ?', [id]);
};

exports.tieneAdmisiones = async (id) => {
  const db = await getDB();
  const result = await db.get('SELECT COUNT(*) AS total FROM admisiones WHERE paciente_id = ?', [id]);
  return result.total > 0;
};
