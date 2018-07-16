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

const Routes = () => (
    <Switch>
      { Meteor.userId() ? (
        <AuthenticatedRoute exact path="/" component={DashboardPage} />
      ) : (
        <UnauthenticatedRoute exact path="/" component={LandingPage} />
      )}
      {/*<AppliedRoute path="/" exact component={LandingPage} props={childProps} />*/}
      <UnauthenticatedRoute exact path="/signin" component={SigninPage} />
      <Route component={NotFound} />
    </Switch>
)

Routes.propTypes = {
  childProps: PropTypes.object.isRequired,
}

export default Routes