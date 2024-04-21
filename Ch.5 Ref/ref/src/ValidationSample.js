import React, { useState, useRef } from 'react';
import './ValidationSample.css';

const ValidationSample = () => {
    const [password, setPassword] = useState('');
    const [clicked, setClicked] = useState(false);
    const [validated, setValidated] = useState(false);

    const inputDom = useRef();      // Hooks

    const onChange = (e) => {
        setPassword(e.target.value);
    }

    const onClick = (e) => {
        setClicked(true);
        setValidated(password === '1234' ? true : false);

        inputDom.current.focus();
    }

    return (
        <div>
            <input
                type="password"
                className={clicked === true ? (validated === true ? 'success' : 'failure') : ''}
                value={password}
                onChange={onChange}
                ref={inputDom}
            />
            <button onClick={onClick}>Checking</button>
        </div>
    );
};

export default ValidationSample;