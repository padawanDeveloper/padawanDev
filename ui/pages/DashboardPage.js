import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class DashboardPage extends Component {
  logout = () => {
    const { history } = this.props;
    Meteor.logout(error => {
      console.log('deslogueado')
      history.push('/')
    });
  };

  render() {
    return (
      <div>
        <h1>DashboardPage</h1>
        <h1 onClick={this.logout}>Logout</h1>
      </div>
    );
  }
}

export default withRouter( props => <DashboardPage history={props.history} />)