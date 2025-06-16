const getDB = require('../config/db');

// Genera un paciente aleatorio si el ingreso es de emergencia
async function crearPacienteAleatorio() {
  const db = await getDB();
  const nombres = ['Desconocido'];
  const apellidos = ['Desconocido'];
  const sexo = ['Otro'];

  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const dni = Math.floor(10000000 + Math.random() * 90000000).toString();

  const result = await db.run(
    `INSERT INTO pacientes (nombre, apellido, dni, fecha_nacimiento, sexo, direccion, telefono, contacto_emergencia, telefono_emergencia)
     VALUES (?, ?, ?, '1990-01-01', ?, 'Desconocida', '000000000', 'Desconocido', '000000000')`,
    [random(nombres), random(apellidos), dni, random(sexo)]
  );

  return result.lastID;
}

exports.obtenerTodas = async () => {
  const db = await getDB();
  return db.all(`
    SELECT a.*, p.nombre, p.apellido 
    FROM admisiones a 
    JOIN pacientes p ON a.paciente_id = p.id
  `);
};

exports.obtenerActivas = async () => {
  const db = await getDB();
  return db.all(`
    SELECT a.id, p.nombre, p.apellido 
    FROM admisiones a 
    JOIN pacientes p ON a.paciente_id = p.id 
    WHERE a.estado = 'activa'
  `);
};

exports.crear = async (data) => {
  const db = await getDB();
  let paciente_id = data.paciente_id;

  // Si es de emergencia, generamos paciente automáticamente
  if (data.tipo_ingreso === 'emergencia') {
    paciente_id = await crearPacienteAleatorio();
  }

  return db.run(
    'INSERT INTO admisiones (paciente_id, fecha_admision, tipo_ingreso, estado) VALUES (?, ?, ?, ?)',
    [paciente_id, data.fecha_admision, data.tipo_ingreso, data.estado || 'activa']
  );
};
