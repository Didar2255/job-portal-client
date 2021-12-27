import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/Logo/logo.png'
import useFirebase from '../../../Hooks/useFirebase';
import './Login.css'

const Login = () => {
    const [userLogIn, setUserLogIn] = useState({})
    const { logInProcess } = useFirebase()

    const handelOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const logInData = { ...userLogIn }
        logInData[field] = value;
        setUserLogIn(logInData)
    }
    const submitFrom = (e) => {
        logInProcess(userLogIn.email, userLogIn.password)
        e.preventDefault()
    }
    return (
        <Container sx={{ m: 8 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form onSubmit={submitFrom} className='login-form'>
                        <Box sx={{ mb: 8 }} className='active-link'>
                            <Link to='/login' >
                                <Button variant="contained" sx={{ width: '50%', backgroundColor: 'black', borderRadius: 0, color: 'green', padding: 2, fontWeight: 600 }} type='submit'>SIGN IN</Button>
                            </Link>
                            <Link to='/registration'>
                                <Button variant="contained" sx={{ width: '50%', borderRadius: 0, padding: 2, fontWeight: 600 }} type='submit'>SIGN UP</Button>
                            </Link>
                        </Box>
                        <Typography variant='h6'>
                            SIGN IN
                        </Typography>
                        <Typography variant='body2'>
                            Sign To Get Job
                        </Typography>
                        <TextField
                            sx={{ m: 1, width: '75%' }}
                            id="outlined-basic"
                            label="User Email"
                            type='email'
                            name='email'
                            onBlur={handelOnBlur}
                            variant="outlined" />
                        <TextField
                            sx={{ m: 1, width: '75%' }}
                            id="outlined-basic"
                            label='User Password'
                            type='password'
                            name='password'
                            onBlur={handelOnBlur}
                            variant="outlined" />
                        <Button variant="contained" sx={{ background: '#182f59', borderRadius: 1, m: 1, width: '20%' }} type='submit'>SIGN IN</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={logo} alt="" style={{ width: '200px', marginTop: '100px' }} />
                    <Typography variant='body2'>Shaping Tomorrow's Cybersecurity</Typography>
                    <Box sx={{ mt: 10 }}>
                        <Typography variant='h5' sx={{ fontWeight: 600 }}>
                            Welcome to TechForing
                        </Typography>
                        <Typography variant='body1' sx={{ fontWeight: 600, lineHeight: 2 }}>
                            An applicant can register only once
                        </Typography>
                        <Typography variant='body2'>
                            Register applicant,please login with credentials bt entering email and password
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;