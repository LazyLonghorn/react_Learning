// import React, { useRef } from 'react';

// const ScrollBox = () => {
//     const style: React.CSSProperties = {
//         border: '1px solid black',
//         width: '300px',
//         height: '300px',
//         overflow: 'auto',
//         position: 'relative'
//     }
//     const innerStyle: React.CSSProperties = {
//         width: '100%',
//         height: '650px',
//         background: 'linear-gradient(white, black)'
//     }

//     const box = useRef<HTMLDivElement>(null);

//     let scrollToBottom = () => {
//         if(box.current) {
//             const {scrollHeight, clientHeight} = box.current;
//             box.current.scrollTop = scrollHeight - clientHeight;
//         }
//     }

//     return (
//         <div style={style}
//             ref={box}>
//             <div style={innerStyle}></div>
//         </div>
//     );
// };

// export default ScrollBox;

import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const ScrollBox = forwardRef((props, ref) => {
    const style: React.CSSProperties = {
        border: '1px solid black',
        width: '300px',
        height: '300px',
        overflow: 'auto',
        position: 'relative'
    }
    const innerStyle: React.CSSProperties = {
        width: '100%',
        height: '650px',
        background: 'linear-gradient(white, black)'
    }

    const box = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        scrollToBottom: () => {
            if(box.current) {
                const {scrollHeight, clientHeight} = box.current;
                box.current.scrollTop = scrollHeight - clientHeight;
            }
        }
    }));

    return (
        <div style={style}
            ref={box}>
            <div style={innerStyle}></div>
        </div>
    );
});

export default ScrollBox;


// import React, { useImperativeHandle, useRef } from 'react';
// const ScrollBox = ({ref, ...props}) => {
//     const style: React.CSSProperties = {
//         border: '1px solid black',
//         width: '300px',
//         height: '300px',
//         overflow: 'auto',
//         position: 'relative'
//     }
//     const innerStyle: React.CSSProperties = {
//         width: '100%',
//         height: '650px',
//         background: 'linear-gradient(white, black)'
//     }

//     const box = useRef<HTMLDivElement>(null);

//     useImperativeHandle(ref, () => ({
//         scrollToBottom: () => {
//             if(box.current) {
//                 const {scrollHeight, clientHeight} = box.current;
//                 box.current.scrollTop = scrollHeight - clientHeight;
//             }
//         }
//     }));

//     return (
//         <div style={style}
//             ref={box}>
//             <div style={innerStyle}></div>
//         </div>
//     );
// };

// export default ScrollBox;