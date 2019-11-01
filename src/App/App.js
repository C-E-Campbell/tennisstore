import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Stats from "../pages/Stats/Stats";
import WomensShop from "../pages/WomensShop/WomensShop";
import WomensClothing from "../pages/WomensClothing/WomensClothing";
function App() {
	return (
		<Switch>
			<Route component={Home} exact path={"/"} />
			<Route component={Register} path={"/register"} />
			<Route component={Login} path={"/signin"} />
			<Route component={Stats} path={"/stats"} />
			<Route component={WomensShop} path={"/womens"} />
			<Route component={WomensShop} path={"/womensshoes"} />
			<Route component={WomensClothing} path={"/womensclothing"} />
		</Switch>
	);
}

export default App;
