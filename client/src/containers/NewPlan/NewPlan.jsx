import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Api from "../../utils/api";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import DrinkSelector from "../../components/DrinkSelector";
import Drawer from "../../components/Drawer";
import Footer from "../../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      flexGrow: 1,
    },
  },
  button: {
    fontSize: 30,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const NewPlan = () => {
  const history = useHistory();
  const classes = useStyles();
  const [planName, setPlanName] = React.useState("");
  const [abv, setAbv] = React.useState("");
  // const [bac, setBac] = React.useState('');
  // const [ounces, setOunces] = React.useState('');
  // const [weight, setWeight] = React.useState('');
  // const [hours, setHours] = React.useState('');

  const handleChange = (event) => {
    console.log(abv);
  };
  const createPlan = (ev)=>{
    ev.preventDefault();
    Api.post('/plans',{name:planName})
    .then(plan => history.push('/editPlan/'+plan.data._id))
  }

  return (
    <>
    <Drawer></Drawer>
      <div className={classes.root}>
        <Grid container spacing={3}>
        <form className={classes.root} autoComplete="off" onSubmit={createPlan}>
          <Grid item xs={12}>
            
              <TextField
                id="outlined-basic"
                required
                label="Plan Name"
                variant="outlined"
                onChange={(ev) => setPlanName(ev.target.value)}
              />
            
          </Grid>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            item
            xs={1}
          >
            
            <Fab type="submit" color="primary" aria-label="add" >
              <AddIcon />
            </Fab>
            
          </Grid>
          </form>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            item
            xs={1}
          >
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Grid>

          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            item
            xs={6}
          >
            <Paper className={classes.paper}>Bud Light</Paper>
            <Paper className={classes.paper}>Scofflaw Basement</Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              required
              id="standard-number"
              label="Time frame"
              type="number"
              helperText="hours"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Grid>
        <Button
          className={classes.button}
          variant="contained"
          onClick={createPlan}
          color="primary"
        >
          Submit
        </Button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default NewPlan;
