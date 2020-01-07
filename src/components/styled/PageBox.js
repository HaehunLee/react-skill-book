import React from 'react';
import styled from 'styled-components';
import PageHeader from './PageHeader';

const MainBox = styled.div`
    display : inline-flex;
    width : 100%;
    border : 1px dashed red;
    margin : 5px;
    background : #EEEEEE;
`

const ContentsBox = ({children}) => {
    const Box = styled.div`
        width : 33%;
        padding : 5px;
        display : flex;
        flex-direction: column;
    `
    return (
        <Box>
            <PageHeader Text='Pages'/>
            {children}
        </Box>
    )
}

const CodeBox = ({children}) => {
    const Box = styled.div`
        width : 33%;
        padding : 5px;
        border-left : 1px dashed red;
        border-right : 1px dashed red;
        display : flex;
        flex-direction: column;
    `
    return (
        <Box>
            <PageHeader Text='Code'/>
            {children}
        </Box>
    )
}

const MdBox = ({children}) => {
    const Box = styled.div`
        width : 33%;
        padding : 5px;
        display : flex;
        flex-direction: column;
    `
    return (
        <Box>
            <PageHeader Text='MarkDown'/>
            {children}
        </Box>
    )
}

export { MainBox, ContentsBox, CodeBox, MdBox };