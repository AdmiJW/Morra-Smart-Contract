import React, { useContext, useEffect } from "react";
import { Typography, Card, CardContent, CircularProgress } from "@mui/material"

import { getBalance, getStandardUnit } from "../../Util";
import AppContext from "../../context/AppContext"



export default function AccountDetails() {

    const { account } = useContext(AppContext);

    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ address, setAddress ] = React.useState('');
    const [ balance, setBalance ] = React.useState(0);
    const [ standardUnit, setStandardUnit ] = React.useState('');

    
    useEffect(() => {
        (async ()=> {
            if (!account) return setIsLoading(true);

            const bal = await getBalance(account);
            const unit = getStandardUnit();
            setAddress(account.getAddress());
            setBalance(bal);
            setStandardUnit(unit);
            setIsLoading(false);
        })();   
    }, [account]);


    
    return <Card sx={{ minWidth: 275 }} className='my-4'>
        <CardContent>

        {
            isLoading ?
            <>
                <CircularProgress className='my-3' />
                <Typography color="text.secondary" gutterBottom>
                    Loading Account Details...
                </Typography>
            </>
            :
            <>
                <Typography variant="h6" className='mb-4'>
                    Your Account Details
                </Typography>

                <Typography color="text.secondary" gutterBottom>
                    Address: <strong>{ address }</strong>
                </Typography>

                <Typography color="text.secondary" gutterBottom>
                    Balance: { balance } <strong> { standardUnit } </strong>
                </Typography>
            </>
        }
            
        </CardContent>
    </Card>
}