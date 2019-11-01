import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import cartIcon from "../../assets/cart-min.png";

import React, { Component } from "react";

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			hoverMen: false,
			hoverWomen: false,
			hoverKids: false,
			hoverGear: false
		};
	}

	render() {
		return (
			<div className='header-div'>
				<nav className={styles.MainNav}>
					<div className={styles.LogoBox}>Personal Project</div>
					<div className={styles.LinkBox}>
						<Link
							onMouseEnter={() => {
								this.setState({
									hoverMen: true,
									hoverWomen: false,
									hoverKids: false,
									hoverGear: false
								});
							}}
							to='/mens'
						>
							Men
						</Link>
						<Link
							onMouseEnter={() => {
								this.setState({
									hoverMen: false,
									hoverWomen: true,
									hoverKids: false,
									hoverGear: false
								});
							}}
							to='/womens'
						>
							Women
						</Link>
						<Link
							onMouseEnter={() => {
								this.setState({
									hoverMen: false,
									hoverWomen: false,
									hoverKids: true,
									hoverGear: false
								});
							}}
							to='/kids'
						>
							Kids
						</Link>
						<Link
							onMouseEnter={() => {
								this.setState({
									hoverMen: false,
									hoverWomen: false,
									hoverKids: false,
									hoverGear: true
								});
							}}
							to='/gear'
						>
							Gear
						</Link>
					</div>
					<div className={styles.CartBox}>
						<img src={cartIcon} alt='cart' />
					</div>
				</nav>
				{this.state.hoverMen ? (
					<div
						onMouseLeave={() => {
							this.setState({ hoverMen: false });
						}}
						className={styles.getfked}
					>
						<h1>Men</h1>
					</div>
				) : null}
				{this.state.hoverWomen ? (
					<div
						onMouseLeave={() => {
							this.setState({ hoverWomen: false });
						}}
						className={styles.getfked}
					>
						<h1>Women</h1>
					</div>
				) : null}
				{this.state.hoverKids ? (
					<div
						onMouseLeave={() => {
							this.setState({ hoverKids: false });
						}}
						className={styles.getfked}
					>
						<h1>Kids</h1>
					</div>
				) : null}
				{this.state.hoverGear ? (
					<div
						onMouseLeave={() => {
							this.setState({ hoverGear: false });
						}}
						className={styles.getfked}
					>
						<h1>Gear</h1>
					</div>
				) : null}
			</div>
		);
	}
}
