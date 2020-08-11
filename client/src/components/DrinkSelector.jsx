import React, {useState, useEffect} from 'react';
import Autocomplete from '@material-ui/lab/autocomplete';
import TextField from "@material-ui/core/textfield";
import Api from "../utils/api"


const DrinkSelector = ({onSelected, variant}) => {
    const [options, setOptions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [drink, setDrink] = useState({});
      
    useEffect(()=>{
        if(searchTerm.length < 4){
            Api.get('/drink/search?q='+searchTerm).then(res => {})
        }
        
    },[searchTerm])
    return (
        <>
        <Autocomplete 
        renderInput={(params) => <TextField {...params} label="Drink selector" variant={variant} />}
        getOptionSelected={setDrink} 
        options={options} 
        onInputChange={(ev,val) => setSearchTerm(val)}/>
        </>
    );
};

export default DrinkSelector;