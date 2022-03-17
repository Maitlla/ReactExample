import { useState } from "react";

import "./Task.module.css";

console.log("Antes del componente Task");

function Task ({taskContent, done}) {

    console.log("En el componente Task:", taskContent);

    const [ completed, setCompleted ] = useState(done);
    const [ taskDescription, setTaskDescription ] = useState(taskContent)

    function updateDescriptionHandler (ev) {
        setTaskDescription(ev.target.value);
    }

    function toggleCheckboxHandler () {
        setCompleted( ! completed );
    }

    return (
        <li>
            <input
                type="text" 
                value={taskDescription}
                onChange={updateDescriptionHandler}
            />
            <input
                type="checkbox"
                checked={completed}
                onChange={toggleCheckboxHandler}
                //onChange={()=>{setCompleted( ! completed )}}
            />
        </li>
    )
}

export default Task