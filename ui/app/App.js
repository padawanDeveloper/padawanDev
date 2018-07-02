import React, { Component } from 'react';
 
// App component - represents the whole app
export default class App extends Component {
	constructor(props) {
    super(props);
  }

  render() {
  	console.log('App')
    return ( 	
        <div>
          <h1>Hello world!! yeeeeeehhh!!!</h1>
        </div>
    );
  }
}