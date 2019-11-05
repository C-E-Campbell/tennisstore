import React, { Component } from "react";
import Header from "../../components/Header/Header";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Special from "../../components/Special/Special";
import Email from "../../components/Email/Email";
import ScrollOver from "../../components/ScrollOver/ScrollOver";
import Footer from "../../components/Footer/Footer";

export default class Home extends Component {
	render() {
		return (
			<div>
				<LoginHeader />
				<Header />
				<Hero />
				<About />
				<Special />
				<Email />
				<ScrollOver />
				<Footer />
			</div>
		);
	}
}
