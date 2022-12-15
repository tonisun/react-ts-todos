
function TodoRowItem () {

    const rowNumber = [1, 2, 3]
    const rowDescription = ['Feed cat', 'Go shoping', 'Feed the Guppies']
    const rowAssigned = ['Toni', 'Günter', 'Pepi'] 

    return (
        <>
            <tr>
                <th scope='row'>{rowNumber[0]}</th>
                <td>{rowDescription[0]}</td>
                <td>{rowAssigned[0]}</td>
              </tr>
              <tr>
                <th scope='row'>{rowNumber[1]}</th>
                <td >{rowDescription[1]}</td>
                <td>{rowAssigned[1]}</td>
              </tr>
              <tr>
                <th scope='row'>{rowNumber[2]}</th>
                <td>{rowDescription[2]}</td>
                <td>{rowAssigned[2]}</td>
              </tr>
        </>
    )
}

export default TodoRowItem