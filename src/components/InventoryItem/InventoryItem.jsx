import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import styles from "./InventoryItem.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
class InventoryItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			singleItem: {}
		};
	}

	componentDidMount() {
		const myItem = this.props.items.inventory.filter(item => {
			return item.item_id === Number(this.props.match.params.id);
		});
		this.setState({ singleItem: myItem[0] });
	}

	addToCart = () => {
		axios.post("/api/addtocart", {
			user: this.props.user.currentUser.id,
			item: this.props.match.params.id
		});
	};

	render() {
		return (
			<div>
				<Header />
				<div className={styles.storeItem}>
					<div className={styles.imgBox}>
						<img
							className={styles.imgItem}
							src={this.state.singleItem.image}
							alt=''
						/>
					</div>
					<div className={styles.descriptionBox}>
						<h3>${this.state.singleItem.price}</h3>
						<h3>{this.state.singleItem.name}</h3>
						<p>{this.state.singleItem.description}</p>
						<select name='' id=''>
							<option value='' defaultValue disabled>
								Chooe a size
							</option>
							<option value='Small'>Small</option>
							<option value='Medium'>Medium</option>
							<option value='Large'>Large</option>
							<option value='X-Large'>X-Large</option>
							<option value='XX-Large'>XX-Large</option>
						</select>
						<button
							onClick={() => {
								this.addToCart();
							}}
						>
							Add to Cart
						</button>
						<button>Add to Favorites</button>
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

const mapDispatchToProps = {};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InventoryItem);
