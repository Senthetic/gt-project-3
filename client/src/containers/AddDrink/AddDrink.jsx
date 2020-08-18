import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DrinkSelector from "../../components/DrinkSelector";
import { useHistory } from "react-router-dom";
import Api from "../../utils/api";
import Drawer from "../../components/Drawer";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import SubmitButton from "../../components/SubmitButton";
import Disclaimer from "../../components/Disclaimer";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#284B63',
    borderRadius: 10,
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
  divStyle: {
    padding: "10px",
    marginleft: "10px",
  }
}));

const AddDrink = ({ match }) => {
  const history = useHistory();
  const classes = useStyles();
  const [drink, setDrink] = React.useState({
    category: "",
    abv: "0",
    name: "",
    size: 12,
  });

  const calculateDrink = (abv, vol) => {
    console.log(abv, vol);
  };

  const handleDrink = (event) => {
    setDrink({ ...drink, name: event.name, alcoholPercentage: event.abv });
  };
  const addDrink = () => {
    Api.put("/plans/" + match.params.planId, drink).then(() => {
      history.goBack();
    });
  };

  return (
    <div>
      <div className={classes.divStyle}>
        <h1>Add your drink for your plan!</h1>
      </div>
      <FormControl className={classes.formControl}>
        <div className={classes.divStyle}>
          <TextField
            id="standard-select-currency"
            select
            label="Type"
            value={drink.category}
            onChange={(ev) => setDrink({ ...drink, category: ev.target.value })}
            style={{width: "100%"}}
            helperText="Choose drink type"
          >
            <MenuItem value={5}>Beer</MenuItem>
            <MenuItem value={12}>Wine</MenuItem>
            <MenuItem value={40}>Liquor</MenuItem>
          </TextField>
          {/* <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={drink.category}
            onChange={(ev) => setDrink({ ...drink, category: ev.target.value })}
          >
            <MenuItem value={5}>Beer</MenuItem>
            <MenuItem value={12}>Wine</MenuItem>
            <MenuItem value={40}>Liquor</MenuItem>
          </Select> */}
        </div>
        <div className={classes.divStyle}>
          <DrinkSelector onSelected={handleDrink} variant="standard" />
        </div>
        <div className={classes.divStyle}>
          <TextField
            required
            id="standard-number"
            label="Volume"
            type="number"
            helperText="oz"
            value={drink.size}
            onChange={(ev) => setDrink({ ...drink, size: ev.target.value })}
            //question multiple onChanges? in order to keep updating state onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className={classes.divStyle}>
          <Button style={{marginRight:25,
    marginLeft:0,
    marginTop:5,
    paddingTop:25,
    paddingLeft:25,
    paddingRight:25,
    paddingBottom:25,
    backgroundColor:'#E8EDDF',
    borderRadius:10,
    borderWidth: "5px",
    borderColor: "black"}} onClick={() => addDrink()} variant="contained">
            Submit
        </Button>
        </div>
      </FormControl>
      <div style={{marginTop: "300px"}}>
        <h1 style={{textAlign: "center",
      display: "inherit"
      }}>Disclaimer:</h1>


        <Disclaimer></Disclaimer>
      </div>
    <Footer></Footer>
    </div>
  );
};
export default AddDrink;
