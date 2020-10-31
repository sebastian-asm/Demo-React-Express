import express from 'express';

import {
  nuevoCliente,
  obtenerPacientes,
  obtenerPaciente,
  actualizarPaciente,
  eliminarPaciente,
} from '../controllers/paciente.controllers.js';

const router = express.Router();

router.get('/pacientes', obtenerPacientes);
router.get('/pacientes/:id', obtenerPaciente);
router.post('/pacientes', nuevoCliente);
router.put('/pacientes/:id', actualizarPaciente);
router.delete('/pacientes/:id', eliminarPaciente);

export default router;
