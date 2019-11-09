require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { PORT, SESSION_STRING, CONNECTION_STRING } = process.env;
const app = express();

//----- Controllers
const test = require("./controllers/testCtrl");
const inventory = require("./controllers/inventoryCtrl");
const auth = require("./controllers/authCtrl");
const user = require("./controllers/userCtrl");

massive(CONNECTION_STRING).then(db => {
	app.set("db", db);
	console.log("db connected");
});

app.use(express.json());
app.use(
	session({
		secret: SESSION_STRING,
		resave: true,
		saveUninitialized: false,
		cookie: {
			maxAge: 13452345235623623456326435636
		}
	})
);

//----- End Points
app.get("/api/test", test.test);
app.get("/api/inventory", inventory.getAllInventory);
app.get("/api/getcart/:id", inventory.getCart);

app.post("/api/register", auth.register);
app.post("/api/login", auth.login);
app.post("/api/addtocart", inventory.addToCart);

app.put("/api/updateEmail", user.updateEmail);
app.put("/api/updatePass", user.updatePass);

app.delete("/api/logout", auth.logout);
app.delete("/api/deletecartitem/:id/:user", inventory.deleteItem);

app.listen(PORT, () => console.log(`server running on ${PORT}`));
