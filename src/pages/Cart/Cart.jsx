import React, { Component } from "react";
import { connect } from "react-redux";
class Cart extends Component {
	render() {
		return <div>cart</div>;
	}
}

const mapStateToProps = state => {
	return state;
};
const mapDispatchToProps = {};

export default connect({
	mapStateToProps,
	mapDispatchToProps
})(Cart);
