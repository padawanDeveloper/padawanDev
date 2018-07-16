import React, {Component} from 'react'
import { Meteor } from 'meteor/meteor'
import { withRouter } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email:'', password:''}
  }

  handleChange = event => {
    const name = event.target.id,
          value = event.target.value;
    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password} = this.state;
    const { history } = this.props
    Meteor.loginWithPassword(email, password, error => {
      if (!error) {
       history.push('/')
      }else{
        Bert.alert({
          title: 'error',
          message: error.message,
          type: 'danger',
          style: 'growl-top-right',
          icon: 'fa-warning'
        });
        history.push('/notFound')
      }
    });
  }

  render() {
    const { email, password} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          User:
          <input 
            type="text" 
            value={email} 
            onChange={this.handleChange} 
            id="email"
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            value={password} 
            onChange={this.handleChange} 
            id="password"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default withRouter(props => <LoginForm history={props.history} />)