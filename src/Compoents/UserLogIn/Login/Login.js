import { Button, Container, Grid, TextField } from '@mui/material';
import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <Container sx={{ m: 8 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form action="" className='login-form'>
                        <TextField
                            sx={{ m: 1, width: '75%' }}
                            id="outlined-basic"
                            type='Text'
                            name='name'
                            onBlur=''
                            placeholder='User Name'
                            variant="outlined" />
                        <TextField
                            sx={{ m: 1, width: '75%' }}
                            id="outlined-basic"
                            type='email'
                            name='email'
                            onBlur=''
                            placeholder='User Email'
                            variant="outlined" />
                        <Button variant="contained" sx={{ backgroundColor: '', borderRadius: 1, m: 1, width: '20%' }} type='submit'>SIGN UP</Button><br />
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;