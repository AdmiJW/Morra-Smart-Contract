// * Main utilities and functions to interact with the backend and reach standard library



import { loadStdlib, ALGO_MyAlgoConnect } from "@reach-sh/stdlib";
import * as backend from "./reach-backend/index.main.mjs";


const stdlib = loadStdlib({
    ...process.env,
    // 'REACH_CONNECTOR_MODE': 'ALGO',
});

stdlib.setWalletFallback(stdlib.walletFallback({
    providerEnv: 'TestNet', ALGO_MyAlgoConnect,
}));


export function formatCurrency(amount) {
    if ( isNaN(amount) ) return '-';
    return stdlib.formatCurrency(amount, 4);
}

export function parseCurrency(amount) {
    if ( isNaN(amount) ) return 0;
    return stdlib.parseCurrency(amount);
}


export async function getBalance(account) {
    return formatCurrency(await stdlib.balanceOf(account) );
}


export function getStandardUnit() {
    return stdlib.standardUnit;
}


export function getConnector() {
    return stdlib.connector;
}

export function getRandom() {
    return stdlib.hasRandom.random;
}


export function outcomeString(outcome, isDealer) {
    if (outcome === null) return "Undetermined";

    outcome = parseInt(outcome);
    if (outcome === 0) return 'Tie';
    if (outcome === 3) return 'Game ongoing';
    if (outcome === 1) return isDealer ? 'You Won' : 'You Lost';
    if (outcome === 2) return isDealer ? 'You Lost' : 'You Won';

    throw new Error('Invalid outcome passed into outcomeString()');
}



export function deployContract(account) {
    return account.contract( backend );
}

export function attachContract(account, contractInfo) {
    return account.contract( backend, contractInfo );
}


export function attachDealerInteract(contract, dealerInteract) {
    backend.MorraDealer(contract, dealerInteract);
}

export function attachPlayerInteract(contract, playerInteract) {
    backend.MorraPlayer(contract, playerInteract);
}