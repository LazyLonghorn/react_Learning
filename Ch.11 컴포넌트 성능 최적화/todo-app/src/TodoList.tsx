// import React from 'react';
// import TodoListItem from './TodoListItem';
// import './styles/TodoList.scss';

// interface ITodoListItem {
//     id: number;
//     text: string;
//     checked: boolean;
// }

// interface Props {
//     todos: ITodoListItem[];
//     onRemove: Function;
//     onToggle: Function;
// }

// const TodoList = ({ todos, onRemove, onToggle }: Props) => {
//     return (
//         <div className='TodoList'>
//             {todos.map((todo: ITodoListItem) => (
//                 <TodoListItem 
//                     key={todo.id} 
//                     todo={todo} 
//                     onRemove={onRemove} 
//                     onToggle={onToggle}
//                 />
//             ))}
//         </div>
//     );
// };

// export default TodoList;


import React, { useCallback } from 'react';
import { List, ListRowRenderer } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './styles/TodoList.scss';

interface ITodoListItem {
    id: number;
    text: string;
    checked: boolean;
}

interface Props {
    todos: ITodoListItem[];
    onRemove: Function;
    onToggle: Function;
}
type Row = {
    index: number;
    key: string;
    style: object;
};

const TodoList = ({ todos, onRemove, onToggle }: Props) => {
    const rowRenderer: ListRowRenderer = useCallback(
        ({index, key, style}: Row) => {
            const todo = todos[index];
            console.log('전인덱스에요', index);
            
            return <TodoListItem
                todo={todo}
                key={key} 
                onRemove={onRemove} 
                onToggle={onToggle}
                style={style}
            />
    }, [todos, onRemove, onToggle]);

    return (
        <List
            className="TodoList"
            width={512}                     // 전체 Width
            height={513}                    // 전체 Height
            rowCount={todos.length}         // 항목 수
            rowHeight={57}                  // Content Height
            rowRenderer={rowRenderer}       // 렌더링 함수
            list={todos}                    // 목록
            style={{ outline: 'none' }}     // List 에 적용되는 스타일
        />
    );
};

export default React.memo(TodoList);