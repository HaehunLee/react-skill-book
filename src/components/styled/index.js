import styled from 'styled-components';

const MainBox = styled.div`
    display : inline-flex;
    width : 100%;
    border : 1px dashed red;
    margin : 5px;
    background : #EEEEEE;
`

const ContentsBox = styled.div`
    width : 33%;
    padding : 5px;
    `
    
    const CodeBox = styled.div`
    width : 33%;
    padding : 5px;
    border-left : 1px dashed red;
    border-right : 1px dashed red;
    `
    
    const MdBox = styled.div`
    width : 33%;
    padding : 5px;
`

export { MainBox, ContentsBox, CodeBox, MdBox };