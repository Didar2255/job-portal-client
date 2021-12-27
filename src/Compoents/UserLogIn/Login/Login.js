import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const submitFrom = (e) => {
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
                            onBlur=''
                            variant="outlined" />
                        <TextField
                            sx={{ m: 1, width: '75%' }}
                            id="outlined-basic"
                            label='User Password'
                            type='password'
                            name='password'
                            onBlur=''
                            variant="outlined" />
                        <Button variant="contained" sx={{ background: '#182f59', borderRadius: 1, m: 1, width: '20%' }} type='submit'>SIGN UP</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;