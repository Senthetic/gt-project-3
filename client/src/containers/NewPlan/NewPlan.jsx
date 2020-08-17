import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Api from "../../utils/api";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import Drawer from "../../components/Drawer";
import Footer from "../../components/Footer";
import SubmitButton from "../../components/SubmitButton";
import Disclaimer from "../../components/Disclaimer";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      flexGrow: 1,
    },
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
  test: {
    margin: "20px"
  },
}));



const NewPlan = () => {
  const history = useHistory();
  const classes = useStyles();
  const [planName, setPlanName] = React.useState("");
  const [abv] = React.useState("");
  // const [bac, setBac] = React.useState('');
  // const [ounces, setOunces] = React.useState('');
  // const [weight, setWeight] = React.useState('');
  // const [hours, setHours] = React.useState('');

  const createPlan = (ev) => {
    ev.preventDefault();
    Api.post('/plans', { name: planName })
      .then(plan => history.push('/editPlan/' + plan.data._id))
  }

  return (
    <div>
    <div className={`${classes.root} ${classes.test}`}>
      <Drawer></Drawer>
    </div>
    <h1 style={{marginLeft: "35px"}}>Add a new plan!</h1>
    <div className={`${classes.root} ${classes.test}`}>
      <Grid container spacing={3}>
        <form
          className={classes.root}
          autoComplete="off"
          onSubmit={createPlan}
        >
          <div className={`${classes.root} ${classes.test}`}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                required
                label="Plan Name"
                variant="outlined"
                onChange={(ev) => setPlanName(ev.target.value)}
              />
            </Grid>
          </div>
          <div className={`${classes.root} ${classes.test}`}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
              item
              xs={1}
            ></Grid>
          </div>
        </form>
      </Grid>
      <div className={`${classes.root} ${classes.test}`}>
        <Button style={{marginRight:25,
    marginLeft:0,
    marginTop:5,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:'#E8EDDF',
    borderRadius:10,
    borderWidth: "5px",
    borderColor: "black"}}>Submit</Button>
      </div>
      <div>
        <h1 style={{textAlign: "center"}}>Disclaimer:</h1>
      </div>
      <div>
        <Disclaimer></Disclaimer>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};


export default NewPlan;
