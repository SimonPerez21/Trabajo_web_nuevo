const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

// Configuración de vistas
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/pacientes', require('./routes/pacienteRoutes'));
app.use('/admisiones', require('./routes/admisionesRoutes'));
app.use('/camas', require('./routes/camasRoutes'));
app.use('/internaciones', require('./routes/internacionesRoutes'));
app.use('/evaluacionesMedicas', require('./routes/evaluacionesMedicasRoutes'));
app.use('/evaluacionesEnfermeria', require('./routes/evaluacionesEnfermeriaRoutes'));


 // Ruta raíz
 app.get('/', (req, res) => {
  res.render('home');
 });

// Manejo de errores
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
