import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'

const Registration = () => {
    return (
        <Container sx={{ m: 8 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <form onClick='' className='register-form'>
                            <Box sx={{ mb: 5 }}>
                                <Link to='/login'>
                                    <Button variant="contained" sx={{ background: '#182f59', width: '50%', borderRadius: 0 }} type='submit'>SIGN IN</Button>
                                </Link>
                                <Link to='/registration'>
                                    <Button variant="contained" sx={{ background: '#182f59', width: '50%', borderRadius: 0 }} type='submit'>SIGN UP</Button>
                                </Link>
                            </Box>
                            <Typography variant='h6' sx={{ fontWeight: 700 }}>
                                SIGN UP
                            </Typography>
                            <Typography variant='body2' sx={{ fontWeight: 500, mb: 5 }}>
                                Register To Get A Job
                            </Typography>

                            <TextField
                                id="outlined-basic"
                                sx={{ m: 1 }}
                                label="First Name"
                                type='text'
                                name='name'
                                onBlur=''
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                sx={{ m: 1 }}
                                label="Phone Number"
                                type='number'
                                name='number'
                                onBlur=''
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                sx={{ m: 1 }}
                                type='date'
                                name='date'
                                onBlur=''
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                sx={{ m: 1 }}
                                label="Gender"
                                type='text'
                                name='gender'
                                onBlur=''
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                sx={{ m: 1, width: '75%' }}
                                label="Email"
                                type='email'
                                name='email'
                                onBlur=''
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                sx={{ m: 1 }}
                                label="Password"
                                type='password'
                                name='password'
                                onBlur=''
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                sx={{ m: 1 }}
                                label="Confirm Password"
                                type='password'
                                name='password'
                                onBlur=''
                                variant="outlined"
                            />

                            <Button variant="contained" sx={{ backgroundColor: '#2CD4ED', borderRadius: 1, m: 1, width: '20%' }} type='submit'>SIGN UP</Button><br />
                        </form>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src='' alt="" style={{ width: '500px' }} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Registration;