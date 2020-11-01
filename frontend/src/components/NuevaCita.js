import { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
// withRouter para no perder el history en el props

import clientAxios from '../config/axios';

const NuevaCita = (props) => {
  // Generar el state como objeto
  const [cita, guardarCita] = useState({
    nombre: '',
    propietario: '',
    fecha: '',
    hora: '',
    telefono: '',
    sintomas: '',
  });

  // Leyendo los datos del formulario
  const actualizarState = (e) => {
    guardarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Enviando los datos a la API
  const crearNuevaCita = (e) => {
    e.preventDefault();

    clientAxios
      .post('/pacientes', cita)
      .then((resp) => {
        // Realizando redirección una vez creada la nueva cita
        if (resp.status === 201) {
          props.guardarConsultar(true);
          props.history.push('/');
        }
      })
      .catch(console.log);
  };

  return (
    <Fragment>
      <h1 className="my-5">Crear una nueva cita</h1>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link
              to={'/'}
              className="btn btn-success text-uppercase py-2 px-5 font-weight-bold"
            >
              Volver
            </Link>
          </div>

          <div className="col-md-8 mx-auto">
            <form onSubmit={crearNuevaCita} className="bg-white p-5 bordered">
              <div className="form-group">
                <label htmlFor="nombre">Nombre Mascota</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre Mascota"
                  onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="propietario">Nombre Propietario</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="propietario"
                  name="propietario"
                  placeholder="Nombre Propietario"
                  onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  id="telefono"
                  name="telefono"
                  placeholder="Teléfono"
                  onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="fecha">Fecha Alta</label>
                <input
                  type="date"
                  className="form-control form-control-lg"
                  id="fecha"
                  name="fecha"
                  onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="hora">Hora Alta</label>
                <input
                  type="time"
                  className="form-control form-control-lg"
                  id="hora"
                  name="hora"
                  onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="sintomas">Síntomas</label>
                <textarea
                  className="form-control"
                  name="sintomas"
                  rows="6"
                  onChange={actualizarState}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold"
              >
                Guardar cita
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(NuevaCita);
