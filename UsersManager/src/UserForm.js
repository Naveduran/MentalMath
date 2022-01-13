import React, { Component } from 'react'

export class UserForm extends Component {
	// Return a form that allows to create a new user with firstname, lastname, and username.
	// Requires a function to add users and a function to check if the user is duplicated.
	state = {
		firstName: '',
		lastName: '',
		userName: ''
	  };

	handleFirstName = event => { this.setState({ firstName: event.target.value }); };
	handleLastName = event => {	this.setState({ lastName: event.target.value }); };
	handleUserName = event => { this.setState({ userName: event.target.value }); };

	handleSubmit = event => {
		// Add a new user only if it is not duplicated, or their values are empty.
		event.preventDefault();
		if (!this.props.userExists(this.state.userName)) {
		  this.props.addUser(this.state);
		}
	};

	isDisabled = () => {
		// Return true if the fields first, last or username do not have text inside.
		const { firstName, lastName, username } = this.state;
		return firstName === '' || lastName === '' || username === '';
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h1> Create a new User:</h1>
				<label>First name:
					<input type="text" id="firstName" value={this.state.firstName} onChange={this.handleFirstName} />
				</label>
				<br />
				<label>Last name:
					<input type="text" id="lastName" value={this.state.lastName} onChange={this.handleLastName} label="lastName" />
				</label>
				<br />
				<label>Username:
					<input type="text" id="userName" value={this.state.userName} onChange={this.handleUserName} label="userName" />
				</label>
				<br />
				<button className="smallButton" disabled={this.isDisabled()}> Add User </button>

			</form>
		)
	}
}

export default UserForm;
