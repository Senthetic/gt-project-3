import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch/NoMatch";
import NewPlan from "./containers/NewPlan/NewPlan";
import AddDrink from "./containers/AddDrink/AddDrink";
// import { makeStyles } from "@material-ui/core/styles"
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// export default function FormPropsTextFields() {
//   const classes = useStyles();


function App() {
  // const classes = useStyles();
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
        <Route exact path="/AddDrink" component={AddDrink} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
};

export default App;