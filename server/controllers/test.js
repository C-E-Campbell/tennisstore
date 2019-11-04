module.exports = {
	test: (req, res, next) => {
		res.status(200).send("Test OK");
	}
};
