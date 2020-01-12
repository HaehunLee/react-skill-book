import React from 'react';
import { MainBox, ContentsBox, CodeBox, MdBox } from 'components/styled';
import ReactRouterDom2 from './ReactRouterDom2';
import TransMd from 'components/TransMd';
import  { indexJS, ReactRouterDom2JS, ProfileJS, ProfilesJS, HistorySampleJS, WithRouterSampleJS, markdown } from './Sources';
import AutoTab from 'components/AutoTab/AutoTab';

const index = () => {
    return (
        <MainBox>
            <ContentsBox>
                <h2>react-router-dom의 부가 기능</h2>
                <ReactRouterDom2 />
            </ContentsBox>
            <CodeBox>
                <AutoTab
                    menu={['src/index.js', 'ReactRouterDom2.js', 'Profile.js','Profiles.js', 'HistorySample.js', 'WithRouterSample.js']}
                    contents={[
                        <TransMd contents={indexJS} />,
                        <TransMd contents={ReactRouterDom2JS} />,
                        <TransMd contents={ProfileJS} />,
                        <TransMd contents={ProfilesJS} />,
                        <TransMd contents={HistorySampleJS} />,
                        <TransMd contents={WithRouterSampleJS} />,
                    ]}
                />
            </CodeBox>
            <MdBox><TransMd contents={markdown}/></MdBox>
        </MainBox>
    );
};

export default index;