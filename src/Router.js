import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";

export const RootRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
