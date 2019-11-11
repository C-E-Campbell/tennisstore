const stripe = require("stripe")("sk_test_V6asri72BsmkEmXPaPa31vXa00ug3exYPX");
const nodemailer = require("nodemailer");
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
	},
	sendDiscount: async (req, res) => {
		const { sendTo } = req.body;

		// let transporter = nodemailer.createTransport({
		//     host: 'smtp-relay.gmail.com',
		//     port: 465,
		//     secure: true, // true for 465, false for other ports
		//     auth: {
		//         user: 'codelyfeassets@gmail.com', // generated ethereal user
		//         pass: 'rufus0606' // generated ethereal password
		//     }
		// });
		let transporter = nodemailer.createTransport({
			service: "Gmail",
			auth: {
				user: "codelyfeassets@gmail.com", // generated ethereal user
				pass: "rufus0606" // generated ethereal password
			}
		});

		await transporter.sendMail({
			from: "codelyfeassets@gmail.com", // sender address
			to: sendTo, // list of receivers
			subject: "Your DevTennis Discount", // Subject line
			text: "Hello world?", // plain text body
			html: "<h2>Use Discount Code: tennisaintfreebiiiiitch</h2>" // html body
		});
	}
};
