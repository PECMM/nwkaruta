const _0x4fc1d5=_0x4d11;(function(_0x220bf9,_0x40e2b2){const _0x555b12=_0x4d11,_0x3712f5=_0x220bf9();while(!![]){try{const _0x1ea243=parseInt(_0x555b12(0x123))/0x1+-parseInt(_0x555b12(0x150))/0x2+-parseInt(_0x555b12(0x122))/0x3+-parseInt(_0x555b12(0x12e))/0x4*(parseInt(_0x555b12(0x17d))/0x5)+-parseInt(_0x555b12(0x161))/0x6+parseInt(_0x555b12(0x121))/0x7+parseInt(_0x555b12(0x160))/0x8;if(_0x1ea243===_0x40e2b2)break;else _0x3712f5['push'](_0x3712f5['shift']());}catch(_0x31b95c){_0x3712f5['push'](_0x3712f5['shift']());}}}(_0x25ff,0xd27d0));function _0x25ff(){const _0x5c24a6=['reason','4OejVXW','add','public','takenTimeMS','values','MAX_VALUE','readyCount','joinMember','floor','correct','fastestUserName','delete','joinroom_playing_now','connection','socket.io','./conf.json','playing_now','room_member_list','useCardCount','success','joinroom_room_is_full','dataId','card_phase_acted','restCards','userNameMaxLength','ownerUserName','memberCount','userPointsMap','slice','user_disconnect_in_game','actionResults','forEach','room','leave_room_ok','1703340MxpnJl','from','start_play','actedDataMap','getMemberList','tag','appId','listen','random','padEnd','toString','takenTimeSec','totalCount','express','reduce','sort','6912424NGdsxm','616104YNfWBE','to_waiting_room','\x20文字以下にしてください','get','finish_play','all_ready_play','assign','card_phase_update_actinfo','http','joinroom_invaid_parameter','Server','map','env','duplicated_usename','wrong','disconnect','currentCard','leave_room','initialize','joinroom_duplicated_usename','card_phase_card_result','set','leave','value','currentTag','roomName','all_ready_next_card','room_is_full','1845465fbhAer','length','emit','size','action','cardId','click','substring','sockets','has','minTakenTimeMS','clear','game','currentIndex','ユーザ名は\x20','play','\x20...\x20','9545263QQBfaH','2313423dGpTbL','729086oYFTcb','userName','game_end','join_room','maxUserInRoom','PORT','rank','leaveMember','use','members'];_0x25ff=function(){return _0x5c24a6;};return _0x25ff();}const newRandomArray=_0x43d88d=>{const _0xbec673=_0x4d11,_0x2ba91c=Array[_0xbec673(0x151)](_0x43d88d);for(let _0x520f0=_0x2ba91c[_0xbec673(0x17e)]-0x1;_0x520f0>=0x0;_0x520f0--){const _0x539012=Math[_0xbec673(0x136)](Math[_0xbec673(0x158)]()*(_0x520f0+0x1));[_0x2ba91c[_0x520f0],_0x2ba91c[_0x539012]]=[_0x2ba91c[_0x539012],_0x2ba91c[_0x520f0]];}return _0x2ba91c;},nextRandomString=()=>{const _0x4e6565=_0x4d11;return Math['random']()[_0x4e6565(0x15a)](0x24)[_0x4e6565(0x184)](0x2)[_0x4e6565(0x159)](0xb,'0');},getRandomStrings=_0x4fbe77=>{const _0x1121d5=_0x4d11,_0x16fe89=new Set();while(_0x16fe89[_0x1121d5(0x180)]<_0x4fbe77){_0x16fe89['add'](nextRandomString());}return Array[_0x1121d5(0x151)](_0x16fe89);},getRandomRanged=(_0x1163cf,_0x379e8f)=>{const _0x1c37d6=_0x4d11;return Math['floor'](_0x1163cf+Math[_0x1c37d6(0x158)]()*(_0x379e8f-_0x1163cf));},getRankedArray=(_0x23d389,_0x427437)=>{const _0xc0073d=_0x4d11,_0x58771f=_0x23d389[_0xc0073d(0x16c)](_0x257d93=>Object[_0xc0073d(0x167)]({},_0x257d93))[_0xc0073d(0x15f)](_0x427437);return _0x58771f[_0xc0073d(0x15e)]((_0x52b139,_0x35ddfe,_0x896513)=>{const _0x5032f7=_0xc0073d;return!_0x52b139?_0x35ddfe[_0x5032f7(0x129)]=0x1:_0x35ddfe[_0x5032f7(0x129)]=_0x427437(_0x35ddfe,_0x52b139)===0x0?_0x52b139['rank']:_0x896513+0x1,_0x35ddfe;},null),_0x58771f;},express=require(_0x4fc1d5(0x15d)),app=express();function _0x4d11(_0x4b1b9b,_0x3af194){const _0x25ff39=_0x25ff();return _0x4d11=function(_0x4d1118,_0x3e7681){_0x4d1118=_0x4d1118-0x11b;let _0xca05ea=_0x25ff39[_0x4d1118];return _0xca05ea;},_0x4d11(_0x4b1b9b,_0x3af194);}app[_0x4fc1d5(0x12b)](express['static'](_0x4fc1d5(0x130)));const http=require(_0x4fc1d5(0x169))[_0x4fc1d5(0x16b)](app);http[_0x4fc1d5(0x157)](process[_0x4fc1d5(0x16d)][_0x4fc1d5(0x128)]||0xbb8);const io=require(_0x4fc1d5(0x13c))(http),rooms=((()=>{const _0x5c8bde=new Map(),_0x36350b=_0x504a17=>{return{'play':![],'game':{'actedDataMap':new Map(),'userPointsMap':new Map()},'ownerUserName':_0x504a17,'members':new Set([_0x504a17]),'getMemberList':function(){const _0x4f3550=_0x4d11;return Array[_0x4f3550(0x151)](this[_0x4f3550(0x12c)]);}};};return{'getMemberList':_0x336221=>{const _0x78cffd=_0x4d11;return _0x5c8bde[_0x78cffd(0x164)](_0x336221)?.[_0x78cffd(0x154)]()??[];},'joinMember':(_0x4f6882,_0x49b2eb,_0x360dbf)=>{const _0xe60ad4=_0x4d11;if(!_0x5c8bde[_0xe60ad4(0x186)](_0x4f6882)){const _0x2c0b96=_0x36350b(_0x49b2eb);return _0x5c8bde[_0xe60ad4(0x176)](_0x4f6882,_0x2c0b96),{'success':!![],'room':_0x2c0b96};}else{const _0x56cd23=_0x5c8bde[_0xe60ad4(0x164)](_0x4f6882);if(_0x56cd23['play'])return{'success':![],'reason':_0xe60ad4(0x13e)};if(_0x56cd23[_0xe60ad4(0x12c)][_0xe60ad4(0x180)]>=conf[_0xe60ad4(0x127)])return{'success':![],'reason':_0xe60ad4(0x17c)};return _0x56cd23[_0xe60ad4(0x12c)]['has'](_0x49b2eb)?{'success':![],'reason':_0xe60ad4(0x16e)}:(_0x56cd23[_0xe60ad4(0x12c)][_0xe60ad4(0x12f)](_0x49b2eb),{'success':!![],'room':_0x56cd23});}},'leaveMember':(_0x4369d7,_0x207dff)=>{const _0x301c24=_0x4d11,_0x22f1e8=_0x5c8bde[_0x301c24(0x164)](_0x4369d7);if(!_0x22f1e8)return;const _0xd8bb4e=_0x22f1e8['members'];_0xd8bb4e['delete'](_0x207dff),_0xd8bb4e[_0x301c24(0x180)]===0x0&&_0x5c8bde[_0x301c24(0x139)](_0x4369d7),_0x207dff===_0x22f1e8['ownerUserName']&&(_0x22f1e8[_0x301c24(0x147)]=_0xd8bb4e[_0x301c24(0x132)]()['next']()[_0x301c24(0x178)]);}};})());let userNumber=0x0;const conf=require(_0x4fc1d5(0x13d));io[_0x4fc1d5(0x185)]['on'](_0x4fc1d5(0x13b),_0xbb579e=>{const _0x4d1381=_0x4fc1d5,_0x2c476a={};let _0x27984e;const _0x13dc8a=_0x5d7858=>{const _0x3ee3b1=_0x4d11,_0x3d808c=0x10;console['log']('progress:'+_0x5d7858['padEnd'](_0x3d808c)+'\x20...\x20'+_0x2c476a['roomName']+_0x3ee3b1(0x120),Array[_0x3ee3b1(0x151)](_0x2c476a[_0x3ee3b1(0x14e)][_0x3ee3b1(0x12c)])['join'](','));};io['to'](_0xbb579e['id'])[_0x4d1381(0x17f)](_0x4d1381(0x173),{'userNameMaxLength':conf[_0x4d1381(0x146)],'userNumber':++userNumber});const _0x2de07b=_0x1ede19=>{const _0x3d8511=_0x4d1381;return{'memberList':_0x1ede19['getMemberList'](),'ownerUserName':_0x1ede19[_0x3d8511(0x147)]};};_0xbb579e['on'](_0x4d1381(0x126),_0x21b697=>{const _0x2aa963=_0x4d1381;if(_0x2c476a[_0x2aa963(0x17a)])return;if(!_0x21b697[_0x2aa963(0x156)]||!_0x21b697[_0x2aa963(0x143)]){_0x21b697['reason']='',io['to'](_0xbb579e['id'])[_0x2aa963(0x17f)](_0x2aa963(0x16a),_0x21b697);return;}if(!_0x21b697[_0x2aa963(0x17a)]||!_0x21b697[_0x2aa963(0x124)]){_0x21b697['reason']='部屋名・ユーザ名は\x201\x20文字以上必要です',io['to'](_0xbb579e['id'])[_0x2aa963(0x17f)](_0x2aa963(0x16a),_0x21b697);return;}if(_0x21b697[_0x2aa963(0x124)]['length']>conf[_0x2aa963(0x146)]){_0x21b697[_0x2aa963(0x12d)]=_0x2aa963(0x11e)+conf[_0x2aa963(0x146)]+_0x2aa963(0x163),io['to'](_0xbb579e['id'])['emit'](_0x2aa963(0x16a),_0x21b697);return;}const _0x6e1eab=_0x21b697[_0x2aa963(0x156)]+'-'+_0x21b697[_0x2aa963(0x143)]+'-'+_0x21b697[_0x2aa963(0x17a)],_0x3acadf=rooms[_0x2aa963(0x135)](_0x6e1eab,_0x21b697[_0x2aa963(0x124)]);if(_0x3acadf[_0x2aa963(0x141)]){_0x2c476a[_0x2aa963(0x124)]=_0x21b697[_0x2aa963(0x124)],_0x2c476a[_0x2aa963(0x17a)]=_0x6e1eab,_0xbb579e['join'](_0x2c476a[_0x2aa963(0x17a)]),_0x2c476a['room']=_0x3acadf[_0x2aa963(0x14e)],_0x27984e=_0x2c476a[_0x2aa963(0x14e)][_0x2aa963(0x11c)];const _0x2a38c5=_0x2c476a[_0x2aa963(0x14e)][_0x2aa963(0x154)]();io['to'](_0x2c476a[_0x2aa963(0x17a)])[_0x2aa963(0x17f)](_0x2aa963(0x13f),_0x2de07b(_0x2c476a[_0x2aa963(0x14e)]));}else{if(_0x3acadf['reason']===_0x2aa963(0x13e))io['to'](_0xbb579e['id'])[_0x2aa963(0x17f)](_0x2aa963(0x13a),_0x21b697);else{if(_0x3acadf[_0x2aa963(0x12d)]===_0x2aa963(0x16e))io['to'](_0xbb579e['id'])['emit'](_0x2aa963(0x174),_0x21b697);else _0x3acadf[_0x2aa963(0x12d)]===_0x2aa963(0x17c)&&io['to'](_0xbb579e['id'])[_0x2aa963(0x17f)](_0x2aa963(0x142),_0x21b697);}}}),_0xbb579e['on']('leave_room',_0x2e3a37=>{const _0x2018d9=_0x4d1381;if(!_0x2c476a[_0x2018d9(0x17a)])return;rooms[_0x2018d9(0x12a)](_0x2c476a[_0x2018d9(0x17a)],_0x2c476a['userName']),_0xbb579e[_0x2018d9(0x177)](_0x2c476a[_0x2018d9(0x17a)]),!_0x2c476a['room'][_0x2018d9(0x11f)]?io['to'](_0x2c476a[_0x2018d9(0x17a)])[_0x2018d9(0x17f)](_0x2018d9(0x13f),_0x2de07b(_0x2c476a[_0x2018d9(0x14e)])):(_0x2c476a['room'][_0x2018d9(0x11f)]=![],_0x13dc8a(_0x2018d9(0x172)),io['to'](_0x2c476a['roomName'])[_0x2018d9(0x17f)](_0x2018d9(0x14b),Object[_0x2018d9(0x167)]({'exitUserName':_0x2c476a['userName']},_0x2de07b(_0x2c476a['room'])))),_0x2c476a[_0x2018d9(0x17a)]=null,_0x2c476a[_0x2018d9(0x124)]=null,_0x2c476a[_0x2018d9(0x14e)]=null,io['to'](_0xbb579e['id'])['emit'](_0x2018d9(0x14f));}),_0xbb579e['on']('disconnect',()=>{const _0x37c6b0=_0x4d1381;_0x2c476a[_0x37c6b0(0x17a)]&&(!_0x2c476a[_0x37c6b0(0x14e)][_0x37c6b0(0x11f)]?(rooms[_0x37c6b0(0x12a)](_0x2c476a[_0x37c6b0(0x17a)],_0x2c476a[_0x37c6b0(0x124)]),_0xbb579e[_0x37c6b0(0x177)](_0x2c476a['roomName']),io['to'](_0x2c476a['roomName'])['emit'](_0x37c6b0(0x13f),_0x2de07b(_0x2c476a[_0x37c6b0(0x14e)]))):(_0x2c476a[_0x37c6b0(0x14e)]['play']=![],_0x13dc8a(_0x37c6b0(0x170)),rooms['leaveMember'](_0x2c476a[_0x37c6b0(0x17a)],_0x2c476a[_0x37c6b0(0x124)]),_0xbb579e[_0x37c6b0(0x177)](_0x2c476a[_0x37c6b0(0x17a)]),io['to'](_0x2c476a[_0x37c6b0(0x17a)])['emit']('user_disconnect_in_game',Object[_0x37c6b0(0x167)]({'exitUserName':_0x2c476a[_0x37c6b0(0x124)]},_0x2de07b(_0x2c476a[_0x37c6b0(0x14e)])))));}),_0xbb579e['on'](_0x4d1381(0x165),_0x18fbcd=>{const _0x2ef452=_0x4d1381;_0x2c476a['userName']===_0x2c476a[_0x2ef452(0x14e)][_0x2ef452(0x147)]?(_0x2c476a[_0x2ef452(0x14e)][_0x2ef452(0x11f)]=![],io['to'](_0x2c476a['roomName'])['emit']('to_waiting_room',_0x2de07b(_0x2c476a['room']))):io['to'](_0xbb579e['id'])[_0x2ef452(0x17f)](_0x2ef452(0x162),_0x2de07b(_0x2c476a['room']));}),_0xbb579e['on']('start_play',_0x4a0d5b=>{const _0x2b3884=_0x4d1381;if(_0x2c476a[_0x2b3884(0x124)]===_0x2c476a[_0x2b3884(0x14e)][_0x2b3884(0x147)]){_0x13dc8a(_0x2b3884(0x152)),_0x2c476a[_0x2b3884(0x14e)]['play']=!![],_0x27984e[_0x2b3884(0x134)]=0x0,_0x27984e[_0x2b3884(0x148)]=_0x2c476a[_0x2b3884(0x14e)][_0x2b3884(0x12c)][_0x2b3884(0x180)];const _0x51d68d=_0x4a0d5b['cards'],_0x4537e3=getRandomStrings(_0x51d68d['length']);_0x51d68d[_0x2b3884(0x14d)]((_0x5a6f5c,_0x3a78c3)=>_0x5a6f5c[_0x2b3884(0x155)]=_0x4537e3[_0x3a78c3]),_0x27984e[_0x2b3884(0x145)]=newRandomArray(_0x51d68d)[_0x2b3884(0x14a)](0x0,_0x4a0d5b[_0x2b3884(0x140)]);const _0x570a05=_0x27984e[_0x2b3884(0x145)][_0x2b3884(0x16c)](_0x430126=>_0x430126[_0x2b3884(0x155)]);_0x27984e['totalCount']=_0x27984e[_0x2b3884(0x145)][_0x2b3884(0x17e)],_0x27984e[_0x2b3884(0x149)]['clear'](),_0x2c476a[_0x2b3884(0x14e)][_0x2b3884(0x12c)][_0x2b3884(0x14d)](_0x1eaa20=>{const _0x397f07=_0x2b3884;_0x27984e['userPointsMap'][_0x397f07(0x176)](_0x1eaa20,{'userName':_0x1eaa20,'correct':0x0,'wrong':0x0});}),io['to'](_0x2c476a[_0x2b3884(0x17a)])[_0x2b3884(0x17f)]('prepare_play',{'tagSeq':_0x4537e3,'displaySeq':_0x570a05,'showData':_0x3fce3f()});}}),_0xbb579e['on']('ready_play',()=>{const _0x2fdfae=_0x4d1381;++_0x27984e[_0x2fdfae(0x134)]===_0x2c476a[_0x2fdfae(0x14e)][_0x2fdfae(0x12c)][_0x2fdfae(0x180)]&&(_0x27984e[_0x2fdfae(0x134)]=0x0,io['to'](_0x2c476a[_0x2fdfae(0x17a)])[_0x2fdfae(0x17f)](_0x2fdfae(0x166)));}),_0xbb579e['on']('ready_next_card',()=>{const _0x127842=_0x4d1381;++_0x27984e[_0x127842(0x134)]===_0x2c476a[_0x127842(0x14e)][_0x127842(0x12c)][_0x127842(0x180)]&&(io['to'](_0x2c476a['roomName'])[_0x127842(0x17f)](_0x127842(0x17b)),_0x2389c7());});const _0x3fce3f=(_0x5ce04c=![])=>{const _0x55e674=_0x4d1381,_0x5a3e1e=Array[_0x55e674(0x151)](_0x27984e[_0x55e674(0x149)][_0x55e674(0x132)]()),_0x51e18c={'count':{'total':_0x27984e[_0x55e674(0x15c)],'rest':_0x27984e['restCards'][_0x55e674(0x17e)]},'userResults':_0x5a3e1e['map'](_0x1a7d8b=>Object['assign']({},_0x1a7d8b))};return _0x5ce04c&&(_0x51e18c['rankedUserResults']=getRankedArray(_0x5a3e1e,(_0x25148c,_0x3ad483)=>_0x25148c[_0x55e674(0x137)]!==_0x3ad483[_0x55e674(0x137)]?-_0x25148c[_0x55e674(0x137)]+_0x3ad483[_0x55e674(0x137)]:_0x25148c[_0x55e674(0x16f)]-_0x3ad483['wrong'])),_0x51e18c;},_0x2389c7=()=>{const _0x137c30=_0x4d1381;if(_0x27984e[_0x137c30(0x145)][_0x137c30(0x17e)]<=0x1){io['to'](_0x2c476a['roomName'])[_0x137c30(0x17f)]('game_end',_0x3fce3f(!![])),_0x13dc8a(_0x137c30(0x125));return;}_0x27984e['currentIndex']=getRandomRanged(0x0,_0x27984e[_0x137c30(0x145)]['length']),_0x27984e['currentCard']=_0x27984e[_0x137c30(0x145)][_0x27984e['currentIndex']],_0x27984e[_0x137c30(0x179)]=_0x27984e[_0x137c30(0x171)][_0x137c30(0x155)],_0x27984e[_0x137c30(0x153)][_0x137c30(0x11b)](),_0x27984e[_0x137c30(0x187)]=Number[_0x137c30(0x133)],_0x27984e[_0x137c30(0x138)]=null,io['to'](_0x2c476a[_0x137c30(0x17a)])[_0x137c30(0x17f)]('next_card',{'currentTag':_0x27984e[_0x137c30(0x171)][_0x137c30(0x155)]});};_0xbb579e['on'](_0x4d1381(0x144),_0x29ff05=>{const _0x35b03f=_0x4d1381;if(_0x27984e[_0x35b03f(0x179)]!==_0x29ff05[_0x35b03f(0x179)])return;if(_0x29ff05[_0x35b03f(0x124)]!==_0x2c476a[_0x35b03f(0x124)])return;if(_0x27984e['actedDataMap'][_0x35b03f(0x186)](_0x2c476a['userName']))return;_0x27984e[_0x35b03f(0x153)][_0x35b03f(0x176)](_0x2c476a['userName'],_0x29ff05),_0x29ff05[_0x35b03f(0x181)]===_0x35b03f(0x183)&&_0x29ff05[_0x35b03f(0x137)]&&_0x29ff05[_0x35b03f(0x182)]===_0x27984e['currentCard']['id']&&(_0x29ff05[_0x35b03f(0x131)]<_0x27984e[_0x35b03f(0x187)]&&(_0x27984e[_0x35b03f(0x138)]=_0x2c476a[_0x35b03f(0x124)],_0x27984e['minTakenTimeMS']=_0x29ff05[_0x35b03f(0x131)]),_0x29ff05[_0x35b03f(0x15b)]=(_0x29ff05[_0x35b03f(0x131)]/0x3e8)['toFixed'](0x2)),_0x27984e[_0x35b03f(0x153)][_0x35b03f(0x180)]!==_0x27984e[_0x35b03f(0x148)]?_0x46dbb8():_0x330cf7();});const _0x3eeb42=()=>{const _0x1ae623=_0x4d1381;return Array[_0x1ae623(0x151)](_0x27984e['actedDataMap'][_0x1ae623(0x132)]());},_0x46dbb8=()=>{const _0x5649c8=_0x4d1381;_0x27984e[_0x5649c8(0x179)]&&io['to'](_0x2c476a[_0x5649c8(0x17a)])[_0x5649c8(0x17f)](_0x5649c8(0x168),{'currentTag':_0x27984e['currentTag'],'minTakenTimeMS':_0x27984e['fastestUserName']?_0x27984e[_0x5649c8(0x187)]:null,'actionResults':_0x3eeb42()});},_0x330cf7=()=>{const _0x2403a8=_0x4d1381;if(_0x27984e[_0x2403a8(0x179)]){const _0xd932aa=_0x27984e[_0x2403a8(0x179)];_0x27984e['currentTag']=null,_0x27984e[_0x2403a8(0x134)]=0x0;_0x27984e[_0x2403a8(0x153)]['has'](_0x27984e['fastestUserName'])&&_0x27984e['restCards']['splice'](_0x27984e[_0x2403a8(0x11d)],0x1);_0x27984e[_0x2403a8(0x149)][_0x2403a8(0x14d)](_0x586a5e=>{const _0x32790b=_0x2403a8,_0x557c24=_0x27984e[_0x32790b(0x153)][_0x32790b(0x164)](_0x586a5e[_0x32790b(0x124)]);if(_0x557c24[_0x32790b(0x124)]===_0x27984e[_0x32790b(0x138)])_0x586a5e[_0x32790b(0x137)]++;else _0x557c24[_0x32790b(0x137)]===![]&&_0x586a5e[_0x32790b(0x16f)]++;});const _0x2dde6e=Object['assign']({'card':{'currentTag':_0xd932aa,'cardId':_0x27984e[_0x2403a8(0x171)]['id'],'winnerUserName':_0x27984e[_0x2403a8(0x138)]}},_0x3fce3f());_0x2dde6e[_0x2403a8(0x14c)]=_0x3eeb42(),io['to'](_0x2c476a['roomName'])['emit'](_0x2403a8(0x175),_0x2dde6e);}};});