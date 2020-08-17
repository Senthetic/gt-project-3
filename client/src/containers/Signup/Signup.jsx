import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText'
import SubmitButton from "../../components/SubmitButton";

import Api from "../../utils/api"

const Signup = () => {
    const history = useHistory();
    const [user,setUser] = useState({});
    const doSignup = (ev) => {
        ev.preventDefault();
        Api.post('/auth/signup',user).then(res => {
            localStorage.setItem('token', res.data.token)
            history.push('/')
        })
    }
    return (
        <div>
          
        <Container >
            <form onSubmit={doSignup}>    
            <Grid container spacing={3}>
            <Grid item xs={12}>
                    <TextField
                        label="Username"
                        type="text"
                        required
                        onChange={ev => setUser({...user, name:ev.target.value})}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        type="email"
                        required
                        onChange={ev => setUser({...user, email:ev.target.value})}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Password"
                        required
                        type="password"
                        onChange={ev => setUser({...user, password:ev.target.value})}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Age"
                        required
                        type="number"
                        
                        onChange={ev => setUser({...user, age:ev.target.value})}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <InputLabel id="gender">Gender</InputLabel>
                        <Select
                        labelId="gender"
                        required
                        value={user.gender}
                        onChange={ev => setUser({...user, gender:ev.target.value})}
                    >
                        <MenuItem value="none" disabled selected>Gender</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                    </Select>
                    <FormHelperText>Please choose biological gender for calculation</FormHelperText>
                    </FormControl>
                    
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Weight"
                        required
                        type="number"
                        helperText="pounds"
                        onChange={ev => setUser({...user, weight:ev.target.value})}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Height"
                        required
                        type="number"
                        onChange={ev => setUser({...user, height:ev.target.value})}
                    />
                </Grid>
                <Grid item xs={4} md={1}>
                    <SubmitButton type="submit"></SubmitButton>
                    
                </Grid>
                
                
            </Grid>
            </form>
        </Container>
       
         
        </div>
    );
};

export default Signup;