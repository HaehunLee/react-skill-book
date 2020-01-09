import React from 'react';
import Lv2JSX from './Lv2JSX';
import TransMd from '../../../components/TransMd';
import { MainBox, ContentsBox, CodeBox, MdBox } from '../../../components/styled';
import { Lv2JSXJS, HelloJS, markdown} from './Sources';
import AutoTab from '../../../components/AutoTab/AutoTab';

const index = () => {
    return (
        <MainBox>
            <ContentsBox><Lv2JSX /></ContentsBox>
            <CodeBox>
                <AutoTab
                    menu={['Lv2JSX.js','Hello.js']}
                    contents={[
                        <TransMd contents={Lv2JSXJS} />,
                        <TransMd contents={HelloJS} />
                    ]}
                />
            </CodeBox>
            <MdBox><TransMd contents={markdown}/></MdBox>
        </MainBox>
    );
}

export default index;