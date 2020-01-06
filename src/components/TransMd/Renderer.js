import React from 'react';
import CodeBlock from './CodeBlock';

function InlineCodeBlock(props) {
    return (
        <span style={{ background : '#ff0'}}>
            {props.value}
        </span>
    )
}

function BlockQuoteBlock(props) {
    return (
        <div style={{border : '1px dashed #aaa', borderRadius : 10, paddingLeft : 10, margin : 5}}>
            {props.children}
        </div>
    );
}

// function CodeBlock(props) {
//     return (
//         <pre style={{background:'#000', color : '#fff', padding : 10}}>
//             <code>
//                 {props.value}
//             </code>
//         </pre>
//     )
// }

function TableCellBlock(props) {
    let style = {
        textAlign : props.align ? props.align : 'center',
        padding : 5
    }

    if (props.isHeader) {
        style.background = '#ff0';
        style.border = '1px solid #ccc';
        style.borderLeft = 0;
        style.borderRight = 0;
    } else {
        style.borderBottom = '1px solid #eee';
    }

    return (
        <td style={style}>
            {props.children}
        </td>
    )
}

export { InlineCodeBlock, BlockQuoteBlock, CodeBlock, TableCellBlock } ;