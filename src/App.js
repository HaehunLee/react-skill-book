import React from 'react';
import MainContainer from './container/MainContainer';
import Lv1React  from './container/Level/Lv1React';
import Lv2JSX  from './container/Level/Lv2JSX';
import Lv3Component  from './container/Level/Lv3Component';
import MobX  from './container/Skills/MobX';
import Lv4LifeCycle  from './container/Level/Lv4LifeCycle';
import MaterialUi from './container/Skills/MaterialUi';

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
