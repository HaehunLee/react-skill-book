import React from 'react';
import MainContainer from './container/MainContainer';
import Lv1React  from './container/Lv1React';
import Lv2JSX  from './container/Lv2JSX';
import Lv3Component  from './container/Lv3Component';
import MobX  from './container/MobX';

function App() {
  return (
    <>
      <MainContainer />
      <Lv1React/>
      <Lv2JSX />
      <Lv3Component />
      <MobX />
    </>
  );
}

export default App;
