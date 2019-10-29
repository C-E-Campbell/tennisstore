import React, { Component } from "react";
import "./WomensShop.scss";
import Header from "../../components/Header/Header";
export default class WomensShop extends Component {
	render() {
		return (
			<section>
				<Header />
				<div className='shop-hero'></div>
				<div>
					<div>Clothing</div>
					<div>Shoes</div>
					<div>Accessories</div>
				</div>
			</section>
		);
	}
}
