const bcrypt = require("bcryptjs");
module.exports = {
	updateEmail: async (req, res) => {
		const db = req.app.get("db");
		const { newEmail, user_id } = req.body;
		const updated = await db.update_email([newEmail, user_id]);
		res.status(200).send(updated);
	},
	updatePass: async (req, res) => {
		const db = req.app.get("db");
		const { currentPass, newPass, user } = req.body;
		let checkUser = await db.check_if_customer_exists([user]);

		let checkPass = bcrypt.compareSync(currentPass, checkUser[0].password);
		if (checkPass) {
			const hash = bcrypt.hashSync(newPass, 10);
			db.update_pass([hash, user]);
			res.status(200).send("updated");
		}
	}
};
