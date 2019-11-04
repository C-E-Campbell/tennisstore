module.exports = {
	getAllInventory: async (req, res, next) => {
		const db = req.app.get("db");
		const items = await db.get_all_inventory;
		res.send(items);
	}
};
