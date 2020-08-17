import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Redirect, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch/NoMatch";
import NewPlan from "./containers/NewPlan/NewPlan";
import ViewPlans from "./containers/ViewPlans/ViewPlans";
import ListPlans from "./containers/ListPlans/ListPlans"
import EditPlan from "./containers/EditPlan/EditPlan";
import AddDrink from "./containers/AddDrink/AddDrink";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";
import "./App.css";

function App() {
 
  const loggedIn = () => {
    const res = localStorage.getItem('token') !== null
    console.log(res? "you are logged in" : "you are NOT logged in")
    return res;
  }
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
      <Drawer/>
      <Switch>
        <Route exact path="/" >
          {!loggedIn() ? <Redirect to="/login"/> : <Home />}
        </Route>
        <Route exact path="/NewPlan"  >
          {!loggedIn() ? <Redirect to="/login"/> : <NewPlan />}
        </Route>
        <Route exact path="/AddDrink/:planId" component={AddDrink} />
        <Route exact path="/ListPlans" component={ListPlans} />
        <Route exact path="/EditPlan/:planId" component={EditPlan} />
        <Route exact path="/Login">
          {loggedIn() ? <Redirect to="/"/> : <Login />}
        </Route>
        <Route exact path="/Signup" component={Signup} />
        
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;