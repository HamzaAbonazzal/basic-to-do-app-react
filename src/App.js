import './App.css';
import {useRef, useState} from "react";

function App() {

  // eslint-disable-next-line no-undef
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = {completed: false, text}
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  }

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos)
  }

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      if (!darkMode) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
      } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
      }
    };
    return (
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? '🌞' : '🌜'}
      </button>
    );
  };

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className="to-do-container">
      <ul>
        {todos.map(({text, completed}, index) => {
          return (
            <div className='item'>
              <li className={completed ? "done": ""} key={index} onClick={() => handleItemDone(index)}>{text}</li>
              <span className='trash' onClick={() => handleDeleteItem(index)}>❌</span>
            </div>
            )
        })}
      </ul>
      <input ref={inputRef} placeholder='Enter Item...'/>
      <button onClick={handleAddTodo}>Add</button>
      <DarkModeToggle />
      </div>
    </div>
  );
}

export default App;
