const bcrypt = require("bcryptjs");
module.exports = {
	register: async (req, res, next) => {
		const db = req.app.get("db");
		const { email, password } = req.body;
		const checkForUser = await db.check_if_customer_exists([email]);
		if (checkForUser[0]) {
			res.status(409).send("User already exists, please login");
		} else {
			const hash = bcrypt.hashSync(password, 10);
			const user = await db.create_customer(email, hash);
			req.session.user = {
				id: user[0].user_id,
				email: user[0].email
			};
			res.status(201).send(req.session.user);
		}
	},
	login: (req, res, next) => {
		res.send("login ok");
	},
	logout: (req, res, next) => {
		res.send("logout ok");
	}
};
