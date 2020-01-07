import React from 'react';
import { MainBox, ContentsBox, CodeBox, MdBox } from '../../components/styled';
import TransMd from '../../components/TransMd';
import { MaterialUiJS, MaterialButtonJS, MaterialTableJS, markdown } from './Sources';
import AutoTab from '../../components/AutoTab/AutoTab';
import MaterialUi from './MaterialUi';

const index = () => {
    return (
        <MainBox>
            <ContentsBox>
                <h2>material-ui</h2>
                <MaterialUi />
            </ContentsBox>
            <CodeBox>
                <AutoTab
                    menu={['MaterialUi.js','MaterialButton.js','MaterialTable.js']}
                    contents={[
                        <TransMd contents={MaterialUiJS} />,
                        <TransMd contents={MaterialButtonJS} />,
                        <TransMd contents={MaterialTableJS} />,
                    ]}
                />
            </CodeBox>
            <MdBox><TransMd contents={markdown}/></MdBox>
        </MainBox>
    );
};

export default index;