
import './App.css';
import NumberGenerator from './components/NumberGenerator';
import Counter from './components/Counter';
import ToDoList from './components/ToDoList'
import NameGenerator from './components/NameGenerator'

function App() {
  return (
    <div className='App'>
      <NumberGenerator/>
      <Counter/>
      <ToDoList/>
      <NameGenerator/>
    </div>
  );
}

export default App;
