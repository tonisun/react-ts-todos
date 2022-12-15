
function TodoRowItem (props) {

    //const rowNumber = [1, 2, 3]
    //const rowDescription = ['Feed cat', 'Go shoping', 'Feed the Guppies']
    //const rowAssigned = ['Toni', 'Günter', 'Pepi'] 

    return (
        <>
            <tr>
                <th scope='row'>{props.rowNumber}</th>
                <td>{props.rowDescription}</td>
                <td>{props.rowAssigned}</td>
            </tr>
              
        </>
    )
}

export default TodoRowItem