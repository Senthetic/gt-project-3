import React, {useState} from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const doLogin = () => {
        console.log('I cannot make a call, as there is no backend route or auth')
    }
    return (
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
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >Login</Button>
                    
                </Grid>
            </Grid>
            </from>
        </Container>
    );
};

export default Login;