import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const AuthenticatedRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Meteor.userId() ? (
        React.createElement(component, {...rest})
      ) : (
        <Redirect
          to={'/'}
        />
      )
    }
  />
)

AuthenticatedRoute.propTypes = {
  component: PropTypes.func.isRequired,
}

export default AuthenticatedRoute