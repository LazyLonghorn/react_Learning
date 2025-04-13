import React from 'react';
import cn from 'classnames';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import './styles/TodoListItem.scss';

interface ITodoListItem {
    id: number;
    text: string;
    checked: boolean;
}

interface Props {
    todo: ITodoListItem;
    onRemove: Function;
    onToggle: Function;
}

const TodoListItem = ({todo, onRemove, onToggle}: Props) => {
    const { id, text, checked } = todo;

    return (
        <div className='TodoListItem'>
            <div className={cn('checkbox',{checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default TodoListItem;