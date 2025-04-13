import React, { ReactNode } from 'react';
import './styles/TodoTemplate.scss';

type TodoTemplateProps = {
    children: ReactNode
}

const TodoTemplate = ({children}: TodoTemplateProps) => {
    return (
        <div className='TodoTemplate'>
            <div className='app-title'>일정 관리</div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default TodoTemplate;