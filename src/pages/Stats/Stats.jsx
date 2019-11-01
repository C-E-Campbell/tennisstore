import React, { Component } from "react";
import axios from "axios";
import "./Stats.scss";
import StatItem from "../../components/StatItem/StatItem";
import { Link } from "react-router-dom";
export default class Stats extends Component {
	constructor() {
		super();
		this.state = {
			topWomen: [],
			topMen: [],
			doublesRank: [],
			tourneySchedule: [],
			showWomen: false,
			showMen: false,
			showDoubles: false,
			showTourney: false
		};
	}

	async componentDidMount() {
		const Top20 = await axios.get(
			"https://cors-anywhere.herokuapp.com/http://api.sportradar.us/tennis-t2/en/players/race_rankings.json?api_key=29n49vy68mxscutdge8ykpax"
		);
		this.setState({
			topWomen: Top20.data.rankings[0].player_rankings.slice(0, 20),
			topMen: Top20.data.rankings[1].player_rankings.slice(0, 20),
			showWomen: true
		});
	}

	getTourney = async () => {
		const tourneyResults = await axios.get(
			"https://cors-anywhere.herokuapp.com/http://api.sportradar.us/tennis-t2/en/tournaments/sr:tournament:2555/schedule.json?api_key=29n49vy68mxscutdge8ykpax"
		);
		console.log(tourneyResults.data);
	};

	getDoubles = async () => {
		const doubleResults = await axios.get(
			"https://cors-anywhere.herokuapp.com/http://api.sportradar.us/tennis-t2/en/tournaments/sr:tournament:2555/schedule.json?api_key=29n49vy68mxscutdge8ykpax"
		);
		console.log(doubleResults.data);
	};

	render() {
		const mappedWomens = this.state.topWomen.map(player => {
			return (
				<StatItem
					key={player.player.rank}
					name={player.player.name}
					rank={player.rank}
					played={player.tournaments_played}
					points={player.points}
					nationality={player.player.nationality}
				/>
			);
		});
		const mappedMens = this.state.topMen.map(player => {
			return (
				<StatItem
					key={player.player.rank}
					name={player.player.name}
					rank={player.rank}
					played={player.tournaments_played}
					points={player.points}
					nationality={player.player.nationality}
				/>
			);
		});
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
						<h4
							onClick={() => {
								this.getDoubles();
							}}
						>
							Doubles Rankings
						</h4>
						<h4
							onClick={() => {
								this.getTourney();
							}}
						>
							Tournament Schedule
						</h4>
					</div>
					<div className='stat-data'>
						{this.state.showWomen ? mappedWomens : null}
					</div>
				</div>
			</div>
		);
	}
}
