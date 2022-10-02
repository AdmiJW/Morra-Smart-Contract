import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loadStdlib } from "@reach-sh/stdlib";

import Loading from "./components/Loading";
import AppContext from "../context/AppContext";

const reach = loadStdlib(process.env);


export default function ConnectAccount() {

    const navigate = useNavigate();

    const { 
        account, 
        setAccount, 
        showSuccessToast, 
        setError,
    } = useContext(AppContext);

    
    useEffect(() => {
        (async ()=> {
            try {
                const acc = await reach.getDefaultAccount();
                showSuccessToast("Account connected: " + acc.getAddress() );
                setAccount(acc);
                navigate('/role');
            } 
            catch (err) {
                setError({ title: 'Error connecting account', message: err.message });
                navigate('/error');
            }
        })();
    }, [account, setAccount, showSuccessToast, setError, navigate]);


    return <Loading message="Attempting to retrieve wallet information..." />;
}