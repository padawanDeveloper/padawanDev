import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import UnauthenticatedRoute from './UnauthenticatedRoute'
import AuthenticatedRoute from './AuthenticatedRoute'
import AppliedRoute from './AppliedRoute'
import NotFound from '../../pages/NotFound'
import DashboardPage from '../../pages/DashboardPage'
import LandingPage from '../../pages/LandingPage'

const Routes = ({childProps}) => (
    <Switch>
      {childProps.isAuthenticated ? (
        <AuthenticatedRoute exact path="/" component={DashboardPage} props={childProps}/>
      ) : (
        <UnauthenticatedRoute exact path="/" component={LandingPage} props={childProps}/>
      )}
      {/*<AppliedRoute path="/" exact component={LandingPage} props={childProps} />*/}
      <Route component={NotFound} />
    </Switch>
)

Routes.propTypes = {
  childProps: PropTypes.object.isRequired,
}

export default Routes