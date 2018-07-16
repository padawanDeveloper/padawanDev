import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const UnauthenticatedRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
     !Meteor.userId() ? (
        React.createElement(component, {...rest})
      ) : (
        <Redirect
          to={'/'}
        />
      )
    }
  />
)

UnauthenticatedRoute.propTypes = {
  component: PropTypes.func.isRequired,
}

export default UnauthenticatedRoute   