module.exports = {
	getAllInventory: async (req, res, next) => {
		const db = req.app.get("db");
		const inventory = await db.get_all_inventory();
		res.status(200).send(inventory);
	},
	addToCart: async (req, res, next) => {
		const db = req.app.get("db");
		const { user, item } = req.body;
		db.add_to_cart([user, item]);
		res.sendStatus(200);
	},
	getCart: async (req, res, next) => {
		const db = req.app.get("db");
		const { id } = req.params;
		const cartItems = await db.get_cart([id]);
		res.status(200).send(cartItems);
	}
};
