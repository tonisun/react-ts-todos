import React, {useState} from "react"
import TodoTable from "./TodoTable"
import NewTodoForm from "./NewTodoForm"

function TodoCard (props) {

    const [arrTodos, setTodos] = useState([
        {rowNumber: 1, rowDescription: 'Feed Aya', rowAssigned: 'Toni'},
        {rowNumber: 2, rowDescription: 'Make sport', rowAssigned: 'Toni'},
        {rowNumber: 3, rowDescription: 'Feed Guppies', rowAssigned: 'Pepi'},
        {rowNumber: 4, rowDescription: 'Go shoping', rowAssigned: 'Günter'},
        {rowNumber: 5, rowDescription: 'Lern Java Spring', rowAssigned: 'Toni'},
    ])

    const addTodo = (description, assigned) => {
        let rowNumber = 0
        
        if (arrTodos.length > 0) {
            rowNumber = arrTodos[arrTodos.length - 1].rowNumber + 1
        } else {
            rowNumber = 1
        }

        const newTodo = {
            rowNumber: rowNumber,
            rowDescription: description,
            rowAssigned: assigned
        }
            
        setTodos(arrTodos => [...arrTodos, newTodo])
        
    }

    return (
        <div className='card shadow'>
            <div className='card-header text-bg-primary p-3'>
                {props.tableTitle}
            </div>
            <div className='card-body'>
                <TodoTable arrTodos={arrTodos}/>
                <button className='btn btn-primary' onClick={addTodo}>Add new todo</button>
                <NewTodoForm addTodo={addTodo}/>
            </div>
      </div>
    )

}

export default TodoCard