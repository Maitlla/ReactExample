import { useEffect, useState } from "react";

import "./Task.module.css";

function Task ({taskObject, updateTask}) {

    const [ completed, setCompleted ] = useState(taskObject.done);
    const [ taskDescription, setTaskDescription ] = useState(taskObject.content)

    function updateDescriptionHandler (ev) {
        setTaskDescription(ev.target.value);
    }

    function toggleCheckboxHandler () {
        setCompleted( ! completed );
    }

    return (
        <li>
            <input
                className="taskInput"
                type="text" 
                value={taskDescription}
                onChange={updateDescriptionHandler}
            />
            <input
                className="taskInput"
                type="checkbox"
                checked={completed}
                onChange={toggleCheckboxHandler}
                //onChange={()=>{setCompleted( ! completed )}}
            />
        </li>
    )
}

export default Task