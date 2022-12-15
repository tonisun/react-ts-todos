import './App.css';
import TodoRowItem from './components/TodoRowItem';

function App() {

  // JSON Objects
  const arrTodos = [
    {rowNumber: 1, rowDescription: 'Feed Aya', rowAssigned: 'Toni'},
    {rowNumber: 2, rowDescription: 'Make sport', rowAssigned: 'Toni'},
    {rowNumber: 3, rowDescription: 'Feed Guppies', rowAssigned: 'Pepi'},
    {rowNumber: 4, rowDescription: 'Go shoping', rowAssigned: 'Günter'},
    {rowNumber: 5, rowDescription: 'Lern Java Spring', rowAssigned: 'Toni'},
    {rowNumber: 6, rowDescription: 'Wichsen', rowAssigned: 'Toni'},
  ]

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header text-bg-primary p-3'>
          Your Todo's
        </div>
        <div className='card-body'>
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
                rowNumber={arrTodos[0].rowNumber} 
                rowDescription={arrTodos[0].rowDescription} 
                rowAssigned={arrTodos[0].rowAssigned}
              />
              <TodoRowItem 
                rowNumber={arrTodos[1].rowNumber} 
                rowDescription={arrTodos[1].rowDescription} 
                rowAssigned={arrTodos[1].rowAssigned}
              />
              <TodoRowItem 
                rowNumber={arrTodos[2].rowNumber} 
                rowDescription={arrTodos[2].rowDescription} 
                rowAssigned={arrTodos[2].rowAssigned}
              />
              <TodoRowItem 
                rowNumber={arrTodos[3].rowNumber} 
                rowDescription={arrTodos[3].rowDescription} 
                rowAssigned={arrTodos[3].rowAssigned}
              />
              <TodoRowItem 
                rowNumber={arrTodos[4].rowNumber} 
                rowDescription={arrTodos[4].rowDescription} 
                rowAssigned={arrTodos[4].rowAssigned}
              />
              <TodoRowItem 
                rowNumber={arrTodos[5].rowNumber} 
                rowDescription={arrTodos[5].rowDescription} 
                rowAssigned={arrTodos[5].rowAssigned}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
