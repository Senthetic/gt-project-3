import React, { useEffect } from "react";
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
import Container from "@material-ui/core/Container"

import DrinkSelector from "../../components/DrinkSelector";
import {Link} from 'react-router-dom';
import Drawer from "../../components/Drawer";
import Footer from "../../components/Footer";
import SubmitButton from "../../components/SubmitButton";

import {useHistory} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    marginRight:25,
    marginLeft:25,
    marginTop:5,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:'#D9D9D9',
    borderRadius:10,
    borderWidth: "5px",
    borderColor: "black"
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
  const history = useHistory();
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
  useEffect(()=>{
    console.log(localStorage.token)
    if(!localStorage.token || localStorage.token === null){
      console.log('inside')
      history.push('/login')
    }
  },[])
  
  

  return (
    <>
    <Container>
      <h1 style={{ marginLeft: "25px"}}>Thirsty?</h1>
      <Link to="/newPlan">
        <Button className={classes.button}>Make New Plan</Button>
      </Link>
      <Link to="/listPlans">
        <Button className={classes.button}>View User's Plans</Button>
      </Link>
    </Container>
    {/* <h1>JIMMY & BRIAN APPROVE MY PULL REQUEST TO GET THIS COOL STUFF</h1>
    <DrinkSelector variant="outlined"/>
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
       <SubmitButton></SubmitButton>
      </form>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Footer></Footer> */}
    </>
  );
};

export default Home;
