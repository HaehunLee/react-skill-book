import React from 'react';
// import MainContainer from './container/MainContainer';
import Lv1React  from './container/Level/Lv1React';
import Lv2JSX  from './container/Level/Lv2JSX';
import Lv3Component  from './container/Level/Lv3Component';
import MobX  from './container/Skills/MobX';
import Lv4LifeCycle  from './container/Level/Lv4LifeCycle';
import MaterialUi from './container/Skills/MaterialUi';
import ReactRouterDom from './container/Skills/ReactRouterDom';
import ReactRouterDom2 from './container/Skills/ReactRouterDom2';
import Redux from './container/Skills/Redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import AppShell from 'components/Navigation/AppShell'


import Home from 'container/Skills/ReactRouterDom/Home';
import About from 'container/Skills/ReactRouterDom/About';
import Profiles from 'container/Skills/ReactRouterDom/Profiles';
import Profile from 'container/Skills/ReactRouterDom/Profile';
import HistorySample from 'container/Skills/ReactRouterDom2/HistorySample';

function App() {
  return (
    <>
      {/* <MainContainer />
      <Lv1React/>
      <Lv2JSX />
      <Lv3Component />
      <MobX />
      <Lv4LifeCycle />
      <MaterialUi />
      <ReactRouterDom />
      <ReactRouterDom2 />
      <Redux /> */}
      <Router>
            <AppShell>
                <div>
                    <Route exact path="/lv1" component={Lv1React}/>
                    <Route exact path="/lv2" component={Lv2JSX}/>
                    <Route exact path="/lv3" component={Lv3Component}/>
                    <Route exact path="/skill/mobx" component={MobX}/>
                    <Route exact path="/lv4" component={Lv4LifeCycle}/>
                    <Route exact path="/skill/materialui" component={MaterialUi}/>
                    <Route exact path="/skill/reactrouterdom" component={ReactRouterDom}/>
                    <Route exact path="/skill/reactrouterdom2" component={ReactRouterDom2}/>
                    <Route exact path="/skill/redux" component={Redux}/>

                    {/* react-router-dom */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/profiles" component={Profiles} />
                    <Route path="/profiles/:username" component={Profile} />
                    <Route path="/history" component={HistorySample} />
                </div>
            </AppShell>
        </Router>
    </>
  );
}

export default App;
