require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { PORT, SESSION_STRING, CONNECTION_STRING } = process.env;
const app = express();

massive(CONNECTION_STRING).then(db => {
	app.set("db", db);

	console.log("db connected");
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));
