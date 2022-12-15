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
                    <TodoRowItem 
                        rowNumber={props.arrTodos[0].rowNumber} 
                        rowDescription={props.arrTodos[0].rowDescription} 
                        rowAssigned={props.arrTodos[0].rowAssigned}
                    />
                    <TodoRowItem 
                        rowNumber={props.arrTodos[1].rowNumber} 
                        rowDescription={props.arrTodos[1].rowDescription} 
                        rowAssigned={props.arrTodos[1].rowAssigned}
                    />
                    <TodoRowItem 
                        rowNumber={props.arrTodos[2].rowNumber} 
                        rowDescription={props.arrTodos[2].rowDescription} 
                        rowAssigned={props.arrTodos[2].rowAssigned}
                    />
                    <TodoRowItem 
                        rowNumber={props.arrTodos[3].rowNumber} 
                        rowDescription={props.arrTodos[3].rowDescription} 
                        rowAssigned={props.arrTodos[3].rowAssigned}
                    />
                    <TodoRowItem 
                        rowNumber={props.arrTodos[4].rowNumber} 
                        rowDescription={props.arrTodos[4].rowDescription} 
                        rowAssigned={props.arrTodos[4].rowAssigned}
                    />
                </tbody>
            </table>
        </>
    )
}

export default TodoTable