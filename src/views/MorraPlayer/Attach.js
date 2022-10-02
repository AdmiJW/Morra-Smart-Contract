import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, TextField } from "@mui/material";

import AppContext from "../../context/AppContext";
import MorraPlayerInteractContext from "../../context/MorraPlayerInteractContext";

import { attachContract, attachPlayerInteract } from "../../Util";


export default function Attach() {

    const navigate = useNavigate();
    const { account, showErrorToast, setContract } = useContext(AppContext);

    const [ ctcInfo, setCtcInfo ] = useState('');



    useEffect(() => {
        if (!account) navigate('/');
    }, [account, navigate]);

    const morraPlayerInteract = useContext(MorraPlayerInteractContext);


    const onSubmit = ()=> {
        if (!ctcInfo) return showErrorToast('Please enter a contract information');

        try {
            const ctc = attachContract(account, JSON.parse(ctcInfo) );
            attachPlayerInteract(ctc, morraPlayerInteract);
            setContract(ctc);
        } catch (e) {
            return showErrorToast('Invalid contract information:' + e.message);
        }

        navigate('/player/accept_wager');
    }

    return <>
        <Typography variant="h3" gutterBottom>
            Reach Morra 🖐
        </Typography>

        <Typography variant="subtitle1" gutterBottom className='lead text-muted'>
            Provide the contract information to join existing game:
        </Typography>

        <TextField
            label="Contract Information"
            multiline
            rows={4}
            variant="filled"
            sx={{ minWidth: '400px', maxWidth: '700px' }}
            value={ctcInfo}
            onChange={(e)=> setCtcInfo(e.target.value)}
        />

        <Button 
            onClick={ onSubmit } 
            variant="contained"
            className='my-2'
        >
            Attach
        </Button>
    </>;
}