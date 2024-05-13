import React, { useState } from 'react';

const IterationSample = () => {

    const [names, setNames] = useState([
        {id: 1, text: "A"}
        , {id: 2, text: "B"}
        , {id: 3, text: "C"}
        , {id: 4, text: "D"}
    ]);

    const [inputText, setInputText] = useState('');

    const onChange = (e) => setInputText(e.target.value);
    const onClick = (e) => {
        // let newNames = [...names, {id: names.length+1, text: inputText}];
        let newNames = names.concat({
            id: names.length + 1
            , text: inputText
        })
        setNames(newNames);
        setInputText('');
    }
    const onRemove = (id) => {
        let newNames = names.filter((name) => (name.id !== id));
        setNames(newNames);
    }
    
    const namesList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}    
        </li>
    ));

    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>Add</button>
            <ul>
                {namesList}
            </ul>
        </>
    );
};

export default IterationSample;