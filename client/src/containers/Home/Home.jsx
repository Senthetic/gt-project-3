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

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
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
}));

const Home = () => {
  const classes = useStyles();
  const [abv, setAbv] = React.useState("");
  // const [bac, setBac] = React.useState('');
  // const [ounces, setOunces] = React.useState('');
  // const [weight, setWeight] = React.useState('');
  // const [hours, setHours] = React.useState('');

  const handleChange = (event) => {
    //possibly where we would add the math to calculate BAC
    // var newBac = (ounces * percent * 0.075) / weight - hours * 0.015;
    // if (newBac < 0) {
    //   message =
    //     "You are at the only safe driving limit and are not legally intoxicated.";
    //   newBac = "-- neglible amount --";
    // } else {
    //   if (newBac == "NaN") message = "Please try again.";
    //   if (newBac > 0.08)
    //     message =
    //       "You would be considered legally intoxicated in all or most states and would be subject to criminal penalties.";
    //   if (newBac < 0.08) message = "Your driving ability is becoming impaired.";
    // }
    //set new calculated bac and have it update with state on the page
    // setBac(newBac);

    setAbv(event.target.value);
    console.log(abv);
  };

  return (
    <>
      <h1>JIMMY & BRIAN APPROVE MY PULL REQUEST TO GET THIS COOL STUFF</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="standard-number"
            label="Weight"
            type="number"
            helperText="pounds"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="standard-number"
            label="Height"
            type="number"
            helperText="inches"
            InputLabelProps={{
              shrink: true,
            }}
          />
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
        </div>
        <Button className={classes.button} variant="contained" color="primary">
          Submit
        </Button>
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-basic"
          label="Name of drink"
          type="string"
          helperText="ex: Bud Light"
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={abv}
            onChange={handleChange}
          >
            <MenuItem value={5}>Beer</MenuItem>
            <MenuItem value={12}>Wine</MenuItem>
            <MenuItem value={40}>Liquor</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          id="standard-number"
          label="Volume"
          type="number"
          helperText="oz"
          //question multiple onChanges? in order to keep updating state onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button className={classes.button} variant="contained" color="primary">
          Submit
        </Button>
      </form>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
    </>
  );
};

export default Home;
