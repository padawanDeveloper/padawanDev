import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PostForm from '../components/blog/PostForm'

class DashboardPage extends Component {
  logout = () => {
    const { history } = this.props;
    Meteor.logout(error => {
      console.log('deslogueado')
      history.push('/')
    });
  };

  callMetodo = () => {
    Meteor.call('logMethods')
  }

  render() {
    return (
      <div> 
        <h1>DashboardPage</h1>
        <h1 onClick={this.logout}>Logout</h1>
        <PostForm/>
      </div>
    );
  }
}

export default withRouter( props => <DashboardPage history={props.history} />)