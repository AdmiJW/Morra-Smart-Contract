import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Card, CardContent, Button, ButtonGroup } from "@mui/material";

import AppContext from "../../context/AppContext";
import MorraPlayerInteractContext from "../../context/MorraPlayerInteractContext";

import { getStandardUnit, formatCurrency } from "../../Util";
import Loading from '../components/Loading';


export default function AcceptWager() {

    const navigate = useNavigate();
    const { account, showInfoToast } = useContext(AppContext);
    const { wager, resolveAcceptWager } = useContext(MorraPlayerInteractContext);


    useEffect(() => {
        if (!account) navigate('/');
    }, [account, navigate]);

    
    const handleSubmit = (accept)=> {
        if (accept) {
            resolveAcceptWager(true);
            navigate('/player/game');
        }
        else {
            showInfoToast('You have rejected the contract.');
            navigate('/complete');
        }
    }


    if (!resolveAcceptWager) return <Loading message="Loading contract information..." />;

    return <>
        <Typography variant="h3" gutterBottom>
            Reach Morra 🖐
        </Typography>

        <Card sx={{ minWidth: 400 }} className='my-4'>
            <CardContent>
                <Typography variant="h6" className='mb-4'>
                    Game Terms 🎮
                </Typography>

                <Typography color="text.secondary" gutterBottom>
                    Wager: <strong>{ formatCurrency(wager) }</strong> { getStandardUnit() }
                </Typography>
            </CardContent>
        </Card>

        <ButtonGroup variant="contained" size="large" aria-label="outlined primary button group" className='my-3'>
            <Button color="success" onClick={ ()=> handleSubmit(true) } >Accept</Button>
            <Button color="error" onClick={ ()=> handleSubmit(false) } >Reject</Button>
        </ButtonGroup>
    </>;
}