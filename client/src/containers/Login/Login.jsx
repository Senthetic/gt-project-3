import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

import Api from "../../utils/api";

import Footer from "../../components/Footer";


const divStyle = {
    margin: '45px',
};

const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    body: {
        backgroundColor: "blue",
    },
    button: {
        backgroundColor: "#D9D9D9"
    }
}));

const Login = () => {
    const history = useHistory();
    const classes = useStyles();
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
        <Container className={classes.root}>
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
                                <Button className={classes.button} type="submit" variant="contained">Signin</Button>

                            </Grid>
                            <Grid item xs={8} md={11}>
                                <Link to="/signup">
                                    <Button
                                    className={classes.button} type="button" variant= "contained">Signup</Button>
                                </Link>
                            </Grid>

                        </Grid>
                    </form>
                </Container>
            </div>
            <div style={divStyle}>
                <Footer></Footer>
            </div>
            </Container>
    );
};

export default Login;