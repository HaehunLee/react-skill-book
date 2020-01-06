import React from 'react';
import { InlineCodeBlock, CodeBlock, TableCellBlock, BlockQuoteBlock } from './Renderer';

const ReactMarkdown = require('react-markdown');

// const CodeBoxHeader = styled.span`

// `

const index = (props) => {
    const { contents } = props;
    
    return (
        <div style={{width: 'auto', height : '600px', overflow:'scroll'}}>
            <ReactMarkdown
                source={contents && contents}
                skipHtml={false}
                escapeHtml={false}
                renderers={{
                    code : CodeBlock,
                    tableCell : TableCellBlock,
                    inlineCode : InlineCodeBlock,
                    blockquote : BlockQuoteBlock
                }}
                />
        </div>
    );
};

export default index;


// https://medium.com/young-developer/react-markdown-code-and-syntax-highlighting-632d2f9b4ada