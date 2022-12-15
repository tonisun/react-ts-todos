import './App.css';
import TodoCard from './components/TodoCard';

function App() {

  const tableTitle = 'Todo\'s'

  return (
    <div className='mt-5 container'>
      <TodoCard tableTitle={tableTitle}/>
    </div>
  );
}

export default App;
