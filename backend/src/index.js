import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import './config/db.js';
import router from './routes/index.js';

const app = express();

// Configuración que solo permite las urls indicadas para acceder a la API
// const whiteList = ['http://localhost:3001'];
// const corsOptions = {
//   origin: (origin, cb) => {
//     const exist = whiteList.some((dominio) => dominio === origin);
//     if (exist) {
//       cb(null, true);
//     } else {
//       cb(new Error('Dominio no permitido'));
//     }
//   },
// };

// Configuraciones
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
// app.use(express.urlencoded({ extended: true }));
// app.use(cors(corsOptions)); // Utilizar la configuración de las urls

// Rutas
app.use('/', router);

app.listen(3000, () => console.log(`Servidor en puerto 3000`));
