import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm'
import UsersList from './UsersList'

class App extends Component {

  state = {
    // Save users and users count
    users: [
      {
        'userName': "Lily89",
        'firstName': "Lila",
        'lastName': "James",
        'id': 1,
        'games': 10
      },
      {
        'userName': "VivianLy",
        'firstName': "Vivian",
        'lastName': "Doe",
        'id': 2,
        'games': 23
      },
      {
        'userName': "Dopelganger",
        'firstName': "Moon",
        'lastName': "Sand",
        'id': 3,
        'games': 23
      },
    ],
    count : 3,
  }

  userExists = (userName) => {
	// If the username sended is already taken and shows an alert and return true.
	const duplicated = this.state.users.filter( user => user.userName === userName)

	if (duplicated.length > 0) {
		alert("That username is already taken")
		return true;
	}
	return false
  }

  addUser = (user) => {
	// Add a new user to the users lists and update the counter.
	// Receives an object with user attributes and adds default games number, and an user id.
	user.games = 0
	user.id = this.state.count + 1

	this.setState ( oldState => ({
	users: [...oldState.users, user],
	count: [...oldState.count + 1 ]      
	}))
}


  render() {
    const users = this.state.users
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <UserForm users={users} addUser={this.addUser} userExists={this.userExists} />
        <UsersList users={users} />
		  </div>
    );
  }
  }

export default App;
