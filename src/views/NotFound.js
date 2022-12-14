import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import SearchOffIcon from '@mui/icons-material/SearchOff';


export default function NotFound() {
    return <>
        <SearchOffIcon color='action' className='my-3' sx={{ fontSize: '3.5rem' }} />
        <p className='text-center text-secondary lead fw-bold mb-5'> 404 Not Found </p>

        <Link to='/'>
            <Button variant="contained" size='large'>Go back</Button>
        </Link> 
    </>;
}