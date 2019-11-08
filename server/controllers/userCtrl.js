module.exports = {
	updateEmail: async (req, res) => {
		const db = req.app.get("db");
		const { newEmail, user_id } = req.body;
		const updated = await db.update_email([newEmail, user_id]);
		res.status(200).send(updated);
	}
};
