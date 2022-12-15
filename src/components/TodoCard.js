import TodoTable from "./TodoTable"

function TodoCard (props) {

    return (
        <div className='card shadow'>
            <div className='card-header text-bg-primary p-3'>
                {props.tableTitle}
            </div>
            <div className='card-body'>
                <TodoTable arrTodos={props.arrTodos}/>
            </div>
      </div>
    )

}

export default TodoCard