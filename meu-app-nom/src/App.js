
import './App.css';
import NumberGenerator from './components/NumberGenerator';
import Counter from './components/Counter';
import ToDoList from './components/ToDoList'

function App() {
  return (
    <div className='App'>
      <NumberGenerator/>
      <Counter/>
      <ToDoList/>
    </div>
  );
}

export default App;
