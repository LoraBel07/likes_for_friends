import { Component } from "react";
import heart1 from "./heart1.jpg";
import heart2 from "./heart2.jpg";

export class Heart extends Component {
	constructor() {
		super();

		this.state = {
			information: "LIKE US!",
			image: heart1
		}
	}


	updateInfo() {
		this.setState({information: "Thank you! We love you, too!", image: heart2})
	}

	render() {
		return(
			<div className="one">
				<h2>{this.state.information}</h2>
				<img onClick={() => this.updateInfo()} src={this.state.image} width="200px" alt="Like" />
				
			</div>
		)
	}
}