import React from 'react';
import { MainBox, ContentsBox, CodeBox, MdBox } from 'components/styled';
import TransMd from 'components/TransMd';
import { markdown, LifeCycleJS, LifeCycleSampleJS, ErrorBoundaryJS } from './Sources';
import AutoTab from 'components/AutoTab/AutoTab';
import Lv4LifeCycle from './Lv4LifeCycle';

const index = () => {
    return (
        <MainBox>
            <ContentsBox>
                <h2>Lv4.LifeCycle</h2>
                <Lv4LifeCycle />
            </ContentsBox>
            <CodeBox>
                <AutoTab
                    menu={['LifeCycle.js','LifeCycleSample.js','ErrorBoundary.js']}
                    contents={[
                        <TransMd contents={LifeCycleJS} />,
                        <TransMd contents={LifeCycleSampleJS} />,
                        <TransMd contents={ErrorBoundaryJS} />,
                    ]}
                />
            </CodeBox>
            <MdBox><TransMd contents={markdown}/></MdBox>
        </MainBox>
    );
};

export default index;