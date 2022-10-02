import React, { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Typography, Button, ButtonGroup } from "@mui/material";


import AppContext from "../context/AppContext";
import MorraPlayerInteractContext from "../context/MorraPlayerInteractContext";
import MorraDealerInteractContext from "../context/MorraDealerInteractContext";

import Loading from "./components/Loading";
import GameDetails from "./components/GameDetails";

import { outcomeString } from "../Util";


export default function Game() {

    const navigate = useNavigate();
    const location = useLocation();

    const isDealer = location.pathname.startsWith('/dealer');

    const { account, showInfoToast } = useContext(AppContext);

    const {
        resolveFingers, setResolveFingers,
        resolveGuess, setResolveGuess,
        totalFingers,
        outcome,
        round
    } = useContext( isDealer ? MorraDealerInteractContext : MorraPlayerInteractContext );


    useEffect(() => {
        if (!account) navigate('/');
    }, [account, navigate]);

    useEffect(()=> {
        if (!totalFingers || !outcome) return;
        showInfoToast(`The round's results are out: Total fingers: ${totalFingers}, Outcome: ${ outcomeString(outcome, isDealer) }`);
    }, [totalFingers, outcome, isDealer, showInfoToast]);

    useEffect(()=> {
        if (!resolveFingers) return;
        showInfoToast('Its your turn now!');
    }, [resolveFingers, showInfoToast]);


    const handleFingersSelect = (fingers)=> {
        resolveFingers(fingers);
        setResolveFingers(null);
    };

    const handleGuessSelect = (guess)=> {
        resolveGuess(guess);
        setResolveGuess(null);
    };


    return <>
        <GameDetails totalFingers={totalFingers} outcome={outcome} round={round} isDealer={isDealer} />

        {
            resolveFingers ?
            <>
                <Typography variant="h6" className='mb-4'>
                    Select your hand:
                </Typography>

                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={ ()=> handleFingersSelect(0) }>0</Button>
                    <Button onClick={ ()=> handleFingersSelect(1) }>1</Button>
                    <Button onClick={ ()=> handleFingersSelect(2) }>2</Button>
                    <Button onClick={ ()=> handleFingersSelect(3) }>3</Button>
                    <Button onClick={ ()=> handleFingersSelect(4) }>4</Button>
                    <Button onClick={ ()=> handleFingersSelect(5) }>5</Button>
                </ButtonGroup>
            </>
            : resolveGuess ?
            <>
                <Typography variant="h6" className='mb-4'>
                    Guess the total fingers:
                </Typography>

                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={ ()=> handleGuessSelect(0) }>0</Button>
                    <Button onClick={ ()=> handleGuessSelect(1) }>1</Button>
                    <Button onClick={ ()=> handleGuessSelect(2) }>2</Button>
                    <Button onClick={ ()=> handleGuessSelect(3) }>3</Button>
                    <Button onClick={ ()=> handleGuessSelect(4) }>4</Button>
                    <Button onClick={ ()=> handleGuessSelect(5) }>5</Button>
                    <Button onClick={ ()=> handleGuessSelect(6) }>6</Button>
                    <Button onClick={ ()=> handleGuessSelect(7) }>7</Button>
                    <Button onClick={ ()=> handleGuessSelect(8) }>8</Button>
                    <Button onClick={ ()=> handleGuessSelect(9) }>9</Button>
                    <Button onClick={ ()=> handleGuessSelect(10) }>10</Button>
                </ButtonGroup>
            </>
            : 
            <>
                <Loading message="Waiting for the other player's move" />
            </>
        }
    </>;
}