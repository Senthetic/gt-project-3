import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Api from "../../utils/api";

import SubmitButton from "../../components/SubmitButton";

const divStyle = {
    margin: '45px',
};

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const doLogin = (ev) => {
        ev.preventDefault()
        Api.post('/auth/login', {
            email: email,
            password: password
        }).then(res => {
            localStorage.setItem('token', res.data.token);
            history.push('/')
        }).catch(e => {
            alert('wrong credentials')
        })
    }
    return (
        <div>
            <div style={divStyle}>

                <Container maxwidth="sm">
                    <form onSubmit={doLogin}>
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
                                <SubmitButton type="submit"></SubmitButton>

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
                    </form>
                </Container>
            </div>
            <div style={divStyle}>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Login;