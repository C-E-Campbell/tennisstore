import React, { Component } from "react";
import "./Stats.scss";
import { Link } from "react-router-dom";
export default class Stats extends Component {
	render() {
		return (
			<div className='stats-page'>
				<header className='stats-header'>
					<Link to='/'>Home</Link>
				</header>
				<div className='stats-container'>
					<div className='stat-links'>
						<h3>Stats and Matches</h3>
						<h4>Top 20 Womens</h4>
						<h4>Top 20 Mens</h4>
						<h4>Doubles Rankings</h4>
						<h4>Doubles Race Rankings</h4>
						<h4>Tournament Schedule</h4>
					</div>
					<div className='stat-data'>
						<div className='data-container'>
							<h3>Stats Here</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
								iste, quos numquam maiores molestias ea illo, quibusdam sunt
								totam cupiditate inventore minus corporis ex minima.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
