import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const AuthenticatedRoute = ({ component: C, props: cProps, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      cProps.isAuthenticated ? (
        <C {...props} {...cProps} />
      ) : (
        <Redirect
          to={`/?redirect=${props.location.pathname}${
            props.location.search
          }`}
        />
      )
    }
  />
)

AuthenticatedRoute.propTypes = {
  props: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
}

AuthenticatedRoute.defaultProps = {
  location: {
    pathname: '',
  },
}

export default AuthenticatedRoute