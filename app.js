const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');
const db = require('./config/db'); // Asegurate de tener este archivo correctamente configurado

dotenv.config();
const app = express();



// Configuración de vistas
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/pacientes', require('./routes/pacientesRoutes'));
app.use('/admisiones', require('./routes/admisionesRoutes'));
app.use('/camas', require('./routes/camasRoutes'));
app.use('/internaciones', require('./routes/internacionesRoutes'));
app.use('/evaluacionesMedicas', require('./routes/evaluacionesMedicasRoutes'));
app.use('/evaluacionesEnfermeria', require('./routes/evaluacionesEnfermeriaRoutes'));

// ✅ Ruta raíz: renderiza la vista "home"
app.get('/', (req, res) => {
  res.render('home');
});

// Manejador para página no encontrada
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
