import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ChatWindow } from './ChatWindow';


class App extends Component {
	state = {
		users: [
			{ username: 'Amy' },
			{ username: 'John' }
		],
		messages: [
			{ username: 'Amy', text: 'Hi, Jon!' },
			{ username: 'Amy', text: 'How are you?' },
			{ username: 'John', text: 'Hi, Amy! Good, you?' }
		],
	}

	createMessage = (newMessage) => {
		this.setState( oldState => ({
			messages: [...oldState.messages, newMessage],
		}))
	} 

	render() {
		const {users, messages} = this.state
		return (
			<div className="App">

				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">ReactND - Coding Practice</h1>
				</header>

				<div className="container">

					<ChatWindow username={users[0].username} 
								messages={messages}
								createMessage={this.createMessage} />

					<ChatWindow username={users[1].username}
								messages={messages}
								createMessage={this.createMessage} />
				</div> 
			</div> 
		);
	}
}

export default App;
