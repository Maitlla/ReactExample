import { useRef, useState } from "react";

import Task from "../Task/Task";

import '../../styles/App.css';
import '../../styles/root.css';

function Tasks({ tasksArray }) {

    const [tasksState, setTasksState] = useState(tasksArray);
    const newTaskContent = useRef("");

    function newTaskContentHandler(event) {
        newTaskContent.current = event.target.value;
    }

    function addTask() {
        const newTask = {
            id: Date.now(),
            content: newTaskContent.current,
            done: false,
        }
        setTasksState([newTask, ...tasksState])
    }

    function updateTask(taskId, updatedTaskObject) {
        const currentTasksArray = [...tasksState];
        const taskIdx = currentTasksArray.findIndex(task => task.id === taskId);
        currentTasksArray[taskIdx] = updatedTaskObject;
        setTasksState(currentTasksArray);
        console.log("Tasks state:", currentTasksArray);
    }

    let tasksComponents = tasksState.map(
        task => <Task key={task.id} taskObject={task} updateTask={updateTask} />
    )

    return (
        <>
            <div className="flex-container">
                <nav>
                    <button onClick={addTask}>Añadir Tarea</button>
                    <input type="text" onChange={newTaskContentHandler} />
                    <button>Editar Tarea</button>
                    <button>Borrar Tarea</button>
                    <select class="seleccionar fuente" name="tipo" id="tipo">
                        <option value="Tipo">Seleccionar</option>
                        <option value="Trabajo">Trabajo </option>
                        <option value="Estudios">Estudios</option>
                        <option value="Eventos">Eventos</option>
                        <option value="Healthy">Healthy</option>
                        <option value="Hogar">Hogar</option>
                        <option value="Otros">Otros</option>
                    </select>
                    <input type="text" /> {/* para buscador */}
                    <button>Buscar</button> {/* para buscador */}
                </nav>
                <main>
                    <p>Lista de tareas</p>
                    <ol>
                        {tasksComponents}
                    </ol>
                </main>
                
            </div>

        </>

    )
}

export default Tasks;