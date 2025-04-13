import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Step 1',
      checked: true      
    },
    {
      id: 2,
      text: 'Step 2',
      checked: true      
    },
    {
      id: 3,
      text: 'Step 3',
      checked: false      
    }
  ])

  const nextId = useRef(4);
  const onInsert = useCallback((text: string) => {
    const todo = {
      id: nextId.current,
      text: text,
      checked: false    
    }

    setTodos(todos.concat(todo));
    nextId.current += 1;
  }, [todos]);

  const onRemove = useCallback((id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }, [todos]);

  const onToggle = useCallback((id: number) => {
    const newTodos = todos.map((todo) => 
      (todo.id === id) ? {...todo, checked: !todo.checked} : todo
    )
    setTodos(newTodos);
  }, [todos]);

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
};

export default App;