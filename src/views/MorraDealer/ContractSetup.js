import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Box, TextField } from "@mui/material";

import AppContext from "../../context/AppContext";
import MorraDealerInteractContext from "../../context/MorraDealerInteractContext";

import { getConnector, parseCurrency, getStandardUnit } from "../../Util";


export default function ContractSetup() {

    const navigate = useNavigate();

    const { 
        account, 
        standardUnit,
        showErrorToast,
    } = useContext(AppContext);

    const {
        wager, setWager,
        setDeadline,
    } = useContext(MorraDealerInteractContext);


    useEffect(() => {
        if (!account) navigate('/');
    }, [account, navigate]);


    const handleSubmit = async ()=> {
        if (wager <= 0) return showErrorToast("Wager must be greater than 0!");

        setDeadline( {ETH: 100, ALGO: 100, CFX: 1000}[ getConnector() ] );
        navigate('/dealer/deploy');
    }



    return <>
        <Typography variant="h3" gutterBottom>
            Reach Morra 🖐
        </Typography>

        <Typography variant="subtitle1" gutterBottom >
            Please set a wager:
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', my: 5 }} >
            <TextField 
                label="Fee" 
                variant="filled" 
                type='number' 
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                onChange={ (e)=> setWager( parseCurrency( parseFloat(e.target.value) ) ) }
            />
            <Box className='mx-2 fw-bold' >{ getStandardUnit() }</Box>
        </Box>

        <Button variant="contained" onClick={ handleSubmit } className='my-3' >
            Deploy Contract
        </Button>
    </>;
}