import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="app-card">
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/team-matches/:id" component={TeamMatches} />
          <Route exact path="/bad-path" component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
