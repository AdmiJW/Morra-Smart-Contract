
import React, { useState, createContext, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import AppContext from "./AppContext";

import { getRandom } from "../Util";



const MorraDealerInteractContext = createContext(null);



function MorraDealerInteractContextProvider({ children }) {

    const navigate = useNavigate();
    const { showErrorToast, setError } = useContext(AppContext);


    // Context states
    const [ wager, setWager ] = useState(0);
    const [ deadline, setDeadline ] = useState(0);

    const [ round, setRound ] = useState(0);
    const [ totalFingers, setTotalFingers ] = useState(null);
    const [ outcome, setOutcome ] = useState(null);

    // Input resolver.
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
        navigate('/dealer/complete');
    }, [navigate]);






    // Put exposed states here
    const state = {
        wager, setWager,
        deadline, setDeadline,
        round,
        totalFingers,
        outcome,
        resolveFingers, setResolveFingers,
        resolveGuess, setResolveGuess,

        getFingers,
        getGuess,
        seeOutcome,
        notifyTimeout,
        concludeGame,

        random: getRandom(),
    };


    return (
        <MorraDealerInteractContext.Provider value={ state }>
            {children}
        </MorraDealerInteractContext.Provider>
    );
}


export { MorraDealerInteractContextProvider }
export default MorraDealerInteractContext;