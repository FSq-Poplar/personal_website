import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Transition, TransitionGroup } from 'react-transition-group';
import './index.css'
import './App.css'

import Home from './Views/Home'
import PpoBO from './Views/Ppobo'
import FPGANN from './Views/FPGANN'
import Builds from './Views/Builds'
import MiniProjects from './Views/Miniprojects'
import { play, exit } from './Animations/Play'

export default class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
      <div className='App'>
        <Route render={({location}) => {
          const { pathname, key } = location
          return (
            <TransitionGroup component={null}>
              <Transition
                key={key}
                appear={true}
                onEnter={(node, appears) => play(pathname, node, appears)}
                onExit={(node, appears) => exit(node, appears)}
                timeout={{enter: 750, exit: 150}}
              >
                <Switch location={location}>
                  <Route exact path='/' component={Home} />
                  <Route path='/ppobo' component={PpoBO} />
                  <Route path='/fpgann' component={FPGANN} />
                  <Route path='/builds' component={Builds} />
                  <Route path='/miniprojects' component={MiniProjects} />
                </Switch>
              </Transition>
            </TransitionGroup>
          )
        }}/>
      </div>
      </BrowserRouter>
    )
  }
}
