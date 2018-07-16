import React, {Component} from 'react'
import { Accounts } from 'meteor/accounts-base'
import { withRouter } from 'react-router-dom'

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email:'', passwordOne:'', passwordTwo:''}
  }

  handleChange = event => {
    const name = event.target.id,
          value = event.target.value;
    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, passwordOne, passwordTwo } = this.state;
    const { history } = this.props
    if(email && passwordOne==passwordTwo) {
      console.log('registrado')
      Accounts.createUser({email, password: passwordOne},error => {
        if(!error){
          history.push('/')
        }
      })
    }else{
      Bert.alert({
        title: 'error',
        message: 'Todos loa campos son obligatorios',
        type: 'danger',
        style: 'growl-top-right',
        icon: 'fa-warning'
      });
    }
  }

  render() {
    const { email, password} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
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
            id="passwordOne"
          />
        </label>
        <label>
          Repeat Password:
          <input 
            type="password" 
            value={password} 
            onChange={this.handleChange} 
            id="passwordTwo"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default withRouter(props => <RegisterForm history={props.history} />)