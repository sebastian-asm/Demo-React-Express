import Paciente from '../models/Paciente.js';

export const nuevoCliente = async (req, res, next) => {
  const paciente = new Paciente(req.body);

  try {
    await paciente.save();

    res.status(201).json({
      ok: true,
      paciente,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
    });
  }
};

export const obtenerPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find();

    res.json({
      ok: true,
      pacientes,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
    });
  }
};

export const obtenerPaciente = async (req, res, next) => {
  const { id } = req.params;

  try {
    const paciente = await Paciente.findById(id);

    res.json({
      ok: true,
      paciente,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
    });
  }
};

export const actualizarPaciente = async (req, res, next) => {
  const { id } = req.params;

  try {
    const paciente = await Paciente.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json({
      ok: true,
      paciente_actualizado: paciente,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
    });
  }
};

export const eliminarPaciente = async (req, res, next) => {
  const { id } = req.params;

  try {
    await Paciente.findByIdAndDelete(id);

    res.json({
      ok: true,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
    });
  }
};
