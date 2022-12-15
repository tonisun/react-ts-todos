import './App.css';
import TodoCard from './components/TodoCard';

function App() {

  const tableTitle = 'Todo\'s'

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
      <TodoCard tableTitle={tableTitle} arrTodos={arrTodos}/>
    </div>
  );
}

export default App;
