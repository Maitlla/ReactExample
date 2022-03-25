import Task from "./components/Task/Task"

import './styles/App.css';
import './styles/root.css';

import mockedTasks from "./models/tasks";
import Tasks from "./components/Tasks/Tasks";

function App() {

  return (
    <>
      <div className="fondo">
        <header className="full-width"> 
        <h1>TooManyTasks</h1>
        </header>
        <div className="flex-container">
          <Tasks tasksArray={mockedTasks}/>
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
