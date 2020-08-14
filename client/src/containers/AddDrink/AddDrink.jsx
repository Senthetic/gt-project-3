import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DrinkSelector from "../../components/DrinkSelector";
import {useHistory} from 'react-router-dom';
import Api from "../../utils/api";
import Drawer from "../../components/Drawer";
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

const AddDrink = ({match}) => {
  const history = useHistory();
  const classes = useStyles();
  const [drink, setDrink] = React.useState({
    category:'',
    abv:'0',
    name:'',
    size:12
  })

  


  const handleDrink = (event) => {

    setDrink({...drink, name:event.name, alcoholPercentage: event.abv})
   
  };
  const addDrink = () => {
    Api.put('/plans/'+ match.params.planId, drink)
    .then(()=>{
      history.goBack()
    })
  }

  return (
    <Router>
    <Drawer></Drawer>
    <div>
      <h1>Blackout Preventer</h1>
<<<<<<< HEAD
      </div>
      <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={""}
          onChange={handleChange}
        >
          <MenuItem value={5}>Beer</MenuItem>
          <MenuItem value={12}>Wine</MenuItem>
          <MenuItem value={40}>Liquor</MenuItem>
        </Select>
        <TextField
          required
          id="outlined-basic"
          label="Name of drink"
          type="string"
          helperText="ex: Bud Light"
        />
        <TextField
=======
  
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Type</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={drink.category}
        onChange={ev => setDrink({...drink,category:ev.target.value})}
      >
        <MenuItem value={5}>Beer</MenuItem>
        <MenuItem value={12}>Wine</MenuItem>
        <MenuItem value={40}>Liquor</MenuItem>
      </Select>
      <DrinkSelector onSelected={handleDrink} variant="standard"/>
      
      <TextField
>>>>>>> 90ace62337ecd33a4a1d0eae81309bd62cab0efb
          required
          id="standard-number"
          label="Volume"
          type="number"
          helperText="oz"
<<<<<<< HEAD
=======
          value={drink.size}
          onChange={ev => setDrink({...drink,size:ev.target.value})}
          //question multiple onChanges? in order to keep updating state onChange={handleChange}
>>>>>>> 90ace62337ecd33a4a1d0eae81309bd62cab0efb
          InputLabelProps={{
            shrink: true,
          }}
        />
<<<<<<< HEAD
      </FormControl>
    </div>
    <div>
      <Link to="/">Home</Link>
=======
        <Button onClick={addDrink} className={classes.button} variant="contained" color="primary">
          Submit
        </Button>
    </FormControl>
>>>>>>> 90ace62337ecd33a4a1d0eae81309bd62cab0efb
    </div>
    </Router>
  );

};
export default AddDrink;