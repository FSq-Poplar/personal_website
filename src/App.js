import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
import './App.css'

import Home from './Views/Home'
import PpoBO from './Views/Ppobo'
import FPGANN from './Views/FPGANN'
import Builds from './Views/Builds'
import MiniProjects from './Views/Miniprojects'

export default class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/ppobo' component={PpoBO} />
            <Route exact path='/fpgann' component={FPGANN} />
            <Route exact path='/builds' component={Builds} />
            <Route exact path='/miniprojects' component={MiniProjects} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
