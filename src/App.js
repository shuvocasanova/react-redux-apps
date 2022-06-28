import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Redux app</h1>
      <Todos/>
    </div>
  );
}

export default App;
