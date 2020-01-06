import React from 'react';
import { MainBox, ContentsBox } from '../../components/styled';
import Counter from './Counter';

const index = () => {
    return (
        <MainBox>
            <ContentsBox>
                <h2>MobX</h2>
                <Counter /> 
            </ContentsBox>
        </MainBox>
    );
};

export default index;