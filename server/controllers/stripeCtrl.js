const stripe = require("stripe")("sk_test_V6asri72BsmkEmXPaPa31vXa00ug3exYPX");
module.exports = {
	sendPayment: async (req, res) => {
		try {
			const { amount, currency, description, source } = req.body;
			let { status } = await stripe.charges.create({
				amount,
				currency,
				description,
				source
			});

			res.json({ status });
		} catch (err) {
			console.log(err);
			res.status(501).end();
		}
	}
};
