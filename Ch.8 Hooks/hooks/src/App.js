// import React, {useState} from 'react';
// import Counter from './Counter';
// import Info from './Info';

// const App = () => {
//     const [visible, setVisible] = useState(false);
//     return (
//         <>
//             {/* <Counter/> */}
//             <button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>
//             <hr/>
//             {visible && <Info/>}
//         </>
//     );
// };

// export default App;


import React from 'react';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';

const App = () => {
    return (
        <div>
            {/* <Counter/> */}
            {/* <Info/> */}
            <Average/>
        </div>
    );
};

export default App;