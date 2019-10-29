import React, { Component } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

export default class Login extends Component {
	render() {
		return (
			<section className='register'>
				<header>
					<Link to='/'>Home</Link>
				</header>
				<div className='register-form'>
					<h2>Login in to your account</h2>
					<form action='submit'>
						<label>Email</label>
						<input type='email' />
						<label>Password</label>
						<input type='password' />
						<button>Login</button>
					</form>
				</div>
			</section>
		);
	}
}
