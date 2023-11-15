import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useLocalStorage } from '../useLocalStorage';

const HomePage = () => {
  const [todoItem, setTodoItem] = useState('');
  const [storedTodos, setStoredTodos] = useLocalStorage('todoItems', []);

  function handleSubmit(eventObj) {
    eventObj.preventDefault();
    setStoredTodos([...storedTodos, { todo: todoItem, id: nanoid() }]);
    setTodoItem('');
  }

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
                <li key={todo.id}>{todo.todo} </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  );
};

export default HomePage;
