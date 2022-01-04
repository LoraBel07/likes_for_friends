import { Component } from "react";

export class Likes extends Component {
	constructor() {
		super();

		this.state = {
			likes: 0
		}
	}

	updateLikes() {
		this.setState({likes: this.state.likes + 1})

	}
	render() {
		return(
			<div>
				<h3>{this.state.likes} LIKES</h3>
				<button onClick={() => this.updateLikes()}>LIKE</button>
			</div>
		)
	}
}