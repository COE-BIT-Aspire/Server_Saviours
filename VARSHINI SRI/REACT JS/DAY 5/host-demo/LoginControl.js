import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './Greeting';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

export default class LoginControl extends Component {
    static f() {
        console.log('LoginControl static f')
    }
    handleLoginClick1 = this.handleLoginClick.bind(this)
    handleLogoutClick1 = this.handleLogoutClick.bind(this)
    constructor(props) {
      super(props)
      this.state = {
         isLoggedIn: false
      }
    }
    handleLoginClick() {
        this.setState({
            isLoggedIn: false
        });
    }
    handleLogoutClick() {
        this.setState({
            isLoggedIn: true
        });
    }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn) {
        button = <LogoutButton onClick={this.handleLoginClick1}></LogoutButton>
    }
    else {
        button = <LoginButton onClick={this.handleLogoutClick1}></LoginButton>
    }
    return (
      <div>
        {/* LoginControl */}
            <Greeting isLoggedIn = {isLoggedIn}/>
            {button}
        </div>
    );
  }
}

