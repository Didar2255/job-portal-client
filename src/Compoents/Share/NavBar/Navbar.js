import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const { user, handelSignOut } = useFirebase()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        TechForing
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '20px', fontWeight: 600 }} to='/home'>Home</NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '20px', fontWeight: 600 }} to='/createJob'>Create Job</NavLink>
                    {
                        user?.email ?
                            <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }} onClick={handelSignOut} to='/login'>
                                Log-out
                            </NavLink>

                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '20px', fontWeight: 600 }} to='/login'>
                                Log-in
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navbar;