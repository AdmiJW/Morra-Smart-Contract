
import React, { useState, createContext, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import AppContext from "./AppContext";



const MorraPlayerInteractContext = createContext(null);


function MorraPlayerInteractContextProvider({ children }) {

    const navigate = useNavigate();
    const { showErrorToast, setError } = useContext(AppContext);


    // Context states
    const [ wager, setWager ] = useState(0);

    const [ round, setRound ] = useState(0);
    const [ totalFingers, setTotalFingers ] = useState(null);
    const [ outcome, setOutcome ] = useState(null);

    // Input resolver
    const [ resolveAcceptWager, setResolveAcceptWager ] = useState(null);
    const [ resolveFingers, setResolveFingers ] = useState(null);
    const [ resolveGuess, setResolveGuess ] = useState(null);

    
    // Interact methods
    const getFingers = useCallback( async ()=> {
        return await new Promise((resolve)=> setResolveFingers( (_)=> resolve) );
    }, [setResolveFingers]);

    const getGuess = useCallback( async ()=> {
        return await new Promise((resolve)=> setResolveGuess( (_)=> resolve) );
    }, [setResolveGuess]);

    const seeOutcome = useCallback( (totalFingers, outcome)=> {
        setTotalFingers(totalFingers);
        setOutcome(outcome);
        setRound( (round)=> round + 1 );
    }, [setTotalFingers, setOutcome]);

    const notifyTimeout = useCallback(()=> {
        setError({ title: 'Timeout Occurred', detail: 'The other participant had timed out' });
        showErrorToast('Timeout occurred');
        navigate('/error');
    }, [navigate, setError, showErrorToast]);

    const concludeGame = useCallback(()=> {
        navigate('/player/complete');
    }, [navigate]);

    const acceptWager = useCallback( async (wager)=> {
        setWager(wager);
        return await new Promise((resolve)=> setResolveAcceptWager( (_)=> resolve) );
    }, [setWager, setResolveAcceptWager]);


    // Put exposed states here
    const state = {
        wager, setWager,
        round,
        totalFingers,
        outcome,
        resolveAcceptWager, setResolveAcceptWager,
        resolveFingers, setResolveFingers,
        resolveGuess, setResolveGuess,

        getFingers,
        getGuess,
        seeOutcome,
        notifyTimeout,
        concludeGame,
        acceptWager
    };


    return (
        <MorraPlayerInteractContext.Provider value={ state }>
            {children}
        </MorraPlayerInteractContext.Provider>
    );
}


export { MorraPlayerInteractContextProvider }
export default MorraPlayerInteractContext;