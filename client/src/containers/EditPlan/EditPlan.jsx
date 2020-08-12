import React, { Component } from "react";
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

import DrinkSelector from "../../components/DrinkSelector";

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

const EditPlan = () => {
  const classes = useStyles();
  const [abv, setAbv] = React.useState("");
  // const [bac, setBac] = React.useState('');
  // const [ounces, setOunces] = React.useState('');
  // const [weight, setWeight] = React.useState('');
  // const [hours, setHours] = React.useState('');

  const handleChange = (event) => {
    console.log(abv);
  };

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Edit Plan Name"
                variant="outlined"
              />
            </form>
          </Grid>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            item
            xs={1}
          >
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Grid>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            item
            xs={1}
          >
            
            <Fab color="secondary" aria-label="add">
              <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="add">
              <AddIcon />
            </Fab>
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
          <Button className={classes.button} variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </>
  );
};

export default EditPlan;
