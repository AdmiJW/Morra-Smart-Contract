// * Global level context, with functionality to show toast messages,
// * and provide access to user's account and contract


import React, { useState, useCallback, createContext } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const AppContext = createContext(null);



function AppContextProvider({ children }) {
    // Context states
    const [ account, setAccount ] = useState(null);
    const [ contract, setContract ] = useState(null);

    // Error
    const [ error, setError ] = useState({});

    // Toast
    const [ isToastShown, setIsToastShown ] = useState(false);
    const [ toastMessage, setToastMessage ] = useState('');
    const [ toastSeverity, setToastSeverity ] = useState('info');


    // Toast methods
    const setToast = useCallback((message, severity) => {
        setToastMessage(message);
        setToastSeverity(severity);
        setIsToastShown(true);
    }, [setToastMessage, setToastSeverity, setIsToastShown]);

    const showSuccessToast = useCallback((message) => setToast(message, 'success'), [setToast]);
    const showErrorToast = useCallback((message) => setToast(message, 'error'), [setToast]);
    const showInfoToast = useCallback((message) => setToast(message, 'info'), [setToast]);  
    const showWarningToast = useCallback((message) => setToast(message, 'warning'), [setToast]);

    const handleToastClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setIsToastShown(false);
    };


    // Put exposed states here
    const state = {
        account, setAccount,
        contract, setContract,

        // Loading/Error
        error, setError,

        // Toast
        showSuccessToast,
        showErrorToast,
        showInfoToast,
        showWarningToast
    };




    return (
        <AppContext.Provider value={ state }>
            {children}

            <Snackbar
                open={isToastShown}
                autoHideDuration={6000}
                onClose={handleToastClose}
            >
                <Alert severity={toastSeverity} sx={{ width: '100%' }}>
                    {toastMessage}
                </Alert>
            </Snackbar>
        </AppContext.Provider>
    );
}


export { AppContextProvider }
export default AppContext;