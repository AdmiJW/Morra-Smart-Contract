import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Typography, ButtonGroup, Button, Link } from "@mui/material";

import AppContext from "../context/AppContext";

import AccountDetails from "./components/AccountDetails";




export default function Role() {

    const navigate = useNavigate();
    const { account } = useContext(AppContext);

    useEffect(() => {
        if (!account) navigate('/');
    }, [account, navigate]);
    

    return <>
        <Typography variant="h3" gutterBottom>
            Reach Morra 🖐
        </Typography>

        <AccountDetails />

        <Typography variant="subtitle1" gutterBottom>
            Start a game of
            <Link href='https://en.wikipedia.org/wiki/Morra_(game)' target='_blank' underline='none'>
                &nbsp;Morra&nbsp;
            </Link>
            by:
        </Typography>

        <ButtonGroup variant="contained" size="large" color='info' aria-label="outlined primary button group" className='my-3'>
            <Button onClick={ ()=> navigate('/dealer/setup') } >Host a Contract 📃</Button>
            <Button onClick={ ()=> navigate('/player/attach') } >Join a Contract 🔗</Button>
        </ButtonGroup>

        <Typography variant='subtitle1' gutterBottom>
            Or view the history:
        </Typography>

        <Button variant='contained' size='large' color='info' onClick={ ()=> navigate('/view') } >
            View History 🧐
        </Button>
    </>;
}