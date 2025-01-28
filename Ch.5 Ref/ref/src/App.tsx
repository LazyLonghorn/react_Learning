// import './App.css';
// import ScrollBox from './ScrollBox';
// import ValidationSample from './ValidationSample';

// function App() {
//   return (
//     <div>
//       {/* <ValidationSample/> */}
//       <ScrollBox />
//       <button onClick={() => >To Bottom</button>
//     </div>
//   );
// }

// export default App;


import React, { useRef } from 'react';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

const App = () => {
  const scrollBox = useRef<any>(null);
  const onClick = () => {
    if(scrollBox.current) {
      (scrollBox.current as any).scrollToBottom();
    }
  }

  return (
    <div>
      {/* <ValidationSample/> */}
      <ScrollBox ref={scrollBox}/>
      <button onClick={onClick}>To Bottom</button>
    </div>
  );
};

export default App;