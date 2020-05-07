import React from 'react';

// Extract the Consumer from Context
const { Consumer } = React.createContext();

export default Component => props => (
    <Consumer>
        {device => (
            <Component
                {...props}
                device={device}
            />
        )}
    </Consumer>
);
