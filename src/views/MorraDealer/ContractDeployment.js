import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Card, CardContent, Button, CircularProgress } from "@mui/material";


import Loading from "../components/Loading";

import AppContext from "../../context/AppContext";
import MorraDealerInteractContext from "../../context/MorraDealerInteractContext";

import { deployContract, attachDealerInteract } from "../../Util";


export default function ContractDeployment() {

    const navigate = useNavigate();

    const { 
        account,
        contract, setContract,
        showSuccessToast
    } = useContext(AppContext);

    const morraDealerInteract = useContext(MorraDealerInteractContext);
    const { resolveFingers } = morraDealerInteract;

    const [ ctcInfo, setCtcInfo ] = useState('');


    useEffect(() => {
        if (!account) navigate('/');
    }, [account, navigate]);

    useEffect(()=> {
        if (resolveFingers) navigate('/dealer/game');
    }, [resolveFingers, navigate]);

    useEffect(()=> {
        if (contract || !account) return;

        const ctc = deployContract(account);
        attachDealerInteract(ctc, morraDealerInteract);
        setContract(ctc);
    }, [account, contract, morraDealerInteract, setContract]);

    useEffect(()=> {
        if (!contract) return;

        (async ()=> {
            const ctcInfo = await contract.getInfo();
            setCtcInfo( JSON.stringify(ctcInfo) );
        })();
    }, [contract]);


    const copyToClipboard = (str)=> {
        navigator.clipboard.writeText(str);
        showSuccessToast("Contract Information Copied to Clipboard");
    }



    if (!ctcInfo) return <Loading message="Deploying contract. Please wait..." />;

    return <>
        <Typography variant="h3" gutterBottom>
            Reach Morra 🖐
        </Typography>

        <CircularProgress className='my-3' />

        <Typography variant="subtitle1" gutterBottom className='lead text-muted mb-5'>
            Waiting for another player...
        </Typography>


        <Typography variant="subtitle1" className='fw-bold'>
            Here's the contract information you'll need to provide to the other player:
        </Typography>

        <Card sx={{ minWidth: 275 }} className='my-3'>
            <CardContent>
                <Typography color="text.secondary" gutterBottom>
                    { ctcInfo }
                </Typography>
            </CardContent>
        </Card>

        <Button
            onClick={ ()=> copyToClipboard(ctcInfo) } 
            disabled={false} 
            variant="contained"
        >
            Copy to Clipboard
        </Button>
    </>;
}