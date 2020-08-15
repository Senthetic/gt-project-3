import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Signup = () => {
    const [user,setUser] = useState({});
    const doSignup = () => {

    }
    return (
        <Container maxwidth="sm">
            <from onSubmit={doSignup}>    
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
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >Signup</Button>
                    
                </Grid>
    
            </Grid>
            </from>
        </Container>
    );
};

export default Signup;