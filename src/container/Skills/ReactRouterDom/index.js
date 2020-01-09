import React from 'react';
import { MainBox, ContentsBox, CodeBox, MdBox } from 'components/styled';
import ReactRouterDom from './ReactRouterDom';
import TransMd from 'components/TransMd';
import  { indexJS, ReactRouterDomJS, HomeJS, AboutJS, ProfileJS, ProfilesJS, markdown } from './Sources';
import AutoTab from 'components/AutoTab/AutoTab';

const index = () => {
    return (
        <MainBox>
            <ContentsBox>
                <h2>react-router-dom</h2>
                <ReactRouterDom />
            </ContentsBox>
            <CodeBox>
                <AutoTab
                    menu={['src/index.js', 'ReactRouterDom.js', 'Home.js','About.js', 'Profile.js', 'Profiles.js']}
                    contents={[
                        <TransMd contents={indexJS} />,
                        <TransMd contents={ReactRouterDomJS} />,
                        <TransMd contents={HomeJS} />,
                        <TransMd contents={AboutJS} />,
                        <TransMd contents={ProfileJS} />,
                        <TransMd contents={ProfilesJS} />,
                    ]}
                />
            </CodeBox>
            <MdBox><TransMd contents={markdown}/></MdBox>
        </MainBox>
    );
};

export default index;