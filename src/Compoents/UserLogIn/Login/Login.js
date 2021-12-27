import { Button, Container, Grid, TextField, Typography } from '@mui/material';
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
                        <Link to='/login'>
                            <Button variant="contained" sx={{ background: '#182f59', width: '50%', borderRadius: 0 }} type='submit'>SIGN IN</Button>
                        </Link>
                        <Link to='/registration'>
                            <Button variant="contained" sx={{ background: '#182f59', width: '50%', borderRadius: 0 }} type='submit'>SIGN UP</Button>
                        </Link>
                        <Typography variant='h6'>
                            SIGN IN
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