import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#585858 ' }}>
            <Toolbar>
                <Typography 
                    variant="h1" 
                    sx={{ 
                        flexGrow: 1, 
                        textAlign: 'center' 
                    }}
                >
                    Books
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
