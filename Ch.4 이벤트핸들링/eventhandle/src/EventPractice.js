import React, { useState } from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username, message} = form;

    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };

        setForm(nextForm);
    }

    const onClick = () => {
        alert(username + " : " + message);
        
        const initForm = {
            username: '',
            message: ''
        }
        setForm(initForm);
    }

    return (
        <div>
            <h1>Event Practice</h1>
            <input type='text' 
                name='username' 
                placeholder='Input Username'
                value={username} 
                onChange={onChange} 
            />
            <input type='text' 
                name='message' 
                placeholder='Input Message'
                value={message} 
                onChange={onChange} 
            />
            <button onClick={onClick}>Check</button>
        </div>
    );
};

export default EventPractice