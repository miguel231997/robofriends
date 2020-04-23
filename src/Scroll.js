import React from 'react';

const Scroll = (props) => {

    return (
        <div style = {{overflowY: 'scroll', border: '3px solid black', heights: '500px'}}> 
            {props.children}
        </div>
    );
    
};



export default Scroll;