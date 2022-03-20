import Task from "./components/Task/Task"

import './App.css';

import mockedTasks from "./models/tasks";
import Tasks from "./components/Tasks/Tasks";

// Aqui podemos poner código
console.log("Antes del componente App");

function App() {

  // Aquí podemos poner código
  // que se ejecutará cada vez
  // que se redibuje el componente
  console.log("En el componente App")

  return (
    <>
      <h1>Mi aplicación de tareas</h1>
      <Tasks tasksArray={mockedTasks}/>
    </>
  );
}

export default App;
