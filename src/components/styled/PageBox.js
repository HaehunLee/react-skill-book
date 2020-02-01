import React from 'react';
import styled from 'styled-components';
import PageHeader from './PageHeader';

import './PageBox.css';

const MainBox = ({children}) => {
    const Box = styled.div`
    display : inline-flex;
    width : 100%;
    border : 1px dashed red;
    margin : 5px;
    background : #EEEEEE;
`
    return (
        <Box className="main-box">
            {children}
        </Box>
    )
}


const ContentsBox = ({children}) => {
    const Box = styled.div`
        width : 33%;
        padding : 5px;
        display : flex;
        flex-direction: column;
    `
    return (
        <Box className="page-box">
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
        <Box className="page-box">
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
        <Box className="page-box">
            <PageHeader Text='MarkDown'/>
            {children}
        </Box>
    )
}

export { MainBox, ContentsBox, CodeBox, MdBox };