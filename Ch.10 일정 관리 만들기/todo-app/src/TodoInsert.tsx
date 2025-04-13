import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './styles/TodoInsert.scss';

interface Props {
    onInsert: Function
}

const TodoInsert = ({onInsert}: Props) => {
    const [value, setValue] = useState('');
    const onChange = useCallback((e: any) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e: any) => {
        onInsert(value);
        setValue('');

        e.preventDefault();
    }, [onInsert, value]);

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input 
                placeholder='Insert Todo Item'
                value={value}
                onChange={onChange}
            />
            <button type='submit'>
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;