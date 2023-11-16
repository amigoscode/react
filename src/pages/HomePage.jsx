import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useLocalStorage } from '../useLocalStorage';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [todoItem, setTodoItem] = useState('');
  const [storedTodos, setStoredTodos] = useLocalStorage('todoItems', []);

  const handleSubmit = (eventObj) => {
    eventObj.preventDefault();
    setStoredTodos([...storedTodos, { todo: todoItem, id: nanoid(), checked: false }]);
    setTodoItem('');
  };

  const deleteTodo = (todoItem) => {
    setStoredTodos(storedTodos.filter((item) => item.id !== todoItem.id));
  };

  const checkTodo = (todoItem) => {
    const updatedTodoItems = storedTodos.map((item) => {
      if (item.id === todoItem.id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setStoredTodos(updatedTodoItems);
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="todoTask">
            <strong>New task</strong>
          </label>
          <br />
          <input
            id="todoTask"
            name="todo"
            placeholder="buy chocolate"
            onChange={(e) => setTodoItem(e.target.value)}
            value={todoItem}
          />
        </section>
      </form>
      <section>
        {storedTodos.length === 0 ? (
          <div>Add a todo 👆</div>
        ) : (
          <>
            <strong>Tasks</strong>
            <ul>
              {storedTodos.map((todo) => (
                <li key={todo.id} className={todo.checked ? styles.checked : ''}>
                  {todo.todo}
                  <button aria-label="Check todo" onClick={() => checkTodo(todo)}>
                    ✅
                  </button>
                  <button aria-label="Delete todo" onClick={() => deleteTodo(todo)}>
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  );
};

export default HomePage;
