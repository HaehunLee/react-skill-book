import React from 'react';
import { MainBox, ContentsBox, CodeBox, MdBox } from '../../components/styled';
import MobX from './MobX';
import TransMd from '../../components/TransMd';
import { markdown, MobxJS, CounterJS, counterJS } from './Sources';
import AutoTab from '../../components/AutoTab/AutoTab';

const index = () => {
    return (
        <MainBox>
            <ContentsBox>
                <h2>MobX</h2>
                <MobX />
            </ContentsBox>
            <CodeBox>
                <AutoTab
                    menu={['MobX.js','Counter.js','counter.js']}
                    contents={[
                        <TransMd contents={MobxJS} />,
                        <TransMd contents={CounterJS} />,
                        <TransMd contents={counterJS} />,
                    ]}
                />
            </CodeBox>
            <MdBox><TransMd contents={markdown}/></MdBox>
        </MainBox>
    );
};

export default index;