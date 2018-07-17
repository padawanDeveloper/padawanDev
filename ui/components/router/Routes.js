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
import PostPage from '../../pages/PostPage'
import PostsPage from '../../pages/PostsPage'


const Routes = () => (
    <Switch>
      { Meteor.userId() ? (
        <AuthenticatedRoute exact path="/" component={DashboardPage} />
      ) : (
        <UnauthenticatedRoute exact path="/" component={LandingPage} />
      )}
      <UnauthenticatedRoute exact path="/signin" component={SigninPage} />
      <UnauthenticatedRoute exact path="/signup" component={SignupPage} />
      <AuthenticatedRoute exact path="/post/:id" component={PostPage} />
      <AuthenticatedRoute exact path="/posts" component={PostsPage} />
      <Route component={NotFound} />
    </Switch>
)

export default Routes