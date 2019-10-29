import React from "react";
import style from "./About.module.scss";
export default function About() {
	return (
		<div className={style.About}>
			<div className={style.aboutText}>
				<div>
					<h4>Lorem ipsum dolor sit.</h4>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
						quod deserunt explicabo officiis laboriosam tempore.
					</p>
					<button>View Gear</button>
				</div>
			</div>
		</div>
	);
}
