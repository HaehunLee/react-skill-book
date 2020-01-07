import React from 'react';
import styled from 'styled-components';

const HeaderContents = styled.span`
    border : 1px solid skyblue;
    background : skyblue;
    color : white;
    border-radius : 10px;
    font-size : 25px;
    font-weight : bold;
    margin-top : 15px;
    padding : 2px 20px;
`

const PageHeader = (props) => {
    const { Text } = props;

    return (
        <div style={{display : 'flex', justifyContent : 'center', }}>
            <HeaderContents>{Text}</HeaderContents>
        </div>
    );
};

export default PageHeader;