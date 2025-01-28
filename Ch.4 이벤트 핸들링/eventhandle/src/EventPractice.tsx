import React, { useState } from 'react';

const EventPractice = () => {
    type Form = {username: string, message: string}
    const [form, setForm] = useState<Form>({username :'', message: ''});
    const {username, message} = form;
    const onChange = (e: any) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm);
    }
    const onClick = (e: any) => {
        alert(`[${username}]: ${message}`);
        const initForm = {
            username: '',
            message: ''
        }

        setForm(initForm);
    }
    
    return (
        <div>
            <input
                type="text"
                name='username'
                placeholder='Username'
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name='message'
                placeholder='Message'
                value={message}
                onChange={onChange}
            />
            <button onClick={onClick}>Submit</button>
        </div>
    );
};

export default EventPractice;