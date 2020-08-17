import React, { Component, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";


import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Api from "../../utils/api";
import { Link } from "react-router-dom";
import Drawer from "../../components/Drawer";
import Footer from "../../components/Footer";

let result = 0;
let abvResults = 0;
let resultMessage = "";

const useStyles = makeStyles((theme) => ({
  //brian use this on all pages
  test: {
    marginTop: "75px",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      flexGrow: 1,
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
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const EditPlan = (props) => {
  const [plan, setPlan] = React.useState({ drinks: [] });
  const [timeSlot, setTimeSlot] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  //const [openSnackbar, setOpenSnackbar] = React.useState(true);
  useEffect(() => {
    getPlan();

    console.log(props);
  }, []);
  const classes = useStyles();
  const [abv, setAbv] = React.useState(0);
  const [bac, setBac] = React.useState(0);
  // const [bac, setBac] = React.useState('');
  // const [ounces, setOunces] = React.useState('');
  // const [weight, setWeight] = React.useState('');
  // const [hours, setHours] = React.useState('');

  const handleBac = (event) => {
    //3 number result
    setBac(result.toFixed(3));
    console.log(bac);
  };
  //,handleAbv(drink.alcoholPercentage) need to do this somewhere
  const handleAbv = (event) => {
    abvResults = 0;
    console.log("Array of drinks: ", plan.drinks.length);

    for (let i = 0; i < plan.drinks.length; i++) {
      abvResults +=
        plan.drinks[i].alcoholPercentage * plan.drinks[i].size * 0.075;
      console.log(abvResults);
    }
    // drinkAbv = percentage;
    // console.log("percentage: ", percentage);
    // setAbv(percentage);
  };

  const getPlan = () => {
    Api.get("/plans/" + props.match.params.planId).then((data) => {
      setPlan(data.data);
    });
  };
  const deleteDrink = (drinkId) => {
    Api.delete(`/plans/${plan._id}/drink/${drinkId}`).then(getPlan);
    handleAbv();
  };

  const handleTime = (event) => {
    console.log(event.target.value);

    setTimeSlot(event.target.value);
  };
  const handleWeight = (event) => {
    console.log(event.target.value);

    setWeight(event.target.value);
  };


  const calculateBAC = () => {
    handleAbv();
    //add all fluids

    //add all % then divide by # of drinks
  
    //r = .55 female .68 male
    //Every time a drink is added, multiply ounces and the bac *.075
    //GAC = total alcohol consumed in grams (total vol of all drinks)^^^ *
    // result = (GAC/(Body Weight grams x r)) * 100
    result = abvResults / weight - timeSlot * 0.015;
    switch (true) {
      case (result<.02):
            resultMessage = ("You're sober... no alcohol in your system");
            break;
        case (result <= .03):
            resultMessage =("You feel mildly relaxed and maybe a little lightheaded. Your inhibitions are slightly loosened, and whatever mood you were in before you started drinking may be mildly intensified.");
            break;
        case (result <= .06):
            resultMessage = ("You feel warm and relaxed. If you're the shy type when you're sober, you lose your feelings of shyness. Your behavior may become exaggerated, making you talk louder or faster or act bolder than usual. Emotions are intensified, so your good moods are better and your bad moods are worse. You may also feel a mild sense of euphoria.");
            break;
        case (result <= .09):
            resultMessage = ("You believe you're functioning better than you actually are. At this level, you may start to slur your speech. Your sense of balance is probably off, and your motor skills are starting to become impaired. Your ability to see and hear clearly is diminished. Your judgment is being affected, so it's difficult for you to decide whether or not to continue drinking. Your ability to evaluate sexual situations is impaired. Students may jokingly refer to this state of mind as beer goggles, but this BAC can have serious repercussions.");
            break;
        case (result <= .12):
            resultMessage = ("At this level, you feel euphoric, but you lack coordination and balance. Your motor skills are markedly impaired, as are your judgment and memory. You probably don't remember how many drinks you've had. Your emotions are exaggerated, and some people become loud, aggressive, or belligerent. If you're a guy, you may have trouble getting an erection when your BAC is this high.");
            break;
        case (result < .14):
            resultMessage = ("At this level, you feel euphoric, but you lack coordination and balance. Your motor skills are markedly impaired, as are your judgment and memory. You probably don't remember how many drinks you've had. Your emotions are exaggerated, and some people become loud, aggressive, or belligerent. If you're a guy, you may have trouble getting an erection when your BAC is this high.");
            break;
        case (result <= .17):
            resultMessage = ("Your euphoric feelings may give way to unpleasant feelings. You have difficulty talking, walking, or even standing.Your judgment and perception are severely impaired. You may become more aggressive, and there is an increased risk of accidentally injuring yourself or others. This is the point when you may experience a blackout.");
            break;
        case (result > .17):
            resultMessage = ("You will probably black out...");
            break;
        default:
            resultMessage = ("You're sober... no alcohol in your system");
            break;
    }
    handleBac();
  };

  return (
    <div>
      <Drawer></Drawer>

      <div className={`${classes.root} ${classes.test}`}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Edit Plan Name"
            variant="outlined"
            defaultValue="loading..."
            value={plan.name}
            onChange={(ev) => setPlan({ ...plan, name: ev.target.value })}
          />
        </form>

        {plan.drinks.map((drink) => (
          <Grid container spacing={3}>
            <Grid item xs="3">
              <IconButton
                aria-label="delete"
                onClick={() => deleteDrink(drink._id)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
            <Grid item xs="9">
              <Paper className={classes.paper}>
                {drink.name} ({drink.alcoholPercentage}%)
              </Paper>
            </Grid>
          </Grid>
        ))}

        <Link to={"/addDrink/" + plan._id}>
          <Fab color="grey" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </div>
      <Grid item xs={12}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            required
            id="standard-number"
            label="Weight"
            type="number"
            onChange={handleWeight}
            value={weight}
            helperText="lbs"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Grid>
      <Grid item xs={12}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            required
            id="standard-number"
            label="Time frame"
            type="number"
            onChange={handleTime}
            value={timeSlot}
            helperText="hours"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Grid>
      <div>
        <Button onClick={calculateBAC}>Calculate</Button>
      </div>
      <div>
        <h2>{bac}</h2>
      </div>
      <div>
        <h3>{resultMessage}</h3>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EditPlan;
