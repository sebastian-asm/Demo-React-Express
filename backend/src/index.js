import express from 'express';
import morgan from 'morgan';

import './config/db.js';
import router from './routes/index.js';

const app = express();

// Configuraciones
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Rutas
app.use('/', router);

app.listen(3000, () => console.log(`Servidor en puerto 3000`));
