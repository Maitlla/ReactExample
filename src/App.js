import Tasks from "./components/Tasks/Tasks"

import './App.css';

import mockedTasks from "./models/tasks";

// Aqui podemos poner código
console.log("Antes del componente App");

function App() {

  // Aquí podemos poner código
  // que se ejecutará cada vez
  // que algo cambie en la pantalla
  console.log("En el componente App")

  return (
    <>
      <h1>Mi aplicación de tareas</h1>
      <ol>
          <Tasks tasksList={mockedTasks}/>
      </ol>
    </>
  );
}

export default App;
