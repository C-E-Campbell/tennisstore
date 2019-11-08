import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
class Profile extends Component {
	state = {
		currentPass: "",
		newPass: "",
		newEmail: ""
	};

	updateEmail = async (newEmail, user_id) => {
		const result = await axios.put("/api/updateEmail", {
			newEmail,
			user_id
		});
		console.log(result);
	};

	render() {
		return (
			<div>
				{!this.props.user.currentUser ? (
					<div>
						<div>You must login in to view your account</div>
						<Link to='/'>GO TO HOME</Link>
					</div>
				) : (
					<div>
						<h2>Current Email: {this.props.user.currentUser.email}</h2>
						<form
							onSubmit={e => {
								e.preventDefault();
								this.updateEmail(
									this.state.newEmail,
									this.props.user.currentUser.id
								);
							}}
						>
							<input
								value={this.state.newEmail}
								type='email'
								onChange={e => {
									this.setState({ newEmail: e.target.value });
								}}
								placeholder='Enter New Email'
							/>
							<button>Update email</button>
						</form>

						<input
							value={this.state.currentPass}
							type='password'
							onChange={e => {
								this.setState({ currentPass: e.target.value });
							}}
							placeholder='Enter Current Password'
						/>
						<input
							value={this.state.newPass}
							onChange={e => {
								this.setState({ newPass: e.target.value });
							}}
							type='password'
							placeholder='Enter New Password'
						/>
						<button>Update Password</button>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state;
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Profile);
