import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import logo from '../../../Images/Logo/logo.png'
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import './Registration.css'

const Registration = () => {
    const [register, setRegister] = useState({})
    const { registerUser } = useFirebase()
    const handelOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const registerData = { ...register }
        registerData[field] = value;
        setRegister(registerData)
    }

    const handelRegisterFrom = (event) => {
        if (register.password !== register.password2) {
            alert('Password are in valid')
            return;
        }
        registerUser(register.email, register.password)
        event.preventDefault()
    }
    return (
        <Container sx={{ m: 8 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handelRegisterFrom} className='register-form'>
                            <Box sx={{ mb: 7 }} className='active-link'>
                                <Link to='/login'>
                                    <Button variant="contained" sx={{ width: '50%', backgroundColor: 'black', borderRadius: 0, color: 'green', padding: 2, fontWeight: 600 }} >SIGN IN</Button>
                                </Link>
                                <Link to='/registration'>
                                    <Button variant="contained" sx={{ width: '50%', borderRadius: 0, padding: 2, fontWeight: 600 }} >SIGN UP</Button>
                                </Link>
                            </Box>
                            <Typography variant='h6' sx={{ fontWeight: 700 }}>
                                SIGN UP
                            </Typography>
                            <Typography variant='body2' sx={{ fontWeight: 500, mb: 5 }}>
                                Register To Get A Job
                            </Typography>

                            <TextField
                                sx={{ m: 1 }}
                                label="First Name"
                                type='text'
                                name='name'
                                onBlur={handelOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                sx={{ m: 1 }}
                                label="Phone Number"
                                type='number'
                                name='number'
                                onBlur={handelOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                sx={{ m: 1 }}
                                type='date'
                                name='date'
                                onBlur={handelOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                sx={{ m: 1 }}
                                label="Gender"
                                type='text'
                                name='gender'
                                onBlur={handelOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                sx={{ m: 1, width: '75%' }}
                                label="Email"
                                type='email'
                                name='email'
                                onBlur={handelOnBlur}
                                variant="outlined"
                            />
                            <TextField

                                sx={{ m: 1 }}
                                label="Password"
                                type='password'
                                name='password'
                                onBlur={handelOnBlur}
                                variant="outlined"
                            />
                            <TextField

                                sx={{ m: 1 }}
                                label="Confirm Password"
                                type='password'
                                name='password2'
                                onBlur={handelOnBlur}
                                variant="outlined"
                            />

                            <Button variant="contained" sx={{ backgroundColor: '#182f59', borderRadius: 1, m: 1, width: '20%' }} type='submit'>SIGN UP</Button><br />
                        </form>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={logo} alt="" style={{ width: '200px', marginTop: "100px" }} />
                        <Typography variant='body2'>Shaping Tomorrow's Cybersecurity</Typography>
                        <Box sx={{ mt: 15 }}>
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
            </Box>
        </Container>
    );
};

export default Registration;