import React from "react";
import style from "./ScrollOver.module.scss";
export default function ScrollOver() {
	return (
		<div className={style.scrollOver}>
			<h2
				className={style.heading}
				data-aos-delay='200'
				data-aos='fade-up'
				data-aos-once='false'
			>
				IT'S GAME TIME
			</h2>
		</div>
	);
}
