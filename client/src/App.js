import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch/NoMatch";
import NewPlan from "./containers/NewPlan/NewPlan";
import ViewPlans from "./containers/ViewPlans/ViewPlans";
import EditPlan from "./containers/EditPlan/EditPlan";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/NewPlan" component={NewPlan} />
        <Route exact path="/ViewPlans" component={ViewPlans} />
        <Route exact path="/EditPlan" component={EditPlan} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;