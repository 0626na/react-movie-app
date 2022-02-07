import { useEffect, useState } from "react/cjs/react.development";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail></Detail>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
