import React from 'react';
import Hello from './Hello';
// import '../../App.css';

const Lv2JSX = () => {
    const name = 'react';
    const style = {
        backgroundColor : 'black',
        color : 'aqua',
        fontSize : 24,
        padding : '1rem'
    }

    return (
        <div>
            <h2>Lv2. JSX</h2>
            <Hello 
                // 이런 식의 작성하는 주석문
            />
            <div style={style}>{name}</div>
            <div className="gray-box">gray-box</div>
            {/* 어쩌고 저쩌고 */}
        </div>
    );
}

export default Lv2JSX;