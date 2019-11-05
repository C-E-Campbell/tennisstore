import React, { Component } from "react";
import "./Login.scss";
import { login } from "../../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = async e => {
		e.preventDefault();
		const registerUser = await axios.post("/api/login", {
			email: this.state.email,
			password: this.state.password
		});
		this.props.login(registerUser.data);
		this.props.history.push("/");
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
					<h2>Login in to your account</h2>
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
						<button>Login</button>
					</form>
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return state;
};

const mapDispatchToProps = { login };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
