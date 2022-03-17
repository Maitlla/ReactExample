import Task from "./components/Task/Task"

import './App.css';

import mockedTasks from "./models/tasks";

// Aqui podemos poner código
console.log("Antes del componente App");

function App() {

  // Aquí podemos poner código
  // que se ejecutará cada vez
  // que se redibuje el componente
  console.log("En el componente App")

  const tasksComponents = mockedTasks.map(
    task =>  <Task taskContent={task.content} done={task.done}/>
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
