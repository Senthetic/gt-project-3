import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch/NoMatch";
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => {

})

function App() {
  const classes = useStyles();
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
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;