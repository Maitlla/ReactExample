import { useRef, useState } from "react";

import Task from "../Task/Task";

function Tasks ({tasksArray}) {

    const [ tasksState, setTasksState ] = useState(tasksArray);
    const newTaskContent = useRef("");

    function newTaskContentHandler (event) {
        newTaskContent.current = event.target.value;
    }

    function addTask () {
        const newTask = {
            id: Date.now(),
            content: newTaskContent.current,
            done: false,
        }
        setTasksState([newTask, ...tasksState])
    }

    function updateTask (taskId, updatedTask) {
        const taskArray = [ ...tasksState ];
        const taskIdx = taskArray.findIndex( task => task.id === taskId );
        taskArray[taskIdx] = updateTask;
        setTasksState(taskArray);
    }

    let tasksComponents = tasksState.map(
        task => <Task key={task.id} taskObject={task} updateTask={updateTask}/>
    )

    return (
        <>
            <ol>
                {tasksComponents}
            </ol>
            <input type="text" onChange={newTaskContentHandler}/>
            <button onClick={addTask}>+</button>
        </>

    )
}

export default Tasks;