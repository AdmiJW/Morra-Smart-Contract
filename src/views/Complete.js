import React, { useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Typography, Button } from "@mui/material";

import AccountDetails from "./components/AccountDetails";
import GameDetails from "./components/GameDetails";

import AppContext from "../context/AppContext";
import MorraPlayerInteractContext from "../context/MorraPlayerInteractContext";
import MorraDealerInteractContext from "../context/MorraDealerInteractContext";



export default function Complete() {

    const navigate = useNavigate();
    const location = useLocation();

    const isDealer = location.pathname.startsWith('/dealer');

    const { account } = useContext(AppContext);

    const {
        round,
        totalFingers,
        outcome
    } = useContext( isDealer ? MorraDealerInteractContext : MorraPlayerInteractContext );


    useEffect(() => {
        if (!account) navigate('/');
    }, [account, navigate]);


    return <>
        <Typography variant="h3" gutterBottom>
            Reach Morra 🖐
        </Typography>

        <TaskAltIcon sx={{ fontSize: 75 }} className='mt-5' color='success' />

        <Typography variant="subtitle1" gutterBottom className='lead text-muted'>
            The game has ended. Thank you for playing!
        </Typography>

        <Typography variant="subtitle1" gutterBottom className='lead text-muted'>
            Game outcome:
        </Typography>

        <GameDetails round={round} totalFingers={totalFingers} outcome={outcome} isDealer={isDealer} />

        <AccountDetails />

        <Button variant="contained" size='large' onClick={ ()=> window.location.href = process.env.PUBLIC_URL } >Refresh</Button>
    </>;
}