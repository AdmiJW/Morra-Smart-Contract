import React, { useContext } from "react";
import { Typography, Button } from "@mui/material";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import AppContext from "../context/AppContext";


export default function Error() {

    const { error: { title, detail } } = useContext(AppContext);

    return <>
        <SentimentVeryDissatisfiedIcon className='my-3' sx={{ fontSize: 75 }} color='error' />

        <Typography variant='h5' className='text-center fw-bold text-danger' marginBottom={5}>
            {title || "An error occurred."} 
        </Typography>

        <p className='text-center lead'> {detail} </p>

        <Button variant="contained" size='large' onClick={ ()=> window.location.href = '/' }>
            Refresh
        </Button>
    </>;
}