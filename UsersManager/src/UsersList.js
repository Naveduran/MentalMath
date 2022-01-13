import React, { Component } from 'react'

export class UsersList extends Component {
	state = {
		"count": 0,
		"buttonText": "Hide the Number of Games Played",
		"hidden": false
	}	

	changeText = (count) => {
		// Change the text of the button, and hide/shows played games,
		// depending on the number of clicks given to the button.
		if (count % 2 !== 0 ){
			this.setState( oldState => ({   
				buttonText: "Hide the Number of Games Played", 
				count: oldState.count + 1,
				hidden: false
			}));
		} else {
			this.setState( oldState =>({ 
				buttonText: "Show the Number of Games Played", 
				count: oldState.count + 1,
				hidden: true
			})); 
		}
	} 

	render() {
		const users = this.props.users
		const { count, buttonText, hidden} = this.state
		return (
			<div>
				<h1> Users: </h1>
				<ul>
					{users.map(usr => <li key={usr.id} >{usr.userName} <span hidden={hidden}> has played {usr.games} times</span></li> )}
				</ul>
				<button className="smallButton" onClick={()=> {this.changeText(count)}}>{buttonText}</button>
			</div>
		)
	}
}

export default UsersList;
