import React, { Component } from "react";
import styles from "./Cart.module.scss";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";
class Cart extends Component {
	render() {
		return (
			<div>
				<LoginHeader />
				<Header />
				<div className={styles.cart}>
					<h2>Checkout</h2>
					<div className={styles.checkoutBox}>
						<div className={styles.itemBox}></div>
						<div className={styles.subtotalBox}>
							<div>
								<h3>SUBTOTAL</h3>
								$34
							</div>
							<div>
								<h3>SALES TAX</h3>
								$34
							</div>

							<div>
								<h3>TOTAL</h3>
								$34
							</div>
							<div>
								<button>PROCEED TO CHECKOUT</button>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state;
};

export default connect(
	mapStateToProps,
	null
)(Cart);
