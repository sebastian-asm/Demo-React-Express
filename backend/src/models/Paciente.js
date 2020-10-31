import mongoose from 'mongoose';

const pacienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    trim: true,
  },
  propietario: {
    type: String,
    trim: true,
  },
  fecha: {
    type: String,
    trim: true,
  },
  hora: {
    type: String,
    trim: true,
  },
  sintomas: {
    type: String,
    trim: true,
  },
});

// Alternativa 1
// export default mongoose.model('Paciente', pacienteSchema);

// Alternativa 2
const Paciente = mongoose.model('Paciente', pacienteSchema);

export default Paciente;
