import React, { Component } from "react";
import { connect } from "react-redux";
import "./Register.scss";
import { Link } from "react-router-dom";
import axios from "axios";
class Register extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = async e => {
		e.preventDefault();
		const registerUser = await axios.post("/api/register", {
			email: this.state.email,
			password: this.state.password
		});

		this.props.this.props.history.push("/");
		console.log(registerUser.data);
	};

	componentWillUnmount() {
		this.setState({ email: "", password: "" });
	}

	render() {
		return (
			<section className='register'>
				<header>
					<Link to='/'>Home</Link>
				</header>
				<div className='register-form'>
					<h2>Register your account</h2>
					<form
						onSubmit={e => {
							this.handleSubmit(e);
						}}
						action='submit'
					>
						<label>Email</label>
						<input
							value={this.state.email}
							onChange={e => {
								this.setState({ email: e.target.value });
							}}
							type='email'
						/>
						<label>Password</label>
						<input
							value={this.state.password}
							onChange={e => {
								this.setState({ password: e.target.value });
							}}
							type='password'
						/>
						<button>Register</button>
					</form>
				</div>
			</section>
		);
	}
}
const mapStateToProps = state => {
	return {
		state: state
	};
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Register);
