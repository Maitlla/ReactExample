import { useState } from "react"

console.log("Antes del componente Task");

function Task ({taskContent, done}) {

    console.log("En el componente Task:", taskContent);

    const [ completed, setCompleted ] = useState(done)

    function toggleCompleted () {
        setCompleted( ! completed )
    }

    return (
        <>
            <li>
                {taskContent}
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={toggleCompleted}
                />
            </li>
        </>

    )
}

export default Task