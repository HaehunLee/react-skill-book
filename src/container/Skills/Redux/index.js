import React from 'react';
import { MainBox, ContentsBox, CodeBox, MdBox } from 'components/styled';
import Redux from './Redux';
import TransMd from 'components/TransMd';
import  { markdown } from './Sources';
import AutoTab from 'components/AutoTab/AutoTab';

const index = () => {
    return (
        <MainBox>
            <ContentsBox>
                <h2>Redux</h2>
                <Redux />
            </ContentsBox>
            <CodeBox>
                <AutoTab
                    menu={['src/index.js']}
                    contents={[
                        // <TransMd contents={indexJS} />,
                    ]}
                />
            </CodeBox>
            <MdBox><TransMd contents={markdown}/></MdBox>
        </MainBox>
    );
};

export default index;