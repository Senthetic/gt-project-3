import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const AddDrink = () => {
    const classes = useStyles();

  
    const handleChange = (event) => {

      console.log("");
    };
  
    return (
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
            </FormControl>
    );

    };
    export default AddDrink;