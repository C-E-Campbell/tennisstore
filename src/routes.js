import { Switch, Route } from "react-router-dom";

export default routes = {
	<Switch>
		<Route component={Home} exact path={"/"} />
		<Route component={Register} exact path={"/register"} />
		<Route component={Login} exact path={"/signin"} />
		<Route component={Stats} exact path={"/stats"} />
		<Route component={WomensShop} exact path={"/womens"} />
		<Route component={WomensShop} exact path={"/womensshoes"} />
		<Route component={WomensClothing} exact path={"/womensclothing"} />
	</Switch>
}
