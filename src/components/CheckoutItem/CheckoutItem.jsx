import React from "react";
import styles from "./CheckoutItem.module.scss";
export default function CheckoutItem(props) {
	return (
		<div className={styles.cartItem}>
			<img className={styles.productImg} src={props.image} alt='cart product' />
			<div>{props.name}</div>
			<div>${props.price}</div>
		</div>
	);
}
