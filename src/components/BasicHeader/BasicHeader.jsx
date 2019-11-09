import React from "react";
import "./BasicHeader.scss";
import { Link } from "react-router-dom";
export default function BasicHeader() {
	return (
		<header>
			<Link to='/'>Home</Link>
		</header>
	);
}
