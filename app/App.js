import React, { Component } from 'react'
import Routes from '../ui/components/router/Routes'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const childProps = {
      isAuthenticated: false,
    }
    console.log('App')
    return (
      <div>
        <Routes childProps={childProps} />
      </div>
    )
  }
}

export default App
