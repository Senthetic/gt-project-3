import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/autocomplete";
import TextField from "@material-ui/core/TextField";
import Api from "../utils/api";

const DrinkSelector = ({ onSelected, variant }) => {
  const [options, setOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [drink, setDrink] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm.length > 3) {
      setLoading(true);
      Api.get("/drinks/search?q=" + searchTerm).then((res) => {
        setOptions(res.data);
        console.log(options);
        setLoading(false);
      });
    }
  }, [searchTerm]);
  return (
    <>
      <Autocomplete
        loading={loading}
        renderInput={(params) => (
          <TextField {...params} label="Drink selector" variant={variant} />
        )}
        getOptionSelected={setDrink}
        getOptionLabel={(option) => option.name}
        options={options}
        onInputChange={(ev, val) => setSearchTerm(val)}
      />
    </>
  );
};

export default DrinkSelector;
