import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import MainLayout from './layouts/MainLayout'
import NotFound from './components/NotFound'

import UserTvShowsContainer from './containers/UserTvShowsContainer'

const history = createHistory()

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/:filter?" render={({match}) => (
        <MainLayout>
          <UserTvShowsContainer filter={match.params.filter || 'current'}/>
        </MainLayout>
      )} />
      <Route component={NotFound}/>
    </Switch>
  </Router>
)

export default Routes

