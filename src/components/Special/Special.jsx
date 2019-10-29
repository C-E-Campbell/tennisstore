import React from "react";
import style from "./Special.module.scss";
import menSport from "../../assets/menNoBg-min.png";
import womenSport from "../../assets/womenNoBg-min.png";
export default function Special() {
	return (
		<section className={style.Special}>
			<h2>SHOP</h2>
			<div className={style.clothingBox}>
				<div className={style.clothing}>
					<h3>Womens</h3>
				</div>
				<div className={style.clothing}>
					<h3>Mens</h3>
				</div>
				<div className={style.clothing}>
					<h3>Kids</h3>
				</div>
			</div>
			<div className={style.sportsWear}>
				<div className={style.quote}>
					<h2>I fear no one, but respect everyone.</h2>
					<h2>- Roger Federer</h2>
				</div>

				<div className={style.menSports}>
					<img
						data-aos='fade-right'
						data-aos-duration='800'
						data-aos-once='false'
						data-aos-delay='200'
						src={menSport}
						alt='mens sportswear'
					/>
				</div>
				<div className={style.womenSports}>
					<img
						data-aos='fade-up'
						data-aos-duration='700'
						data-aos-once='false'
						data-aos-delay='400'
						src={womenSport}
						alt='womens sportswear'
					/>
				</div>
			</div>
		</section>
	);
}
