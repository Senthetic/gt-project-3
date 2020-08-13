import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch/NoMatch";
import NewPlan from "./containers/NewPlan/NewPlan";
import ViewPlans from "./containers/ViewPlans/ViewPlans";
import ListPlans from "./containers/ListPlans/ListPlans"
import EditPlan from "./containers/EditPlan/EditPlan";
import AddDrink from "./containers/AddDrink/AddDrink";


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
        <Route exact path="/AddDrink/:planId" component={AddDrink} />
        <Route exact path="/ListPlans" component={ListPlans} />
        <Route exact path="/EditPlan/:planId" component={EditPlan} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
};

export default App;