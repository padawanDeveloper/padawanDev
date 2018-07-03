import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

function querystring(name, url = window.location.href) {
  const redirectTagName = name.replace(/[[]]/g, '\\$&')
  const regex = new RegExp(`[?&]${redirectTagName}(=([^&#]*)|&|#|$)`, 'i')
  const results = regex.exec(url)
  if (!results) {
    return null
  }
  if (!results[2]) {
    return ''
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

const UnauthenticatedRoute = ({ component: C, props: cProps, ...rest }) => {
  const redirect = querystring('redirect')
  return (
    <Route
      {...rest}
      render={props =>
        !cProps.isAuthenticated ? (
          <C {...props} {...cProps} />
        ) : (
          <Redirect
            to={redirect === '' || redirect === null ? '/' : redirect}
          />
        )
      }
    />
  )
}

UnauthenticatedRoute.propTypes = {
  props: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired,
}

export default UnauthenticatedRoute