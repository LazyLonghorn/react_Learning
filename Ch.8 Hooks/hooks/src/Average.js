import React, {useState, useMemo, useCallback, useRef} from 'react';

const getAverage = (numbers) => {
    console.log('Get Average...');
    if(numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    },[]);

    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');

        inputEl.current.focus();
    }, [list, number]);

    const avg = useMemo(() => getAverage(list), [list]);
    // const avg2 = getAverage(list);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>Add</button>
            <ul>
                {list.map((value, idx) => 
                    <li key={idx}>{value}</li>
                )}
            </ul>
            
            <div>
                <b>Average : </b> {avg}
            </div>
        </div>
    );
};

export default Average;