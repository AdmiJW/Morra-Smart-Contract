import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PanToolIcon from '@mui/icons-material/PanTool';

export default function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar >
                <PanToolIcon sx={{  mr: 1 }} />

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Reach Morra
                </Typography>
            </Toolbar>
        </AppBar>
    );
}