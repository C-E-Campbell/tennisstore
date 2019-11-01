import React from "react";
import "./StatItem.scss";
export default function StatItem(props) {
	return (
		<section className='stat-item'>
			<div className='player-title'>
				<div>{props.rank}.</div>
				<div>{props.name}</div>
			</div>
			<div className='player-info'>
				<div>Points: {props.points}</div>
				<div>Tournmanets Played: {props.played}</div>
				<div>Nationality: {props.nationality}</div>
			</div>
		</section>
	);
}
