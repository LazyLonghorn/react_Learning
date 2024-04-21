import React from 'react';

const MyComponent = ({ name, children }) => {
    return (
        <div>
            Hello, My Name is {name}! <br/>
            Children: {children}
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'React'
}

export default MyComponent;