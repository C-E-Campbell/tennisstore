import React, { Component } from "react";
import styles from "./Cart.module.scss";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { connect } from "react-redux";
class Cart extends Component {
	constructor() {
		super();
		this.state = {
			cart: null
		};
	}
	async componentDidMount() {}

	render() {
		const mappedCart = this.props.items.cart.map((cartItem, i) => {
			const filteredItems = this.props.items.inventory.filter(item => {
				return item.item_id === cartItem;
			});
			const cartStuff = filteredItems.map(cartProps => {
				return <CheckoutItem key={cartProps.item_id} {...cartProps} />;
			});
			return cartStuff;
		});

		return (
			<div>
				<LoginHeader />
				<Header />
				<div className={styles.cart}>
					<h2>Your Cart:</h2>
					<div className={styles.checkoutBox}>
						<div className={styles.itemBox}>{mappedCart}</div>
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
