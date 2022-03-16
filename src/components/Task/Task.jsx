function Task ({taskContent, completed}) {

    return (
        <>
            <li>
                {taskContent}
                <input
                    type="checkbox" checked={completed}
                />
            </li>
        </>

    )
}

export default Task