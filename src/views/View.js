import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, TextField, Card,CardContent } from "@mui/material";

import AppContext from "../context/AppContext";

import { attachContract, outcomeString, formatCurrency, getStandardUnit } from "../Util";


export default function Attach() {

    const navigate = useNavigate();
    const { account, showErrorToast } = useContext(AppContext);

    const [ ctcInfo, setCtcInfo ] = useState('');

    const [ wager, setWager ] = useState(null);
    const [ deadline, setDeadline ] = useState(null);
    const [ outcome, setOutcome ] = useState(null);
    const [ dealerFingers, setDealerFingers ] = useState(null);
    const [ playerFingers, setPlayerFingers ] = useState(null);
    const [ dealerGuess, setDealerGuess ] = useState(null);
    const [ playerGuess, setPlayerGuess ] = useState(null);



    useEffect(() => {
        if (!account) navigate('/');
    }, [account, navigate]);



    const onSubmit = async ()=> {
        if (!ctcInfo) return showErrorToast('Please enter a contract information');

        try {
            const ctc = attachContract(account, JSON.parse(ctcInfo) );
            
            setDeadline( await ctc.unsafeViews.View.deadline() );
            setWager( await ctc.unsafeViews.View.wager() );
            setOutcome( await ctc.unsafeViews.View.outcome() );
            setDealerFingers( await ctc.unsafeViews.View.dealerFingers() );
            setPlayerFingers( await ctc.unsafeViews.View.playerFingers() );
            setDealerGuess( await ctc.unsafeViews.View.dealerGuess() );
            setPlayerGuess( await ctc.unsafeViews.View.playerGuess() );
        } catch (e) {
            return showErrorToast('Invalid contract information:' + e.message);
        }
    }

    return <>
        <Typography variant="h3" gutterBottom>
            Reach Morra 🖐
        </Typography>

        <Typography variant="subtitle1" gutterBottom className='lead text-muted'>
            Provide the contract information to view its state:
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
            Attach and view
        </Button>


        <Card sx={{ minWidth: 275 }} className='my-4'>
            <CardContent>
                <Typography variant="h6" className='mb-4'>
                    Game Details
                </Typography>

                <Typography color="text.secondary" gutterBottom>
                    Wager: 
                    <strong> { `${formatCurrency( parseInt(wager) )} ${getStandardUnit()}` }</strong>
                </Typography>

                <Typography color="text.secondary" gutterBottom>
                    Deadline: <strong>{ deadline? parseInt(deadline): '-' }</strong>
                </Typography>

                <Typography color="text.secondary" gutterBottom>
                    Outcome: <strong>{ outcome? outcomeString(outcome): '-' }</strong>
                </Typography>

                <Typography color="text.secondary" gutterBottom>
                    Dealer's Fingers: <strong>{ dealerFingers? parseInt(dealerFingers): '-' }</strong>
                </Typography>

                <Typography color="text.secondary" gutterBottom>
                    Player's Fingers: <strong>{ playerFingers? parseInt(playerFingers): '-' }</strong>
                </Typography>

                <Typography color="text.secondary" gutterBottom>
                    Dealer's Guess: <strong>{ dealerGuess? parseInt(dealerGuess): '-' }</strong>
                </Typography>

                <Typography color="text.secondary" gutterBottom>
                    Player's Guess: <strong>{ playerGuess? parseInt(playerGuess): '-' }</strong>
                </Typography>
            </CardContent>
        </Card>
    </>;
}