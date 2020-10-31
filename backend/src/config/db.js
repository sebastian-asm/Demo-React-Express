import mongoose from 'mongoose';

const db = mongoose
  .connect('mongodb://localhost:27017/react-fullstack', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Conexión exitosa a Mongodb'))
  .catch((error) => console.log('Error en la conexión a Mongodb', error));

export default db;
