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
import Button from '@material-ui/core/Button';


import Api from "../../utils/api"
import Footer from '../../components/Footer';
import Disclaimer from "../../components/Disclaimer";

const Signup = () => {
    const history = useHistory();
    const [user,setUser] = useState({});
    const doSignup = (ev) => {
        ev.preventDefault();
        Api.post('/auth/signup',user).then(res => {
            localStorage.setItem('token', res.data.token)
            history.push('/')
        });
    };
    return (
        <div>
        <div>
          
        <Container >
            <form onSubmit={doSignup}>    
            <Grid container spacing={3}>
            <Grid item xs={12}>
                    <TextField
                        label="Username"
                        type="text"
                        required
                        onChange={ev => setUser({...user, userName:ev.target.value})}
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
                        helperText="Inches"
                        onChange={ev => setUser({...user, height:ev.target.value})}
                    />
                </Grid>
                <Grid item xs={4} md={1}>
                    <Button style={{marginRight: 25,
                                            marginLeft: 0,
                                            marginTop: 5,
                                            paddingTop: 25,
                                            paddingLeft:25,
                                            paddingRight:25,
                                            paddingBottom: 25,
                                            backgroundColor: '#E8EDDF',
                                            borderRadius: 10,
                                            borderWidth: "5px",
                                            borderColor: "black"}} type="submit">SignUp</Button>
                    
                </Grid>
                
                
            </Grid>
            </form>
        </Container>
        </div>
        <div>
        <h1 style={{textAlign: "center", marginTop: "180px"
      }}>Disclaimer:</h1>
        <Disclaimer></Disclaimer>
      </div>
      <div>
          <Footer></Footer>
      </div>
      </div>
    );
};

export default Signup;