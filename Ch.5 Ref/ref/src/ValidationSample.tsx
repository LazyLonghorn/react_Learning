import React, { useRef, useState } from 'react';
import './ValidationSample.css';

const ValidationSample = () => {
    const inputPassword = useRef<HTMLInputElement>(null);
    
    const [password, setPassword] = useState<string>('');
    const [validated, setValidated] = useState<boolean>(false);
    const [clicked, setClicked] = useState<boolean>(false);

    const handleChange = (e: any) => {
        setPassword(e.target.value);
    };
    const handleClick = (e: any) => {
        if(inputPassword.current) {
            inputPassword.current.focus();
        }
        
        setClicked(true);
        setValidated(password === '0000');
    }

    return (
        <div>
            <input
                type='text'
                value={password}
                onChange={handleChange}
                ref={inputPassword}
                className={clicked ? (validated ? 'success' : 'failure') : ''}
            />
            <button onClick={handleClick}>Validate</button>
        </div>
    );
};

export default ValidationSample;