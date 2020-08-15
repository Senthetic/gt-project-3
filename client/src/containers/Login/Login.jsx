import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import SubmitButton from "../../components/SubmitButton";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const doLogin = () => {
        console.log('I cannot make a call, as there is no backend route or auth')
    }
    return (
        <div>
            
        <Container maxwidth="sm">
            <from onSubmit={doLogin}>    
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        type="email"
                        required
                        onChange={ev => setEmail(ev.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Password"
                        required
                        type="password"
                        onChange={ev => setPassword(ev.target.value)}
                    />
                </Grid>
                <Grid item xs={4} md={1}>
                    <SubmitButton></SubmitButton>
                    
                </Grid>
                <Grid item xs={8} md={11}>
                    <Link to="/signup">
                        <Button

                        type="button"
                        variant="contained"

                        >Signup</Button>
                    </Link>
                </Grid>
                
            </Grid>
            </from>
        </Container>
        
        </div>
    );
};

export default Login;