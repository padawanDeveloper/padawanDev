import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import UnauthenticatedRoute from './UnauthenticatedRoute'
import AuthenticatedRoute from './AuthenticatedRoute'
import AppliedRoute from './AppliedRoute'
import NotFound from '../../pages/NotFound'
import DashboardPage from '../../pages/DashboardPage'
import LandingPage from '../../pages/LandingPage'
import SigninPage from '../../pages/SiginPage'
import SignupPage from '../../pages/SignupPage'


const Routes = () => (
    <Switch>
      { Meteor.userId() ? (
        <AuthenticatedRoute exact path="/" component={DashboardPage} />
      ) : (
        <UnauthenticatedRoute exact path="/" component={LandingPage} />
      )}
      <UnauthenticatedRoute exact path="/signin" component={SigninPage} />
      <UnauthenticatedRoute exact path="/signup" component={SignupPage} />
      <Route component={NotFound} />
    </Switch>
)

export default Routes