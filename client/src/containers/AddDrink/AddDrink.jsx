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
      <h1>Blackout Preventer</h1>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={drink.category}
          onChange={(ev) => setDrink({ ...drink, category: ev.target.value })}
        >
          <MenuItem value={5}>Beer</MenuItem>
          <MenuItem value={12}>Wine</MenuItem>
          <MenuItem value={40}>Liquor</MenuItem>
        </Select>
        <DrinkSelector onSelected={handleDrink} variant="standard" />

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
        
        <Button onClick={() => addDrink()} variant="contained" color="primary">
          Submit
        </Button>
      </FormControl>
    </div>
  );
};
export default AddDrink;
