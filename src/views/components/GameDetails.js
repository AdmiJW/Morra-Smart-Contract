import React from "react";

import { Card, CardContent, Typography } from "@mui/material";

import { outcomeString } from "../../Util";



export default function GameDetails({
    totalFingers,
    outcome,
    round,
    isDealer
}) {

    return <>
        <Card sx={{ minWidth: 275 }} className='my-4'>
            <CardContent>
                <Typography variant="h6" className='mb-4'>
                    Game Details
                </Typography>

                <Typography color="text.secondary" gutterBottom>
                    Round: <strong> { round } </strong>
                </Typography>

                <Typography color="text.secondary" gutterBottom>
                    Total Fingers: <strong>{ totalFingers? parseInt(totalFingers): '-' }</strong>
                </Typography>

                <Typography color="text.secondary" gutterBottom>
                    Outcome: <strong>{ outcomeString( outcome, isDealer) }</strong>
                </Typography>
            </CardContent>
        </Card>
    </>;
}