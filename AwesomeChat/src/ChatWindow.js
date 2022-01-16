import React, { Component } from 'react'

export class ChatWindow extends Component {
	state = {
		username: this.props.username,
		text: ""
	}

	isDisabled = () => {
		if (this.state.text === "") {
			return true;
		} else { return false; }
	};

	onTextChange = (text) => {
		this.setState(() => ({
			text: text
		}))
	}

	handleSubmit = event => {
		event.preventDefault();
		if (this.state.text !== ""){
			this.props.createMessage(this.state)
			this.setState(() => ({ text: "" }))
		}
	}

	render() {
		const {username, messages} = this.props

		return (
			<div className="chat-window">
				<h2>Super Awesome Chat</h2>
				<div className="name sender">{username}</div>
				<ul className="message-list">
					{messages.map((message, index) => (
						<li key={index}	className={	message.username === username ? 'message sender' : 'message recipient'}>
							<p>{`${message.username}: ${message.text}`}</p>
						</li>
					))}
				</ul>

				<div>
					<form className="input-group" onSubmit={this.handleSubmit} >
						<input type="text" className="form-control" placeholder="Enter your message..."
							value={this.state.text}
							onChange={(event) => this.onTextChange(event.target.value)}
						/>
						<div className="input-group-append">
							<button
								className="btn submit-button"
								disabled={this.isDisabled()}>
								SEND
							</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default ChatWindow;
