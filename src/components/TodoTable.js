import TodoRowItem from './TodoRowItem';

function TodoTable(props) {
    
    return (
        <>
            <table className='table table-hover table-striped'>
                <thead className='text-bg-info p-3' >
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Assigned</th>
                    </tr>
                </thead>
                <tbody>
                    {props.arrTodos.map(todo => (
                        <TodoRowItem 
                            key={todo.rowNumber}
                            rowNumber={todo.rowNumber} 
                            rowDescription={todo.rowDescription} 
                            rowAssigned={todo.rowAssigned}
                        />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TodoTable