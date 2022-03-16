import Task from "./components/Task/Task"

import logo from './logo.svg';
import './App.css';

import mockedTasks from "./models/tasks";

// Aqui podemos poner código
const nombre = "Daniel"

function App() {

  // Aquí podemos poner código
  // que se ejecutará cada vez
  // que algo cambie en la pantalla

  const tasksComponents = mockedTasks.map(
    task => {
      return <Task taskContent={task.content} completed={task.done}/>
    }

  )

  return (
    <>
      <h1>Mi aplicación de tareas</h1>
      <ol>
          {tasksComponents}
      </ol>
    </>
  );
}

export default App;
