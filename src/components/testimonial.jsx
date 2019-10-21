import React, { Component } from "react";
import './testimonial.css';

class Testimonial extends Component {

	constructor(props) {
		super(props);
		this.starRatingText = this.starRatingText.bind(this);
	}

	componentDidMount() {
		setTimeout(this.props.completion, this.props.duration * 1000);
	}

	render() {

		return (
			<div className="testimonial">
				<div className="image-container" style={this.imageStyles()}>
				</div>
				<div className="opaque-bg" style={this.opaqueBGStyles()}>
					<span className="review">{this.props.data.review}</span>
					<span className="stars">{this.starRatingText()}</span>
					<span className="date">{this.props.data.date}</span>
				</div>
			</div>
		);
	}

	imageStyles() {
		return {backgroundImage: 'url('+this.props.data.imgURL+')', 
				animation: 'image-zoom '+this.props.duration +'s ease-out 0s 1'};
	}

	opaqueBGStyles() {
		// Fade the review in/out
		let animationDuration = this.props.duration * 2/3;
		return {animation: 'fade-in-out '+animationDuration+'s ease-out 1s'};
	}

	starRatingText() {
		let stars = "";
		for (let i = 0; i < this.props.data.rating; i++) {
			stars += "⭐️";
		}
		return stars;
	}

	animationDidFinish() {
		console.log("done");
	}
}

export default Testimonial;