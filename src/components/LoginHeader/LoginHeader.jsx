import React from "react";
import style from "./LoginHeader.module.scss";
import { Link } from "react-router-dom";
import babolat from "../../assets/babolat-logo-min.png";
import wilson from "../../assets/wilson-logo-min.png";
import adidas from "../../assets/Adidas-Logo-min.png";
import prince from "../../assets/prince-logo-min.png";
export default function LoginHeader() {
	return (
		<nav className={style.LoginNav}>
			<div className={style.LogoBox}>
				<img src={babolat} alt='babolat' />
				<img src={wilson} alt='wilson' />
				<img src={adidas} alt='adidas' />
				<img src={prince} alt='prince' />
			</div>
			<div className={style.LoginBox}>
				<Link to='/stats'>STATS & MATCHES</Link>
				<Link to='/signin'>Sign In</Link>
				<Link to='/register'>Register</Link>
			</div>
		</nav>
	);
}
