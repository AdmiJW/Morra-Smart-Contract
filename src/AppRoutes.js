import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";


import Error from "./views/Error";
import NotFound from "./views/NotFound";
import Role from "./views/Role";
import Complete from "./views/Complete";
import ConnectAccount from "./views/ConnectAccount";
import Game from "./views/Game";
import View from "./views/View";

// Fortune Teller views
import ContractSetup from "./views/MorraDealer/ContractSetup";
import ContractDeployment from "./views/MorraDealer/ContractDeployment";

// Fortune Listener views
import AcceptWager from "./views/MorraPlayer/AcceptWager";
import Attach from "./views/MorraPlayer/Attach";



export default function AppRoutes() {
    
    return <Routes>
        <Route path="/" element={<ConnectAccount />} />
        <Route path="error" element={<Error />} />
        <Route path="role" element={<Role />} />
        <Route path='view' element={<View />} />

        <Route path='dealer'>
            <Route path="setup" element={<ContractSetup />} />
            <Route path="deploy" element={<ContractDeployment />} />
            <Route path='game' element={<Game />} />
            <Route path="complete" element={<Complete />} />
        </Route>

        <Route path='player'>
            <Route path="attach" element={<Attach />} />
            <Route path="accept_wager" element={<AcceptWager />} />
            <Route path='game' element={<Game />} />
            <Route path="complete" element={<Complete />} />
        </Route>

        <Route path='*' element={<NotFound />} />
    </Routes>
};