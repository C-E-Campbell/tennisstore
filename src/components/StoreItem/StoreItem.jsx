import React from "react";

export default function StoreItem(props) {
	return (
		<div className='store-item'>
			<i className='fas fa-heart'></i>
			<img className='store-item-img' src={props.image} alt='menswhitetee' />
			<div className='store-item-info'>
				<h2>{props.name}</h2>
				<h3>{props.price}</h3>
			</div>
		</div>
	);
}
