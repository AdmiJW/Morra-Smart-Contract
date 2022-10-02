'reach 0.1';


const [ isOutcome, TIE, ALICE_WIN, BOB_WIN ] = makeEnum(3); 


function getOutcome(totalFingers, aliceGuess, bobGuess) {
    if (aliceGuess === bobGuess) return TIE;
    else if (aliceGuess === totalFingers) return ALICE_WIN;
    else if (bobGuess === totalFingers) return BOB_WIN;
    else return TIE;
}




//============================================
// Assertions
//============================================
forall(UInt, (totalFinger)=> {
    forall(UInt, (aliceGuess)=> {
        forall(UInt, (bobGuess)=> {
            assert( isOutcome( getOutcome(totalFinger, aliceGuess, bobGuess) ) );
        });
    });
});


forall(UInt, (hand)=> assert( getOutcome(hand, hand, hand) === TIE ) );
forall(UInt, (hand)=> assert( getOutcome(hand, hand, hand+1) === ALICE_WIN ) );
forall(UInt, (hand)=> assert( getOutcome(hand, hand+1, hand) === BOB_WIN ) );


//============================================
// Interact Interface
//============================================
const MorraPartipantInterface = {
    getFingers: Fun([], UInt),
    getGuess: Fun([], UInt),
    // For seeOutcome, the parameters are ( totalFingers, outcome )
    seeOutcome: Fun([UInt, UInt], Null),
    notifyTimeout: Fun([], Null),
    concludeGame: Fun([], Null),
}

const MorraDealerInterface = {
    ...MorraPartipantInterface,
    ...hasRandom,

    wager: UInt,
    deadline: UInt,
};

const MorraPlayerInterface = {
    ...MorraPartipantInterface,

    acceptWager: Fun([UInt], Bool),
    
};





export const main = Reach.App(() => {
    const MorraDealer = Participant('MorraDealer', {
        ...MorraDealerInterface
    });
    const MorraPlayer = Participant('MorraPlayer', {
        ...MorraPlayerInterface
    });
    init();


    function notifyTimeout() {
        each([MorraDealer, MorraPlayer], ()=> interact.notifyTimeout() );
    }
    


    MorraDealer.only(()=> {
        const wager = declassify( interact.wager );
        const deadline = declassify( interact.deadline );
    });
    MorraDealer
        .publish(wager, deadline)
        .pay(wager);
    commit();


    MorraPlayer.only(()=> {
        const acceptWager = declassify( interact.acceptWager(wager) );
    });
    MorraPlayer
        .publish(acceptWager)
        .pay(wager)
        .timeout( relativeTime(deadline), ()=> closeTo(MorraDealer, notifyTimeout) );
    

    var outcome = TIE;
    invariant( balance() === wager * 2 && isOutcome(outcome) );
    while (outcome === TIE) {
        commit();

        // Alice move
        MorraDealer.only(()=> {
            const _aliceFingers = interact.getFingers();
            const _aliceGuess = interact.getGuess();
    
            const [ _commitAliceFingers, _saltAliceFingers ] = makeCommitment( interact, _aliceFingers );
            const [ _commitAliceGuess, _saltAliceGuess ] = makeCommitment( interact, _aliceGuess );
            const commitAliceFingers = declassify( _commitAliceFingers );
            const commitAliceGuess = declassify( _commitAliceGuess );
        });
        MorraDealer
            .publish(commitAliceFingers, commitAliceGuess)
            .timeout( relativeTime(deadline), ()=> closeTo(MorraPlayer, notifyTimeout) );
        commit();

        unknowable(MorraPlayer, MorraDealer(_aliceFingers, _aliceGuess) );

        // Bob move
        MorraPlayer.only(()=> {
            const bobFingers = declassify( interact.getFingers() );
            const bobGuess = declassify( interact.getGuess() );

            check(bobFingers >= 0 && bobFingers <= 5, "Played fingers must be between 0 and 5");
            check(bobGuess >= 0 && bobGuess <= 10, "Guess must be between 0 and 10");
        });
        MorraPlayer
            .publish(bobFingers, bobGuess)
            .timeout( relativeTime(deadline), ()=> closeTo(MorraDealer, notifyTimeout) );

        commit();


        // Alice reveal her hand.
        MorraDealer.only(()=> {
            const aliceFingers = declassify( _aliceFingers );
            const aliceGuess = declassify( _aliceGuess );
            const saltAliceFingers = declassify( _saltAliceFingers );
            const saltAliceGuess = declassify( _saltAliceGuess );

            check(aliceFingers >= 0 && aliceFingers <= 5, "Played fingers must be between 0 and 5");
            check(aliceGuess >= 0 && aliceGuess <= 10, "Guess must be between 0 and 10");
        })
        MorraDealer
            .publish(aliceFingers, aliceGuess, saltAliceFingers, saltAliceGuess)
            .timeout( relativeTime(deadline), ()=> closeTo(MorraPlayer, notifyTimeout) );

        checkCommitment( commitAliceFingers, saltAliceFingers, aliceFingers );
        checkCommitment( commitAliceGuess, saltAliceGuess, aliceGuess );

        const totalFingers = aliceFingers + bobFingers;
        const localOutcome = getOutcome(totalFingers, aliceGuess, bobGuess);

        
        each([MorraDealer, MorraPlayer], ()=> {
            interact.seeOutcome(totalFingers, localOutcome);
        });

        outcome = localOutcome;
        continue;
    }
    
    assert( outcome === ALICE_WIN || outcome === BOB_WIN );

    
    transfer( wager * 2 ).to( outcome === ALICE_WIN ? MorraDealer : MorraPlayer );
    commit();

    each([MorraDealer, MorraPlayer], ()=> interact.concludeGame() );

    exit();
});
