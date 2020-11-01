import { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';

import clientAxios from '../config/axios';

const Cita = (props) => {
  if (!props.cita) {
    props.history.push('/');
    return null;
  }

  const {
    cita: { _id, nombre, fecha, hora, sintomas, propietario, telefono },
  } = props;

  // Eliminar la cita
  const eliminarCita = (id) => {
    Swal.fire({
      title: 'Eliminar',
      text: '¿Está seguro?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado',
          'El registro fue eliminado exitosamente',
          'success'
        );

        // Eliminar de la db
        clientAxios
          .delete(`/pacientes/${id}`)
          .then((resp) => {
            if (resp.status === 200) {
              props.guardarConsultar(true);
              props.history.push('/');
            }
          })
          .catch(console.log);
      }
    });
  };

  return (
    <Fragment>
      <h1 className="my-5">Nombre cita: {nombre}</h1>
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
            <div className="list-group">
              <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                <div className="d-flex w-100 justify-content-between mb-4">
                  <h3 className="mb-3">{nombre}</h3>
                  <small className="fecha-alta">
                    {fecha} - {hora}
                  </small>
                </div>
                <p className="mb-0">{sintomas}</p>
                <div className="contacto py-3">
                  <p>Dueño: {propietario}</p>
                  <p>Teléfono: {telefono}</p>
                </div>

                <div className="">
                  <button
                    type="button"
                    className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger w-100"
                    onClick={() => eliminarCita(_id)}
                  >
                    Eliminar &times;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Cita);
