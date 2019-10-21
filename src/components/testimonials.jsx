import React from 'react';
import Testimonial from './testimonial'
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import './testimonials.css';

const FADE_DUR = 1;
const DURATION = 6;

export default class testimonials extends React.Component {

	state = {
		testimonials: [
			{
				id: 0,
				imgURL : "/images/img1.webp",
				review : "Very colorful and lightweight. Just what I was expecting :)",
				date : "Apr 29th 2019",
				rating : 5,
			},
			{
				id: 1,
				imgURL : "/images/img2.webp",
				review : "Wow! This is much better than I expected. The coolest product ever made.",
				date : "Feb 10th 2019",
				rating : 5,
			},
		],

		currentTestimonialIndex: 0,
		visibleTestimonials: [0],
		current: 0
	};

	constructor(props) {
		super(props);
		this.showNextTestimonial = this.showNextTestimonial.bind(this);
		this.tick = this.tick.bind(this);
	}

	componentDidMount() {
		this.interval = setInterval(this.tick, (DURATION - FADE_DUR) * 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	tick() {
		this.setState({current: this.state.current + 1});
	}

	render() {
		let testimonialIndex = this.state.current % this.state.testimonials.length;
		let testimonialData = this.state.testimonials[testimonialIndex];
		let testimonial = (<CSSTransition in={true} timeout={FADE_DUR * 1000} classNames="fade" key={testimonialData.id}>
									<Testimonial key={testimonialData.id} 
												 data={testimonialData}
												 duration={DURATION}
												 completion={function() {
												 }} />
							</CSSTransition>);

		return (
			<div id='testimonials'>
				<TransitionGroup>
					{testimonial}
				</TransitionGroup>
			</div>
		);
	}
}
