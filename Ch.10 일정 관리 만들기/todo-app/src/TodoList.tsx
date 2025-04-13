import React from 'react';
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

const TodoList = ({ todos, onRemove, onToggle }: Props) => {
    return (
        <div className='TodoList'>
            {todos.map((todo: ITodoListItem) => (
                <TodoListItem 
                    key={todo.id} 
                    todo={todo} 
                    onRemove={onRemove} 
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default TodoList;