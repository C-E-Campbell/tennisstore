import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Profile extends Component {
	state = {
		currentPass: ""
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
						<button>Delete Account</button>
						<h2>Current Email: {this.props.user.currentUser.email}</h2>
						<input placeholder='Enter New Email' />
						<button>Update email</button>
						<input
							onChange={e => {
								this.setState({ currentPass: e.target.value });
							}}
							placeholder='Enter Current Password'
						/>
						<input placeholder='Enter New Password' />
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
