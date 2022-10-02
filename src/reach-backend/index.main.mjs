// Automatically generated with Reach 0.1.12 (af6530ae)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (af6530ae)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function MorraDealer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for MorraDealer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for MorraDealer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v432 = stdlib.protect(ctc0, interact.deadline, 'for MorraDealer\'s interact field deadline');
  const v433 = stdlib.protect(ctc0, interact.wager, 'for MorraDealer\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v433, v432],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:85:10:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v433, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v437, v438], secs: v440, time: v439, didSend: v74, from: v436 } = txn1;
      
      sim_r.txns.push({
        amt: v437,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v449 = stdlib.safeAdd(v439, v438);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v437, v438], secs: v440, time: v439, didSend: v74, from: v436 } = txn1;
  ;
  const v449 = stdlib.safeAdd(v439, v438);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: ['time', v449],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v436, v437, v438, v449],
      evt_cnt: 0,
      funcNum: 2,
      lct: v439,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v630, time: v629, didSend: v367, from: v628 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v436,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v630, time: v629, didSend: v367, from: v628 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.notifyTimeout(), {
      at: './index.rsh:75:69:application',
      fs: ['at ./index.rsh:75:13:application call to [unknown function] (defined at: ./index.rsh:75:44:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:5:function exp)', 'at ./index.rsh:96:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'notifyTimeout',
      who: 'MorraDealer'
      });
    
    return;
    
    }
  else {
    const {data: [v455], secs: v457, time: v456, didSend: v85, from: v454 } = txn2;
    const v459 = stdlib.add(v437, v437);
    ;
    let v460 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    let v461 = v456;
    let v468 = v459;
    
    let txn3 = txn2;
    while (await (async () => {
      const v476 = stdlib.eq(v460, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      
      return v476;})()) {
      const v483 = stdlib.safeAdd(v461, v438);
      const v487 = stdlib.protect(ctc0, await interact.getFingers(), {
        at: './index.rsh:106:54:application',
        fs: ['at ./index.rsh:105:25:application call to [unknown function] (defined at: ./index.rsh:105:28:function exp)'],
        msg: 'getFingers',
        who: 'MorraDealer'
        });
      const v488 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:107:50:application',
        fs: ['at ./index.rsh:105:25:application call to [unknown function] (defined at: ./index.rsh:105:28:function exp)'],
        msg: 'getGuess',
        who: 'MorraDealer'
        });
      const v489 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:109:78:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:105:25:application call to [unknown function] (defined at: ./index.rsh:105:28:function exp)'],
        msg: 'random',
        who: 'MorraDealer'
        });
      const v490 = stdlib.digest([ctc0, ctc0], [v489, v487]);
      const v492 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:110:74:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:105:25:application call to [unknown function] (defined at: ./index.rsh:105:28:function exp)'],
        msg: 'random',
        who: 'MorraDealer'
        });
      const v493 = stdlib.digest([ctc0, ctc0], [v492, v488]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v436, v437, v438, v454, v468, v483, v490, v493],
        evt_cnt: 2,
        funcNum: 4,
        lct: v461,
        onlyIf: true,
        out_tys: [ctc2, ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:115:14:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v496, v497], secs: v499, time: v498, didSend: v117, from: v495 } = txn4;
          
          ;
          const v507 = stdlib.safeAdd(v498, v438);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v483],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v436, v437, v438, v454, v468, v483],
          evt_cnt: 0,
          funcNum: 5,
          lct: v461,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v600, time: v599, didSend: v318, from: v598 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v454,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v600, time: v599, didSend: v318, from: v598 } = txn5;
        ;
        const v601 = stdlib.addressEq(v436, v598);
        const v602 = stdlib.addressEq(v454, v598);
        const v603 = v601 ? true : v602;
        stdlib.assert(v603, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:116:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'MorraDealer'
          });
        ;
        stdlib.protect(ctc3, await interact.notifyTimeout(), {
          at: './index.rsh:75:69:application',
          fs: ['at ./index.rsh:75:13:application call to [unknown function] (defined at: ./index.rsh:75:44:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:5:function exp)', 'at ./index.rsh:116:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'notifyTimeout',
          who: 'MorraDealer'
          });
        
        return;
        
        }
      else {
        const {data: [v496, v497], secs: v499, time: v498, didSend: v117, from: v495 } = txn4;
        ;
        const v500 = stdlib.addressEq(v436, v495);
        stdlib.assert(v500, {
          at: './index.rsh:115:14:dot',
          fs: [],
          msg: 'sender correct',
          who: 'MorraDealer'
          });
        const v507 = stdlib.safeAdd(v498, v438);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v507],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v436, v437, v438, v454, v468, v496, v497, v507],
            evt_cnt: 0,
            funcNum: 7,
            lct: v498,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v584, time: v583, didSend: v284, from: v582 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v436,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v584, time: v583, didSend: v284, from: v582 } = txn6;
          ;
          const v585 = stdlib.addressEq(v436, v582);
          const v586 = stdlib.addressEq(v454, v582);
          const v587 = v585 ? true : v586;
          stdlib.assert(v587, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:131:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'MorraDealer'
            });
          ;
          stdlib.protect(ctc3, await interact.notifyTimeout(), {
            at: './index.rsh:75:69:application',
            fs: ['at ./index.rsh:75:13:application call to [unknown function] (defined at: ./index.rsh:75:44:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:5:function exp)', 'at ./index.rsh:131:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'notifyTimeout',
            who: 'MorraDealer'
            });
          
          return;
          
          }
        else {
          const {data: [v522, v523], secs: v525, time: v524, didSend: v165, from: v521 } = txn5;
          ;
          const v526 = stdlib.addressEq(v454, v521);
          stdlib.assert(v526, {
            at: './index.rsh:130:14:dot',
            fs: [],
            msg: 'sender correct',
            who: 'MorraDealer'
            });
          const v533 = stdlib.safeAdd(v524, v438);
          const v537 = stdlib.ge(v487, stdlib.checkedBigNumberify('./index.rsh:143:35:decimal', stdlib.UInt_max, '0'));
          const v538 = stdlib.le(v487, stdlib.checkedBigNumberify('./index.rsh:143:56:decimal', stdlib.UInt_max, '5'));
          const v539 = v537 ? v538 : false;
          stdlib.assert(v539, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:143:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:25:application call to [unknown function] (defined at: ./index.rsh:137:28:function exp)'],
            msg: 'Played fingers must be between 0 and 5',
            who: 'MorraDealer'
            });
          const v541 = stdlib.ge(v488, stdlib.checkedBigNumberify('./index.rsh:144:33:decimal', stdlib.UInt_max, '0'));
          const v542 = stdlib.le(v488, stdlib.checkedBigNumberify('./index.rsh:144:52:decimal', stdlib.UInt_max, '10'));
          const v543 = v541 ? v542 : false;
          stdlib.assert(v543, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:144:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:25:application call to [unknown function] (defined at: ./index.rsh:137:28:function exp)'],
            msg: 'Guess must be between 0 and 10',
            who: 'MorraDealer'
            });
          
          const txn6 = await (ctc.sendrecv({
            args: [v436, v437, v438, v454, v468, v496, v497, v522, v523, v533, v487, v488, v489, v492],
            evt_cnt: 4,
            funcNum: 8,
            lct: v524,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:147:14:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v546, v547, v548, v549], secs: v551, time: v550, didSend: v213, from: v545 } = txn6;
              
              ;
              const v557 = stdlib.safeAdd(v546, v522);
              let v558;
              const v559 = stdlib.eq(v547, v523);
              if (v559) {
                v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                const v560 = stdlib.eq(v547, v557);
                if (v560) {
                  v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                else {
                  const v561 = stdlib.eq(v523, v557);
                  if (v561) {
                    v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                    }
                  }
                }
              
              const cv460 = v558;
              const cv461 = v550;
              const cv468 = v468;
              
              await (async () => {
                const v460 = cv460;
                const v461 = cv461;
                const v468 = cv468;
                
                if (await (async () => {
                  const v476 = stdlib.eq(v460, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  
                  return v476;})()) {
                  const v483 = stdlib.safeAdd(v461, v438);
                  sim_r.isHalt = false;
                  }
                else {
                  const v614 = stdlib.eq(v460, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  const v617 = stdlib.safeMul(v437, stdlib.checkedBigNumberify('./index.rsh:168:23:decimal', stdlib.UInt_max, '2'));
                  const v619 = v614 ? v436 : v454;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v619,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v533],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v436, v437, v438, v454, v468, v496, v497, v522, v523, v533],
              evt_cnt: 0,
              funcNum: 9,
              lct: v524,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v568, time: v567, didSend: v250, from: v566 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v454,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v568, time: v567, didSend: v250, from: v566 } = txn7;
            ;
            const v569 = stdlib.addressEq(v436, v566);
            const v570 = stdlib.addressEq(v454, v566);
            const v571 = v569 ? true : v570;
            stdlib.assert(v571, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:148:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'MorraDealer'
              });
            ;
            stdlib.protect(ctc3, await interact.notifyTimeout(), {
              at: './index.rsh:75:69:application',
              fs: ['at ./index.rsh:75:13:application call to [unknown function] (defined at: ./index.rsh:75:44:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:5:function exp)', 'at ./index.rsh:148:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'notifyTimeout',
              who: 'MorraDealer'
              });
            
            return;
            
            }
          else {
            const {data: [v546, v547, v548, v549], secs: v551, time: v550, didSend: v213, from: v545 } = txn6;
            ;
            const v552 = stdlib.addressEq(v436, v545);
            stdlib.assert(v552, {
              at: './index.rsh:147:14:dot',
              fs: [],
              msg: 'sender correct',
              who: 'MorraDealer'
              });
            const v553 = stdlib.digest([ctc0, ctc0], [v548, v546]);
            const v554 = stdlib.digestEq(v496, v553);
            stdlib.assert(v554, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:150:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'MorraDealer'
              });
            const v555 = stdlib.digest([ctc0, ctc0], [v549, v547]);
            const v556 = stdlib.digestEq(v497, v555);
            stdlib.assert(v556, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:151:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'MorraDealer'
              });
            const v557 = stdlib.safeAdd(v546, v522);
            let v558;
            const v559 = stdlib.eq(v547, v523);
            if (v559) {
              v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
              }
            else {
              const v560 = stdlib.eq(v547, v557);
              if (v560) {
                v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v561 = stdlib.eq(v523, v557);
                if (v561) {
                  v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                }
              }
            stdlib.protect(ctc3, await interact.seeOutcome(v557, v558), {
              at: './index.rsh:158:32:application',
              fs: ['at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:44:function exp)'],
              msg: 'seeOutcome',
              who: 'MorraDealer'
              });
            
            const cv460 = v558;
            const cv461 = v550;
            const cv468 = v468;
            
            v460 = cv460;
            v461 = cv461;
            v468 = cv468;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v614 = stdlib.eq(v460, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    const v617 = stdlib.safeMul(v437, stdlib.checkedBigNumberify('./index.rsh:168:23:decimal', stdlib.UInt_max, '2'));
    const v619 = v614 ? v436 : v454;
    ;
    stdlib.protect(ctc3, await interact.concludeGame(), {
      at: './index.rsh:171:64:application',
      fs: ['at ./index.rsh:171:9:application call to [unknown function] (defined at: ./index.rsh:171:40:function exp)'],
      msg: 'concludeGame',
      who: 'MorraDealer'
      });
    
    return;
    }
  
  
  
  };
export async function MorraPlayer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for MorraPlayer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for MorraPlayer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v437, v438], secs: v440, time: v439, didSend: v74, from: v436 } = txn1;
  ;
  const v449 = stdlib.safeAdd(v439, v438);
  const v453 = stdlib.protect(ctc1, await interact.acceptWager(v437), {
    at: './index.rsh:91:61:application',
    fs: ['at ./index.rsh:90:21:application call to [unknown function] (defined at: ./index.rsh:90:24:function exp)'],
    msg: 'acceptWager',
    who: 'MorraPlayer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v436, v437, v438, v449, v453],
    evt_cnt: 1,
    funcNum: 1,
    lct: v439,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [v437, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v455], secs: v457, time: v456, didSend: v85, from: v454 } = txn2;
      
      const v459 = stdlib.add(v437, v437);
      sim_r.txns.push({
        amt: v437,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v460 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      const v461 = v456;
      const v468 = v459;
      
      if (await (async () => {
        const v476 = stdlib.eq(v460, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        
        return v476;})()) {
        const v483 = stdlib.safeAdd(v461, v438);
        sim_r.isHalt = false;
        }
      else {
        const v614 = stdlib.eq(v460, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v617 = stdlib.safeMul(v437, stdlib.checkedBigNumberify('./index.rsh:168:23:decimal', stdlib.UInt_max, '2'));
        const v619 = v614 ? v436 : v454;
        sim_r.txns.push({
          kind: 'from',
          to: v619,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v449],
    tys: [ctc4, ctc0, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v436, v437, v438, v449],
      evt_cnt: 0,
      funcNum: 2,
      lct: v439,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v630, time: v629, didSend: v367, from: v628 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v436,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v630, time: v629, didSend: v367, from: v628 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.notifyTimeout(), {
      at: './index.rsh:75:69:application',
      fs: ['at ./index.rsh:75:13:application call to [unknown function] (defined at: ./index.rsh:75:44:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:5:function exp)', 'at ./index.rsh:96:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'notifyTimeout',
      who: 'MorraPlayer'
      });
    
    return;
    
    }
  else {
    const {data: [v455], secs: v457, time: v456, didSend: v85, from: v454 } = txn2;
    const v459 = stdlib.add(v437, v437);
    ;
    let v460 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    let v461 = v456;
    let v468 = v459;
    
    let txn3 = txn2;
    while (await (async () => {
      const v476 = stdlib.eq(v460, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      
      return v476;})()) {
      const v483 = stdlib.safeAdd(v461, v438);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v483],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v436, v437, v438, v454, v468, v483],
          evt_cnt: 0,
          funcNum: 5,
          lct: v461,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v600, time: v599, didSend: v318, from: v598 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v454,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v600, time: v599, didSend: v318, from: v598 } = txn5;
        ;
        const v601 = stdlib.addressEq(v436, v598);
        const v602 = stdlib.addressEq(v454, v598);
        const v603 = v601 ? true : v602;
        stdlib.assert(v603, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:116:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'MorraPlayer'
          });
        ;
        stdlib.protect(ctc3, await interact.notifyTimeout(), {
          at: './index.rsh:75:69:application',
          fs: ['at ./index.rsh:75:13:application call to [unknown function] (defined at: ./index.rsh:75:44:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:5:function exp)', 'at ./index.rsh:116:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'notifyTimeout',
          who: 'MorraPlayer'
          });
        
        return;
        
        }
      else {
        const {data: [v496, v497], secs: v499, time: v498, didSend: v117, from: v495 } = txn4;
        ;
        const v500 = stdlib.addressEq(v436, v495);
        stdlib.assert(v500, {
          at: './index.rsh:115:14:dot',
          fs: [],
          msg: 'sender correct',
          who: 'MorraPlayer'
          });
        const v507 = stdlib.safeAdd(v498, v438);
        const v511 = stdlib.protect(ctc0, await interact.getFingers(), {
          at: './index.rsh:123:63:application',
          fs: ['at ./index.rsh:122:25:application call to [unknown function] (defined at: ./index.rsh:122:28:function exp)'],
          msg: 'getFingers',
          who: 'MorraPlayer'
          });
        const v512 = stdlib.protect(ctc0, await interact.getGuess(), {
          at: './index.rsh:124:59:application',
          fs: ['at ./index.rsh:122:25:application call to [unknown function] (defined at: ./index.rsh:122:28:function exp)'],
          msg: 'getGuess',
          who: 'MorraPlayer'
          });
        const v513 = stdlib.ge(v511, stdlib.checkedBigNumberify('./index.rsh:126:33:decimal', stdlib.UInt_max, '0'));
        const v514 = stdlib.le(v511, stdlib.checkedBigNumberify('./index.rsh:126:52:decimal', stdlib.UInt_max, '5'));
        const v515 = v513 ? v514 : false;
        stdlib.assert(v515, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:126:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:122:25:application call to [unknown function] (defined at: ./index.rsh:122:28:function exp)'],
          msg: 'Played fingers must be between 0 and 5',
          who: 'MorraPlayer'
          });
        const v517 = stdlib.ge(v512, stdlib.checkedBigNumberify('./index.rsh:127:31:decimal', stdlib.UInt_max, '0'));
        const v518 = stdlib.le(v512, stdlib.checkedBigNumberify('./index.rsh:127:48:decimal', stdlib.UInt_max, '10'));
        const v519 = v517 ? v518 : false;
        stdlib.assert(v519, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:127:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:122:25:application call to [unknown function] (defined at: ./index.rsh:122:28:function exp)'],
          msg: 'Guess must be between 0 and 10',
          who: 'MorraPlayer'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v436, v437, v438, v454, v468, v496, v497, v507, v511, v512],
          evt_cnt: 2,
          funcNum: 6,
          lct: v498,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:130:14:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v522, v523], secs: v525, time: v524, didSend: v165, from: v521 } = txn5;
            
            ;
            const v533 = stdlib.safeAdd(v524, v438);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v507],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v436, v437, v438, v454, v468, v496, v497, v507],
            evt_cnt: 0,
            funcNum: 7,
            lct: v498,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v584, time: v583, didSend: v284, from: v582 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v436,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v584, time: v583, didSend: v284, from: v582 } = txn6;
          ;
          const v585 = stdlib.addressEq(v436, v582);
          const v586 = stdlib.addressEq(v454, v582);
          const v587 = v585 ? true : v586;
          stdlib.assert(v587, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:131:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'MorraPlayer'
            });
          ;
          stdlib.protect(ctc3, await interact.notifyTimeout(), {
            at: './index.rsh:75:69:application',
            fs: ['at ./index.rsh:75:13:application call to [unknown function] (defined at: ./index.rsh:75:44:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:5:function exp)', 'at ./index.rsh:131:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'notifyTimeout',
            who: 'MorraPlayer'
            });
          
          return;
          
          }
        else {
          const {data: [v522, v523], secs: v525, time: v524, didSend: v165, from: v521 } = txn5;
          ;
          const v526 = stdlib.addressEq(v454, v521);
          stdlib.assert(v526, {
            at: './index.rsh:130:14:dot',
            fs: [],
            msg: 'sender correct',
            who: 'MorraPlayer'
            });
          const v533 = stdlib.safeAdd(v524, v438);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v533],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v436, v437, v438, v454, v468, v496, v497, v522, v523, v533],
              evt_cnt: 0,
              funcNum: 9,
              lct: v524,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v568, time: v567, didSend: v250, from: v566 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v454,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v568, time: v567, didSend: v250, from: v566 } = txn7;
            ;
            const v569 = stdlib.addressEq(v436, v566);
            const v570 = stdlib.addressEq(v454, v566);
            const v571 = v569 ? true : v570;
            stdlib.assert(v571, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:148:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'MorraPlayer'
              });
            ;
            stdlib.protect(ctc3, await interact.notifyTimeout(), {
              at: './index.rsh:75:69:application',
              fs: ['at ./index.rsh:75:13:application call to [unknown function] (defined at: ./index.rsh:75:44:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:5:function exp)', 'at ./index.rsh:148:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'notifyTimeout',
              who: 'MorraPlayer'
              });
            
            return;
            
            }
          else {
            const {data: [v546, v547, v548, v549], secs: v551, time: v550, didSend: v213, from: v545 } = txn6;
            ;
            const v552 = stdlib.addressEq(v436, v545);
            stdlib.assert(v552, {
              at: './index.rsh:147:14:dot',
              fs: [],
              msg: 'sender correct',
              who: 'MorraPlayer'
              });
            const v553 = stdlib.digest([ctc0, ctc0], [v548, v546]);
            const v554 = stdlib.digestEq(v496, v553);
            stdlib.assert(v554, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:150:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'MorraPlayer'
              });
            const v555 = stdlib.digest([ctc0, ctc0], [v549, v547]);
            const v556 = stdlib.digestEq(v497, v555);
            stdlib.assert(v556, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:151:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'MorraPlayer'
              });
            const v557 = stdlib.safeAdd(v546, v522);
            let v558;
            const v559 = stdlib.eq(v547, v523);
            if (v559) {
              v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
              }
            else {
              const v560 = stdlib.eq(v547, v557);
              if (v560) {
                v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v561 = stdlib.eq(v523, v557);
                if (v561) {
                  v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                }
              }
            stdlib.protect(ctc3, await interact.seeOutcome(v557, v558), {
              at: './index.rsh:158:32:application',
              fs: ['at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:44:function exp)'],
              msg: 'seeOutcome',
              who: 'MorraPlayer'
              });
            
            const cv460 = v558;
            const cv461 = v550;
            const cv468 = v468;
            
            v460 = cv460;
            v461 = cv461;
            v468 = cv468;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v614 = stdlib.eq(v460, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    const v617 = stdlib.safeMul(v437, stdlib.checkedBigNumberify('./index.rsh:168:23:decimal', stdlib.UInt_max, '2'));
    const v619 = v614 ? v436 : v454;
    ;
    stdlib.protect(ctc3, await interact.concludeGame(), {
      at: './index.rsh:171:64:application',
      fs: ['at ./index.rsh:171:9:application call to [unknown function] (defined at: ./index.rsh:171:40:function exp)'],
      msg: 'concludeGame',
      who: 'MorraPlayer'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAOAAFQCAUJIAcCKJgBqAFYMCYDAQABAQAiNQAxGEEFFypkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAApdJIQcMQAGLSSUMQAEySSEFDEAAViEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABKIFZo6wMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgQvSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf+BoAFbNf5JNQVJSiJbNf0lWzX8gRBbNfuBGFs1+oAEf6I7UjT9FlA0/BZQNPsWUDT6FlCwMgY0AyELWwxENP8xABJENANXWCA0+xY0/RZQARJENANXeCA0+hY0/BZQARJENP00AyEKWwg1+TT8NP4SQQAGIjX4QgAgNPw0+RJBAAYjNfhCABI0/jT5EkEAByEINfhCAAMiNfg0/zQDIQZbNAMhCVs0A1cwIDT4MgY0AyRbQgL5SCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AE4huzqbAyBjQDIQpbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCAwdJgQYMQACuSCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf8hBls1/iEJWzX9VzAgNfwkWzX7V1ggNfpXeCA1+Uk1BUkiWzX4JVs194AESiHL/DT4FlA09xZQsDIGNAMhClsMRDT8MQASRDIGNP0INfY0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09xZQNPYWUChLAVcAf2cpSwFXfzFnSCEFNQEyBjUCQgJuSCEENAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIQxbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCAgJJIQgMQADgSYEEDEAAmEghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBls1/iEJWzX9VzAgNfwkWzX7STUFSVcAIDX6VyAgNfmABGBdpCs0+lA0+VCwMgY0AyEMWwxENP8xABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUChLAVcAf2cpSwFXfyFnSCEHNQEyBjUCQgF4IQgSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDVsPRLEisgE0AyEGW7III7IQNANXACCyB7NCARtJIwxAAFVIIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQZbNf9JNQUXNf6ABA+/xjQ0/hZRBwhQsDIGNAMhDVsMRDT/iAFGNANXACA0/zQDIQlbMQAiMgY0/0kIQgBfSIGgjQaIASYiNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwNP+IAPYyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAH01/zX+Nf01/DX7Nfo1+TT9IhJBAC80/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0ghBDUBMgY1AkIAObEisgE0+iEIC7III7IQNPw0+TT9IxJNsgezQgAAMRkhBBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v437",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v438",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v437",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v438",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v455",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v496",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v497",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v522",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v523",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v546",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v547",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v548",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v549",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v455",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v496",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v497",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v522",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v523",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v546",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v547",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v548",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v549",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001df638038062001df68339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611a79806200037d6000396000f3fe60806040526004361061009a5760003560e01c80639a3e3912116100615780639a3e391214610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780637eea518c146100da57806383230757146100ed5780638e3147691461010257005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611540565b610197565b6100a16100e8366004611575565b6103fc565b3480156100f957600080fd5b506001546100b4565b6100a1610110366004611575565b61057a565b6100a1610123366004611575565b610715565b34801561013457600080fd5b5061013d6108a4565b6040516100be929190611591565b6100a1610159366004611575565b610941565b6100a161016c3660046115ee565b610ad8565b6100a161017f366004611575565b610dd2565b6100a1610192366004611540565b610f2d565b6101a7600760005414601c61119e565b6101c1813515806101ba57506001548235145b601d61119e565b6000808055600280546101d390611600565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90611600565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611689565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e61119e565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be929190611735565b60405180910390a16102d23415601a61119e565b60608201516102ed906001600160a01b03163314601b61119e565b6102fb4383604001516111c4565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516103d191839101611766565b604051602081830303815290604052600290805190602001906103f59291906113f9565b5050505050565b61040c600160005414600d61119e565b6104268135158061041f57506001548235145b600e61119e565b60008080556002805461043890611600565b80601f016020809104026020016040519081016040528092919081815260200182805461046490611600565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b50505050508060200190518101906104c991906117ed565b90506104dd8160600151431015600f61119e565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161050e929190611876565b60405180910390a16105223415600c61119e565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561055f573d6000803e3d6000fd5b50600080805560018190556105769060029061147d565b5050565b61058a600560005414601761119e565b6105a48135158061059d57506001548235145b601861119e565b6000808055600280546105b690611600565b80601f01602080910402602001604051908101604052809291908181526020018280546105e290611600565b801561062f5780601f106106045761010080835404028352916020019161062f565b820191906000526020600020905b81548152906001019060200180831161061257829003601f168201915b505050505080602001905181019061064791906118ab565b905061065b8160a00151431015601961119e565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161068c929190611876565b60405180910390a16106a03415601561119e565b80516106d4906001600160a01b031633146106ca5760608201516001600160a01b031633146106cd565b60015b601661119e565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f1935050505015801561055f573d6000803e3d6000fd5b610725600160005414600961119e565b61073f8135158061073857506001548235145b600a61119e565b60008080556002805461075190611600565b80601f016020809104026020016040519081016040528092919081815260200182805461077d90611600565b80156107ca5780601f1061079f576101008083540402835291602001916107ca565b820191906000526020600020905b8154815290600101906020018083116107ad57829003601f168201915b50505050508060200190518101906107e291906117ed565b90506107f581606001514310600b61119e565b7fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f49153383604051610826929190611876565b60405180910390a161083f81602001513414600861119e565b6108476114ba565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160009052514392019190915251800160208201516040015261089f81611217565b505050565b6000606060005460028080546108b990611600565b80601f01602080910402602001604051908101604052809291908181526020018280546108e590611600565b80156109325780601f1061090757610100808354040283529160200191610932565b820191906000526020600020905b81548152906001019060200180831161091557829003601f168201915b50505050509050915091509091565b610951600760005414602161119e565b61096b8135158061096457506001548235145b602261119e565b60008080556002805461097d90611600565b80601f01602080910402602001604051908101604052809291908181526020018280546109a990611600565b80156109f65780601f106109cb576101008083540402835291602001916109f6565b820191906000526020600020905b8154815290600101906020018083116109d957829003601f168201915b5050505050806020019051810190610a0e9190611689565b9050610a228160e00151431015602361119e565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a53929190611876565b60405180910390a1610a673415601f61119e565b8051610a9b906001600160a01b03163314610a915760608201516001600160a01b03163314610a94565b60015b602061119e565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561055f573d6000803e3d6000fd5b610ae8600960005414602861119e565b610b0281351580610afb57506001548235145b602961119e565b600080805560028054610b1490611600565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4090611600565b8015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b820191906000526020600020905b815481529060010190602001808311610b7057829003601f168201915b5050505050806020019051810190610ba5919061193f565b9050610bc4604051806040016040528060008152602001600081525090565b610bd68261012001514310602a61119e565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c493415602461119e565b8151610c61906001600160a01b03163314602561119e565b604051610cae90610c88906060860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114602661119e565b60408051608085013560208201528482013591810191909152610cf4906060016040516020818303038152906040528051906020012060001c8360c0015114602761119e565b610d0983602001600001358360e001516111c4565b815261010082015160408401351415610d285760006020820152610d63565b805160408401351415610d415760016020820152610d63565b80516101008301511415610d5b5760026020820152610d63565b600060208201525b610d6b6114ba565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185519416930192909252838101518184018051919091528051439201919091526080850151905190910152610dcc81611217565b50505050565b610de2600960005414602d61119e565b610dfc81351580610df557506001548235145b602e61119e565b600080805560028054610e0e90611600565b80601f0160208091040260200160405190810160405280929190818152602001828054610e3a90611600565b8015610e875780601f10610e5c57610100808354040283529160200191610e87565b820191906000526020600020905b815481529060010190602001808311610e6a57829003601f168201915b5050505050806020019051810190610e9f919061193f565b9050610eb4816101200151431015602f61119e565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610ee5929190611876565b60405180910390a1610ef93415602b61119e565b80516106d4906001600160a01b03163314610f235760608201516001600160a01b03163314610f26565b60015b602c61119e565b610f3d600560005414601261119e565b610f5781351580610f5057506001548235145b601361119e565b600080805560028054610f6990611600565b80601f0160208091040260200160405190810160405280929190818152602001828054610f9590611600565b8015610fe25780601f10610fb757610100808354040283529160200191610fe2565b820191906000526020600020905b815481529060010190602001808311610fc557829003601f168201915b5050505050806020019051810190610ffa91906118ab565b90506110126040518060200160405280600081525090565b6110238260a001514310601461119e565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051611054929190611735565b60405180910390a16110683415601061119e565b8151611080906001600160a01b03163314601161119e565b61108e4383604001516111c4565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260076000554360015590516103d19183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816105765760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826111d183826119ea565b91508110156112115760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016111bb565b92915050565b6040805160208101909152600081526020820151516113375761124a8260200151602001518360000151604001516111c4565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610dcc9291906113f9565b60208201515160011461134f57815160600151611353565b8151515b6001600160a01b03166108fc611372846000015160200151600261139a565b6040518115909202916000818181858888f1935050505015801561055f573d6000803e3d6000fd5b60008115806113be575082826113b08183611a02565b92506113bc9083611a21565b145b6112115760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016111bb565b82805461140590611600565b90600052602060002090601f016020900481019282611427576000855561146d565b82601f1061144057805160ff191683800117855561146d565b8280016001018555821561146d579182015b8281111561146d578251825591602001919060010190611452565b50611479929150611513565b5090565b50805461148990611600565b6000825580601f10611499575050565b601f0160209004906000526020600020908101906114b79190611513565b50565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161150e60405180606001604052806000815260200160008152602001600081525090565b905290565b5b808211156114795760008155600101611514565b60006060828403121561153a57600080fd5b50919050565b60006060828403121561155257600080fd5b61155c8383611528565b9392505050565b60006040828403121561153a57600080fd5b60006040828403121561158757600080fd5b61155c8383611563565b82815260006020604081840152835180604085015260005b818110156115c5578581018301518582016060015282016115a9565b818111156115d7576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561153a57600080fd5b600181811c9082168061161457607f821691505b6020821081141561153a57634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561166757634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461168457600080fd5b919050565b600061010080838503121561169d57600080fd5b6040519081019067ffffffffffffffff821181831017156116ce57634e487b7160e01b600052604160045260246000fd5b816040526116db8461166d565b815260208401516020820152604084015160408201526116fd6060850161166d565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161155c60208301848035825260208082013590830152604090810135910152565b81516001600160a01b031681526101408101602083015160208301526040830151604083015260608301516117a660608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000608082840312156117ff57600080fd5b6040516080810181811067ffffffffffffffff8211171561183057634e487b7160e01b600052604160045260246000fd5b60405261183c8361166d565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b8035801515811461168457600080fd5b6001600160a01b03831681528135602080830191909152606082019061189d908401611866565b151560408301529392505050565b600060c082840312156118bd57600080fd5b60405160c0810181811067ffffffffffffffff821117156118ee57634e487b7160e01b600052604160045260246000fd5b6040526118fa8361166d565b8152602083015160208201526040830151604082015261191c6060840161166d565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610140828403121561195257600080fd5b61195a611635565b6119638361166d565b815260208301516020820152604083015160408201526119856060840161166d565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156119fd576119fd6119d4565b500190565b6000816000190483118215151615611a1c57611a1c6119d4565b500290565b600082611a3e57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212200c0c2341b657230ab3b02fdbd78837ee9827225bf57545196b1971e5c2098af064736f6c634300080c0033`,
  BytecodeLen: 7670,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:87:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:96:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:169:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:102:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:116:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:117:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:131:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:133:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:148:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "MorraDealer": MorraDealer,
  "MorraPlayer": MorraPlayer
  };
export const _APIs = {
  };
