import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./component/starwars/StarShipDetails";
import StarwarsList from "./component/starwars/StarshipList";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/Details' component={Details} />
        <Route exact path='/' component={StarwarsList} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoute;
