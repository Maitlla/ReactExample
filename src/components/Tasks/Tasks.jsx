import Task from "../Task/Task";

console.log("Antes del componente Task");

function Tasks ({tasksList}) {

    console.log("En el componente Task");

    const tasksComponents = tasksList.map(
        task =>  <Task taskContent={task.content} done={task.done}/>
    )

    return (
        <ol>
            {tasksComponents}
        </ol>
    )
}

export default Tasks;