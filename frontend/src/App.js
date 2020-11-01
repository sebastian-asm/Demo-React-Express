import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import clientAxios from './config/axios';

// Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {
  // State de la app
  const [citas, guardarCitas] = useState([]);
  const [consultar, guardarConsultar] = useState(true);

  useEffect(() => {
    if (consultar) {
      const consultarAPI = () => {
        clientAxios
          .get('/pacientes')
          .then((resp) => {
            if (resp.status === 200) {
              // Agregando el resultado al state
              guardarCitas(resp.data.pacientes);
              guardarConsultar(false); // Deshabilitando la consulta para refrescar el inicio
            }
          })
          .catch(console.log);
      };
      consultarAPI();
    }
  }, [consultar]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Pacientes citas={citas} />} />

        <Route
          exact
          path="/nueva-cita"
          component={() => <NuevaCita guardarConsultar={guardarConsultar} />}
        />

        <Route
          exact
          path="/cita/:id"
          render={(props) => {
            const { id } = props.match.params;
            const cita = citas.filter((cita) => cita._id === id);

            return <Cita cita={cita[0]} guardarConsultar={guardarConsultar} />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
