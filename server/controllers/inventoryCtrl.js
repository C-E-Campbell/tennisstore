module.exports = {
	getAllInventory: async (req, res, next) => {
		const db = req.app.get("db");
		const inventory = await db.get_all_inventory();
		res.send(inventory);
	}
};
