import React, { useCallback, useReducer, useRef, useState } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

function createBulkTodos() {
  const array = [];
  for(let idx = 1; idx<=2500; ++idx) {
    array.push({
      id: idx,
      text: `todo ${idx}`,
      checked: false
    });
  }

  return array;
}

function todoReducer(todos: any, action: any) {
  switch(action.type) {
    case 'INSERT': {
      return todos.concat(action.todo);
    }
    case 'REMOVE': {
      return todos.filter((todo: any) => todo.id !== action.id);
    }
    case 'TOGGLE': {
      return todos.map((todo: any) => 
        todo.id === action.id ? {...todo, checked: !todo.checked} : todo,
      );
    }
    default: 
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const nextId = useRef(2501);
  
  const onInsert = useCallback((text: string) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false    
    }
    
    dispatch({ type: 'INSERT', todo});
    nextId.current += 1;
  }, []);
  
  const onRemove = useCallback((id: number) => {
    dispatch({ type: 'REMOVE', id});
  }, []);
  
  const onToggle = useCallback((id: number) => {
    dispatch({ type: 'TOGGLE', id});
  }, []);

    return (
      <div>
        <TodoTemplate>
          <TodoInsert onInsert={onInsert}/>
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
      </div>
  );
};

// const App = () => {
//   const [todos, setTodos] = useState(createBulkTodos);    // 최초 렌더링 시에만
//   const nextId = useRef(4);
//   const onInsert = useCallback((text: string) => {
//     const todo = {
//       id: nextId.current,
//       text: text,
//       checked: false    
//     }
    
//     setTodos(todos => todos.concat(todo));
//     nextId.current += 1;
//   }, []);
  
//   const onRemove = useCallback((id: number) => {
//     setTodos(todos => todos.filter((todo) => todo.id !== id));
//   }, []);
  
//   const onToggle = useCallback((id: number) => {
//     // const newTodos = todos.map((todo) => 
//     // (todo.id === id) ? {...todo, checked: !todo.checked} : todo
//     // );
//     // setTodos(newTodos);
//     setTodos((todos) => {
//           return todos.map((todo) => 
//             (todo.id === id) ? {...todo, checked: !todo.checked} : todo
//           )
//       });
//     }, []);

//     return (
//       <div>
//         <TodoTemplate>
//           <TodoInsert onInsert={onInsert}/>
//           <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
//         </TodoTemplate>
//       </div>
//   );
// };

export default App;