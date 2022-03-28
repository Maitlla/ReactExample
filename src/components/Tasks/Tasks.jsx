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
                    <select className='fuente red borde' name="tipo" id="tipo">
                        <option value="Tipo">Seleccionar</option>
                        <option value="Trabajo">Trabajo </option>
                        <option value="Estudios">Estudios</option>
                        <option value="Eventos">Eventos</option>
                        <option value="Healthy">Healthy</option>
                        <option value="Hogar">Hogar</option>
                        <option value="Otros">Otros</option>
                    </select>
                    <button className='borde' onClick={addTask}>Añadir</button>
                    <input className='borde' type="text" onChange={newTaskContentHandler} />
                    {/* <button className='borde'>Editar</button> */}
                    <button className='borde'>Borrar</button>
                    <input className='borde buscar' type="text" value="Buscar" />{/* para buscador */} 
                </nav>
                <main>
                    <h2 className='LisTarea'>Lista de tareas</h2>
                    <ol>
                        {tasksComponents}
                    </ol>
                </main>
                <aside>
                    <p>A Coruña</p>
                    <p>12 : 02</p>
                    <p>Lunes 28</p>
                    <p>Marzo 2022</p>
                </aside>
            </div>

        </>

    )
}

export default Tasks;