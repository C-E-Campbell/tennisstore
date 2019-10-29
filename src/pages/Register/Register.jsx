import React, { Component } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
export default class Register extends Component {
	render() {
		return (
			<section className='register'>
				<header>
					<Link to='/'>Home</Link>
				</header>
				<div className='register-form'>
					<h2>Register your account</h2>
					<form action='submit'>
						<label>First Name</label>
						<input type='text' />
						<label>Last Name</label>
						<input type='text' />
						<label>Email</label>
						<input type='email' />
						<label>Password</label>
						<input type='password' />
						<button>Register</button>
					</form>
				</div>
			</section>
		);
	}
}
