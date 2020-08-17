import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import Drawer from "../../components/Drawer";
import Footer from "../../components/Footer";
import SubmitButton from "../../components/SubmitButton";

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

const ViewPlans = () => {
  const classes = useStyles();
  const [abv] = React.useState("");
  // const [bac, setBac] = React.useState('');
  // const [ounces, setOunces] = React.useState('');
  // const [weight, setWeight] = React.useState('');
  // const [hours, setHours] = React.useState('');


  return (
    <>
    <Drawer></Drawer>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <form className={classes.root} noValidate autoComplete="off">
              <h2>Your Plans</h2>
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
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
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
            <Paper className={classes.paper}>Close to Blackout</Paper>
            <Paper className={classes.paper}>
              Recipe for avoiding disaster
            </Paper>
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
        <SubmitButton></SubmitButton>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ViewPlans;
