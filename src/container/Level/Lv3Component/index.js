import React from 'react';
import TransMd from 'components/TransMd';
import { MainBox, ContentsBox, CodeBox, MdBox } from 'components/styled';

const contents = `

*준비중...*
`;

const index = () => {
    return (
        <MainBox>
            <ContentsBox>
                <h2>Lv3. Component</h2>

                <h3>class Component</h3>

                <h3>functional Component</h3>

            </ContentsBox>
            <CodeBox><TransMd contents={contents}/></CodeBox>
            <MdBox><TransMd contents={contents}/></MdBox>
        </MainBox>
    );
};

export default index;