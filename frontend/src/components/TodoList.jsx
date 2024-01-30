import { useState, useEffect } from "react"

function TodoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch("http://localhost:7000/todo/list").then(function (res) {
            return res.json();
        }).then(function (result) {
            setTodos(result)
        })
    }, [])
    return (
        <div className='container'>
            {todos.length === 0 && <h4>No Todods available</h4>}

            {todos.length>0 && <div className='row'>
                <h4>My ToDo's</h4>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Task Name</th>
                            <th>Task Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((item) => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.taskName}</td>
                                    <td>{item.taskDesc}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>}
        </div>
    )
}

export default TodoList
