import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const Registration = () => {
    return (
        <Container sx={{ m: 8 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h6' sx={{ lineHeight: 6, fontWeight: 500 }}>
                            SIGN UP
                        </Typography>
                        <Typography variant='body2' sx={{ lineHeight: 6, fontWeight: 500 }}>
                            Register To Get A Job
                        </Typography>
                        <form onClick=''>
                            <TextField
                                sx={{ m: 1, width: '75%' }}
                                id="standard-basic"
                                type='Text'
                                name='name'
                                onBlur=''
                                placeholder='User Name'
                                variant="standard" />
                            <TextField
                                sx={{ m: 1, width: '75%' }}
                                id="standard-basic"
                                type='email'
                                name='email'
                                onBlur=''
                                placeholder='User Email'
                                variant="standard" />
                            <TextField
                                sx={{ m: 1, width: '75%' }}
                                id="standard-basic"
                                type='password'
                                name='password'
                                onBlur=''
                                placeholder='User Password'
                                variant="standard" />
                            <TextField
                                sx={{ m: 1, width: '75%' }}
                                id="standard-basic"
                                type='password'
                                name='password2'
                                onBlur=''
                                placeholder='Re-type password'
                                variant="standard" />
                            <Button variant="contained" sx={{ backgroundColor: '#2CD4ED', borderRadius: 0, m: 1, width: '75%' }} type='submit'>SIGN UP</Button><br />
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