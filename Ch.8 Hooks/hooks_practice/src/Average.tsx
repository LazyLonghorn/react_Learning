import React, { useEffect, useMemo, useState } from 'react';

const getAverage = (numbers: Array<number>) => {
    console.log('getAverage Run ...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}
const Average: React.FC = () => {
    const [list, setList] = useState<Array<number>>([]);
    const [number, setNumber] = useState('');

    // const [avg, setAvg] = useState(0);

    const onChange = (e: any) => {
        setNumber(e.target.value);
    }
    const onInsert = (e: any) => {
        let newList = list.concat(parseInt(number));

        setList(newList);
        setNumber('');

        // setAvg(getAverage(newList));
    }

    const avg = useMemo(() => (getAverage(list)), [list]);
    // const avg = getAverage(list);

    return (
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>Add</button>
            <ul>
                {list.map((value, idx) => 
                    <li key={idx}>{value}</li>
                )}
            </ul>
            <div><b>Average : {avg}</b></div>
        </div>
    );
};

export default Average;