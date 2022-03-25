import Task from "./components/Task/Task"

import './App.css';

import mockedTasks from "./models/tasks";
import Tasks from "./components/Tasks/Tasks";

function App() {

  return (
    <>
      <div className="fondo">
      <h1>TooManyTasks</h1>
        {/* <header> 
        </header> */}
        <nav className="full-width">
          <select class="seleccionar fuente" name="tipo" id="tipo">
            <option value="Tipo">Seleccionar</option>
            <option value="Trabajo">Trabajo </option>
            <option value="Estudios">Estudios</option>
            <option value="Eventos">Eventos</option>
            <option value="Healthy">Healthy</option>
            <option value="Hogar">Hogar</option>
            <option value="Otros">Otros</option>
          </select>
          <input type="text" class="campos fuente" name="taskName" id="taskName" />
          <input class="campos fuente" type="button" value="Añadir Tarea" name="añadir" id="botonAnadir" />
          <input class="campos fuente" type="button" value="Editar Tarea" name="añadir" id="botonAnadir" />
          <input class="campos fuente" type="button" value="Borrar Tarea" name="añadir" id="botonAnadir" />
          <input type="text" class="campos fuente" name="taskName" id="taskName" />
          <input class="campos fuente" type="button" value="Buscar" name="añadir" id="botonAnadir" />
        </nav>
        <div className="flex-container">
          <main>
            <p>Lista de tareas</p>
            <Tasks tasksArray={mockedTasks} />
          </main>
          <aside>
            <p>A Coruña 12:02</p> 
          </aside>
        </div>
        <footer className="full-width">
          <p>© Maite Llamas García</p>
        </footer>
      </div>

    </>
  );
}

export default App;
