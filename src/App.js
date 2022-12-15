import './App.css';
import TodoRowItem from './components/TodoRowItem';

function App() {
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
              <TodoRowItem/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
