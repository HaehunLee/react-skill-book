import React from 'react';
import MainContainer from './container/MainContainer';
import Lv1React  from './container/Lv1React';
import Lv2JSX  from './container/Lv2JSX';
import Lv3Component  from './container/Lv3Component';
import MobX  from './container/MobX';
import Lv4LifeCycle  from './container/Lv4LifeCycle';
import MaterialUi from './container/MaterialUi';

function App() {
  return (
    <>
      <MainContainer />
      <Lv1React/>
      <Lv2JSX />
      <Lv3Component />
      <MobX />
      <Lv4LifeCycle />
      <MaterialUi />
    </>
  );
}

export default App;
