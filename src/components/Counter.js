import React from 'react';

const Counter = (props) => {
    const { number, onIncrease, onDecrease } = props;

    return (
        <div>
            <h1>{number}</h1>        
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
};

export default Counter;