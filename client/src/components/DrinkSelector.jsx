import React, { useState, useEffect } from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";
import Api from "../utils/api";

const DrinkSelector = ({ onSelected, variant, label }) => {
  const [options, setOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [drink, setDrink] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm.length > 3) {
      setLoading(true);
      Api.get("/drinks/search?q=" + searchTerm).then((res) => {
        setOptions(res.data);
        
        setLoading(false);
      });
    }
  }, [searchTerm]);
  const select = (event, values) => {
    
    // set drink
    setDrink(values)
    onSelected(values)
  }
  return (
    <>
      <Autocomplete
        loading={loading}
        renderInput={(params) => (
          <TextField {...params} label={label || 'Name of drink'} variant={variant} />
        )}
        
        onChange={select}
        getOptionLabel={(option) => option.name}
        options={options}
        onInputChange={(ev, val) => setSearchTerm(val)}
      />
    </>
  );
};

export default DrinkSelector;
