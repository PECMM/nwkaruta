const _0x4a1d7f=_0x2ddb;(function(_0x10df29,_0x4ac29c){const _0x41f4f3=_0x2ddb,_0x5c65d9=_0x10df29();while(!![]){try{const _0x6df9af=parseInt(_0x41f4f3(0x193))/0x1+parseInt(_0x41f4f3(0x17e))/0x2+parseInt(_0x41f4f3(0x16e))/0x3*(parseInt(_0x41f4f3(0x19d))/0x4)+-parseInt(_0x41f4f3(0x1da))/0x5*(-parseInt(_0x41f4f3(0x1cf))/0x6)+parseInt(_0x41f4f3(0x1a0))/0x7*(-parseInt(_0x41f4f3(0x192))/0x8)+-parseInt(_0x41f4f3(0x16d))/0x9+parseInt(_0x41f4f3(0x1cd))/0xa;if(_0x6df9af===_0x4ac29c)break;else _0x5c65d9['push'](_0x5c65d9['shift']());}catch(_0x5f0f36){_0x5c65d9['push'](_0x5c65d9['shift']());}}}(_0x2f95,0x6326d));const newRandomArray=_0x3173a8=>{const _0x450762=_0x2ddb,_0x563c03=Array['from'](_0x3173a8);for(let _0x296ef9=_0x563c03['length']-0x1;_0x296ef9>=0x0;_0x296ef9--){const _0x1c64fe=Math[_0x450762(0x1c1)](Math[_0x450762(0x1c5)]()*(_0x296ef9+0x1));[_0x563c03[_0x296ef9],_0x563c03[_0x1c64fe]]=[_0x563c03[_0x1c64fe],_0x563c03[_0x296ef9]];}return _0x563c03;},nextRandomString=()=>{const _0x3ea48a=_0x2ddb;return Math[_0x3ea48a(0x1c5)]()[_0x3ea48a(0x180)](0x24)['substring'](0x2)['padEnd'](0xb,'0');},getRandomStrings=_0x1ce2a1=>{const _0xd4c15d=_0x2ddb,_0x4513b3=new Set();while(_0x4513b3['size']<_0x1ce2a1){_0x4513b3[_0xd4c15d(0x1a9)](nextRandomString());}return Array[_0xd4c15d(0x1c2)](_0x4513b3);},getRandomRanged=(_0x1cdd7e,_0x5511e6)=>{const _0x2bed28=_0x2ddb;return Math['floor'](_0x1cdd7e+Math[_0x2bed28(0x1c5)]()*(_0x5511e6-_0x1cdd7e));},getRankedArray=(_0x225384,_0x46dca7)=>{const _0x259c6a=_0x2ddb,_0xa9a1ce=_0x225384['map'](_0x532c41=>Object[_0x259c6a(0x199)]({},_0x532c41))[_0x259c6a(0x1ac)](_0x46dca7);return _0xa9a1ce['reduce']((_0x3af483,_0x487151,_0x37bf70)=>{const _0x476438=_0x259c6a;return!_0x3af483?_0x487151[_0x476438(0x17a)]=0x1:_0x487151[_0x476438(0x17a)]=_0x46dca7(_0x487151,_0x3af483)===0x0?_0x3af483[_0x476438(0x17a)]:_0x37bf70+0x1,_0x487151;},null),_0xa9a1ce;},express=require(_0x4a1d7f(0x196)),app=express();function _0x2f95(){const _0x30018a=['leaveMember','floor','from','maxUserInRoom','members','random','joinroom_invaid_parameter','correct','forEach','\x20...\x20','room','Server','joinroom_room_is_full','7746240UjpjFM','initialize','12132KAMeKn','rankedUserResults','log','reason','disconnect','action','currentIndex','listen','currentCard','useCardCount','ユーザ名は\x20','10JJCEea','userName','4618575CNrCJg','6sbOhXO','get','set','emit','play','ownerUserName','progress:','totalCount','duplicated_usename','http','sockets','appId','rank','minTakenTimeMS','card_phase_card_result','tag','340800nZInQf','join','toString','socket.io','getMemberList','joinMember','playing_now','\x20文字以下にしてください','ready_next_card','roomName','finish_play','splice','public','success','ready_play','MAX_VALUE','takenTimeSec','connection','join_room','card_phase_update_actinfo','266312QWZtri','111149MyQlhC','actionResults','next_card','express','all_ready_play','prepare_play','assign','card_phase_acted','joinroom_duplicated_usename','memberCount','450524fRvtKG','room_is_full','wrong','77VVouHO','actedDataMap','room_member_list','length','slice','size','delete','joinroom_playing_now','userNameMaxLength','add','currentTag','game','sort','to_waiting_room','./conf.json','restCards','dataId','padEnd','use','userPointsMap','start_play','values','readyCount','value','leave','fastestUserName','has','takenTimeMS','static','cardId','user_disconnect_in_game','game_end'];_0x2f95=function(){return _0x30018a;};return _0x2f95();}app[_0x4a1d7f(0x1b2)](express[_0x4a1d7f(0x1bc)](_0x4a1d7f(0x18a)));const http=require(_0x4a1d7f(0x177))[_0x4a1d7f(0x1cb)](app);function _0x2ddb(_0x5d4210,_0x42dc53){const _0x2f957b=_0x2f95();return _0x2ddb=function(_0x2ddb79,_0x328f59){_0x2ddb79=_0x2ddb79-0x16c;let _0x54768e=_0x2f957b[_0x2ddb79];return _0x54768e;},_0x2ddb(_0x5d4210,_0x42dc53);}http[_0x4a1d7f(0x1d6)](process['env']['PORT']||0xbb8);const io=require(_0x4a1d7f(0x181))(http),rooms=((()=>{const _0x1e6158=new Map(),_0x2b98d0=_0x2b8c36=>{return{'play':![],'game':{'actedDataMap':new Map(),'userPointsMap':new Map()},'ownerUserName':_0x2b8c36,'members':new Set([_0x2b8c36]),'getMemberList':function(){const _0x434431=_0x2ddb;return Array[_0x434431(0x1c2)](this[_0x434431(0x1c4)]);}};};return{'getMemberList':_0x1610eb=>{const _0x192df1=_0x2ddb;return _0x1e6158[_0x192df1(0x16f)](_0x1610eb)?.[_0x192df1(0x182)]()??[];},'joinMember':(_0x45e5e4,_0x5e796b,_0x175140)=>{const _0x583da2=_0x2ddb;if(!_0x1e6158[_0x583da2(0x1ba)](_0x45e5e4)){const _0x254d82=_0x2b98d0(_0x5e796b);return _0x1e6158[_0x583da2(0x170)](_0x45e5e4,_0x254d82),{'success':!![],'room':_0x254d82};}else{const _0x39740f=_0x1e6158['get'](_0x45e5e4);if(_0x39740f[_0x583da2(0x172)])return{'success':![],'reason':'playing_now'};if(_0x39740f[_0x583da2(0x1c4)][_0x583da2(0x1a5)]>=conf[_0x583da2(0x1c3)])return{'success':![],'reason':_0x583da2(0x19e)};return _0x39740f['members'][_0x583da2(0x1ba)](_0x5e796b)?{'success':![],'reason':_0x583da2(0x176)}:(_0x39740f[_0x583da2(0x1c4)][_0x583da2(0x1a9)](_0x5e796b),{'success':!![],'room':_0x39740f});}},'leaveMember':(_0xd40b75,_0x1c3af4)=>{const _0xf63cbb=_0x2ddb,_0x50bc3d=_0x1e6158[_0xf63cbb(0x16f)](_0xd40b75);if(!_0x50bc3d)return;const _0x473b99=_0x50bc3d[_0xf63cbb(0x1c4)];_0x473b99[_0xf63cbb(0x1a6)](_0x1c3af4),_0x473b99[_0xf63cbb(0x1a5)]===0x0&&_0x1e6158['delete'](_0xd40b75),_0x1c3af4===_0x50bc3d[_0xf63cbb(0x173)]&&(_0x50bc3d[_0xf63cbb(0x173)]=_0x473b99[_0xf63cbb(0x1b5)]()['next']()[_0xf63cbb(0x1b7)]);}};})());let userNumber=0x0;const conf=require(_0x4a1d7f(0x1ae));io[_0x4a1d7f(0x178)]['on'](_0x4a1d7f(0x18f),_0x2bfe24=>{const _0x22a458=_0x4a1d7f,_0xea0bed={};let _0x3747a8;const _0x40d3e8=_0x3a73ce=>{const _0x107c86=_0x2ddb,_0x66e01=0x10;console[_0x107c86(0x1d1)](_0x107c86(0x174)+_0x3a73ce[_0x107c86(0x1b1)](_0x66e01)+_0x107c86(0x1c9)+_0xea0bed['roomName']+'\x20...\x20',Array[_0x107c86(0x1c2)](_0xea0bed[_0x107c86(0x1ca)][_0x107c86(0x1c4)])['join'](','));};io['to'](_0x2bfe24['id'])[_0x22a458(0x171)](_0x22a458(0x1ce),{'userNameMaxLength':conf[_0x22a458(0x1a8)],'userNumber':++userNumber});const _0x842890=_0x440035=>{const _0x234ee4=_0x22a458;return{'memberList':_0x440035[_0x234ee4(0x182)](),'ownerUserName':_0x440035[_0x234ee4(0x173)]};};_0x2bfe24['on'](_0x22a458(0x190),_0xa26000=>{const _0x2434eb=_0x22a458;if(_0xea0bed[_0x2434eb(0x187)])return;if(!_0xa26000[_0x2434eb(0x179)]||!_0xa26000['dataId']){_0xa26000[_0x2434eb(0x1d2)]='',io['to'](_0x2bfe24['id'])[_0x2434eb(0x171)](_0x2434eb(0x1c6),_0xa26000);return;}if(!_0xa26000[_0x2434eb(0x187)]||!_0xa26000[_0x2434eb(0x16c)]){_0xa26000[_0x2434eb(0x1d2)]='部屋名・ユーザ名は\x201\x20文字以上必要です',io['to'](_0x2bfe24['id'])[_0x2434eb(0x171)]('joinroom_invaid_parameter',_0xa26000);return;}if(_0xa26000['userName'][_0x2434eb(0x1a3)]>conf[_0x2434eb(0x1a8)]){_0xa26000[_0x2434eb(0x1d2)]=_0x2434eb(0x1d9)+conf[_0x2434eb(0x1a8)]+_0x2434eb(0x185),io['to'](_0x2bfe24['id'])[_0x2434eb(0x171)]('joinroom_invaid_parameter',_0xa26000);return;}const _0x16d8eb=_0xa26000[_0x2434eb(0x179)]+'-'+_0xa26000[_0x2434eb(0x1b0)]+'-'+_0xa26000[_0x2434eb(0x187)],_0x313a7a=rooms[_0x2434eb(0x183)](_0x16d8eb,_0xa26000[_0x2434eb(0x16c)]);if(_0x313a7a[_0x2434eb(0x18b)]){_0xea0bed['userName']=_0xa26000[_0x2434eb(0x16c)],_0xea0bed[_0x2434eb(0x187)]=_0x16d8eb,_0x2bfe24[_0x2434eb(0x17f)](_0xea0bed[_0x2434eb(0x187)]),_0xea0bed[_0x2434eb(0x1ca)]=_0x313a7a[_0x2434eb(0x1ca)],_0x3747a8=_0xea0bed[_0x2434eb(0x1ca)][_0x2434eb(0x1ab)];const _0x2f89c3=_0xea0bed['room'][_0x2434eb(0x182)]();io['to'](_0xea0bed[_0x2434eb(0x187)])['emit'](_0x2434eb(0x1a2),_0x842890(_0xea0bed[_0x2434eb(0x1ca)]));}else{if(_0x313a7a[_0x2434eb(0x1d2)]===_0x2434eb(0x184))io['to'](_0x2bfe24['id'])['emit'](_0x2434eb(0x1a7),_0xa26000);else{if(_0x313a7a['reason']===_0x2434eb(0x176))io['to'](_0x2bfe24['id'])['emit'](_0x2434eb(0x19b),_0xa26000);else _0x313a7a[_0x2434eb(0x1d2)]===_0x2434eb(0x19e)&&io['to'](_0x2bfe24['id'])[_0x2434eb(0x171)](_0x2434eb(0x1cc),_0xa26000);}}}),_0x2bfe24['on']('leave_room',_0x4efad1=>{const _0x4c895f=_0x22a458;if(!_0xea0bed['roomName'])return;rooms[_0x4c895f(0x1c0)](_0xea0bed[_0x4c895f(0x187)],_0xea0bed['userName']),_0x2bfe24[_0x4c895f(0x1b8)](_0xea0bed[_0x4c895f(0x187)]),!_0xea0bed[_0x4c895f(0x1ca)][_0x4c895f(0x172)]?io['to'](_0xea0bed[_0x4c895f(0x187)])[_0x4c895f(0x171)](_0x4c895f(0x1a2),_0x842890(_0xea0bed[_0x4c895f(0x1ca)])):(_0xea0bed[_0x4c895f(0x1ca)][_0x4c895f(0x172)]=![],_0x40d3e8('leave_room'),io['to'](_0xea0bed[_0x4c895f(0x187)])[_0x4c895f(0x171)](_0x4c895f(0x1be),Object[_0x4c895f(0x199)]({'exitUserName':_0xea0bed[_0x4c895f(0x16c)]},_0x842890(_0xea0bed['room'])))),_0xea0bed[_0x4c895f(0x187)]=null,_0xea0bed[_0x4c895f(0x16c)]=null,_0xea0bed[_0x4c895f(0x1ca)]=null,io['to'](_0x2bfe24['id'])[_0x4c895f(0x171)]('leave_room_ok');}),_0x2bfe24['on']('disconnect',()=>{const _0x35dbe7=_0x22a458;_0xea0bed['roomName']&&(!_0xea0bed[_0x35dbe7(0x1ca)]['play']?(rooms['leaveMember'](_0xea0bed[_0x35dbe7(0x187)],_0xea0bed[_0x35dbe7(0x16c)]),_0x2bfe24['leave'](_0xea0bed[_0x35dbe7(0x187)]),io['to'](_0xea0bed[_0x35dbe7(0x187)])[_0x35dbe7(0x171)](_0x35dbe7(0x1a2),_0x842890(_0xea0bed[_0x35dbe7(0x1ca)]))):(_0xea0bed['room']['play']=![],_0x40d3e8(_0x35dbe7(0x1d3)),rooms[_0x35dbe7(0x1c0)](_0xea0bed[_0x35dbe7(0x187)],_0xea0bed[_0x35dbe7(0x16c)]),_0x2bfe24['leave'](_0xea0bed[_0x35dbe7(0x187)]),io['to'](_0xea0bed[_0x35dbe7(0x187)])['emit'](_0x35dbe7(0x1be),Object['assign']({'exitUserName':_0xea0bed[_0x35dbe7(0x16c)]},_0x842890(_0xea0bed[_0x35dbe7(0x1ca)])))));}),_0x2bfe24['on'](_0x22a458(0x188),_0x3ae405=>{const _0x23e350=_0x22a458;_0xea0bed[_0x23e350(0x16c)]===_0xea0bed[_0x23e350(0x1ca)][_0x23e350(0x173)]?(_0xea0bed[_0x23e350(0x1ca)][_0x23e350(0x172)]=![],io['to'](_0xea0bed['roomName'])[_0x23e350(0x171)](_0x23e350(0x1ad),_0x842890(_0xea0bed[_0x23e350(0x1ca)]))):io['to'](_0x2bfe24['id'])[_0x23e350(0x171)](_0x23e350(0x1ad),_0x842890(_0xea0bed[_0x23e350(0x1ca)]));}),_0x2bfe24['on'](_0x22a458(0x1b4),_0x3dc3c8=>{const _0x3689ec=_0x22a458;if(_0xea0bed[_0x3689ec(0x16c)]===_0xea0bed[_0x3689ec(0x1ca)][_0x3689ec(0x173)]){_0x40d3e8('start_play'),_0xea0bed[_0x3689ec(0x1ca)][_0x3689ec(0x172)]=!![],_0x3747a8[_0x3689ec(0x1b6)]=0x0,_0x3747a8[_0x3689ec(0x19c)]=_0xea0bed[_0x3689ec(0x1ca)][_0x3689ec(0x1c4)]['size'];const _0x57d00b=_0x3dc3c8['cards'],_0x129eeb=getRandomStrings(_0x57d00b[_0x3689ec(0x1a3)]);_0x57d00b['forEach']((_0x526b14,_0x3c2652)=>_0x526b14[_0x3689ec(0x17d)]=_0x129eeb[_0x3c2652]),_0x3747a8[_0x3689ec(0x1af)]=newRandomArray(_0x57d00b)[_0x3689ec(0x1a4)](0x0,_0x3dc3c8[_0x3689ec(0x1d8)]);const _0x15728b=_0x3747a8[_0x3689ec(0x1af)]['map'](_0x1a0dbb=>_0x1a0dbb[_0x3689ec(0x17d)]);_0x3747a8[_0x3689ec(0x175)]=_0x3747a8[_0x3689ec(0x1af)][_0x3689ec(0x1a3)],_0x3747a8['userPointsMap']['clear'](),_0xea0bed[_0x3689ec(0x1ca)][_0x3689ec(0x1c4)][_0x3689ec(0x1c8)](_0x28bcd1=>{const _0x5a2b83=_0x3689ec;_0x3747a8[_0x5a2b83(0x1b3)]['set'](_0x28bcd1,{'userName':_0x28bcd1,'correct':0x0,'wrong':0x0});}),io['to'](_0xea0bed['roomName'])['emit'](_0x3689ec(0x198),{'tagSeq':_0x129eeb,'displaySeq':_0x15728b,'showData':_0x44b787()});}}),_0x2bfe24['on'](_0x22a458(0x18c),()=>{const _0x65d8be=_0x22a458;++_0x3747a8[_0x65d8be(0x1b6)]===_0xea0bed[_0x65d8be(0x1ca)][_0x65d8be(0x1c4)]['size']&&(_0x3747a8[_0x65d8be(0x1b6)]=0x0,io['to'](_0xea0bed[_0x65d8be(0x187)])['emit'](_0x65d8be(0x197)));}),_0x2bfe24['on'](_0x22a458(0x186),()=>{const _0x25f164=_0x22a458;++_0x3747a8[_0x25f164(0x1b6)]===_0xea0bed[_0x25f164(0x1ca)][_0x25f164(0x1c4)]['size']&&(io['to'](_0xea0bed[_0x25f164(0x187)])[_0x25f164(0x171)]('all_ready_next_card'),_0x3a8143());});const _0x44b787=(_0x49bbec=![])=>{const _0x5d0771=_0x22a458,_0x363c09=Array[_0x5d0771(0x1c2)](_0x3747a8[_0x5d0771(0x1b3)]['values']()),_0x57fb5d={'count':{'total':_0x3747a8[_0x5d0771(0x175)],'rest':_0x3747a8[_0x5d0771(0x1af)][_0x5d0771(0x1a3)]},'userResults':_0x363c09['map'](_0x2dd387=>Object[_0x5d0771(0x199)]({},_0x2dd387))};return _0x49bbec&&(_0x57fb5d[_0x5d0771(0x1d0)]=getRankedArray(_0x363c09,(_0x2646a8,_0x5183fd)=>_0x2646a8[_0x5d0771(0x1c7)]!==_0x5183fd[_0x5d0771(0x1c7)]?-_0x2646a8[_0x5d0771(0x1c7)]+_0x5183fd[_0x5d0771(0x1c7)]:_0x2646a8['wrong']-_0x5183fd[_0x5d0771(0x19f)])),_0x57fb5d;},_0x3a8143=()=>{const _0x545c8b=_0x22a458;if(_0x3747a8[_0x545c8b(0x1af)][_0x545c8b(0x1a3)]<=0x1){io['to'](_0xea0bed['roomName'])['emit'](_0x545c8b(0x1bf),_0x44b787(!![])),_0x40d3e8(_0x545c8b(0x1bf));return;}_0x3747a8[_0x545c8b(0x1d5)]=getRandomRanged(0x0,_0x3747a8[_0x545c8b(0x1af)][_0x545c8b(0x1a3)]),_0x3747a8[_0x545c8b(0x1d7)]=_0x3747a8[_0x545c8b(0x1af)][_0x3747a8[_0x545c8b(0x1d5)]],_0x3747a8[_0x545c8b(0x1aa)]=_0x3747a8[_0x545c8b(0x1d7)][_0x545c8b(0x17d)],_0x3747a8[_0x545c8b(0x1a1)]['clear'](),_0x3747a8[_0x545c8b(0x17b)]=Number[_0x545c8b(0x18d)],_0x3747a8[_0x545c8b(0x1b9)]=null,io['to'](_0xea0bed[_0x545c8b(0x187)])[_0x545c8b(0x171)](_0x545c8b(0x195),{'currentTag':_0x3747a8[_0x545c8b(0x1d7)][_0x545c8b(0x17d)]});};_0x2bfe24['on'](_0x22a458(0x19a),_0x41daf9=>{const _0x550724=_0x22a458;if(_0x3747a8[_0x550724(0x1aa)]!==_0x41daf9[_0x550724(0x1aa)])return;if(_0x41daf9[_0x550724(0x16c)]!==_0xea0bed[_0x550724(0x16c)])return;if(_0x3747a8['actedDataMap'][_0x550724(0x1ba)](_0xea0bed[_0x550724(0x16c)]))return;_0x3747a8[_0x550724(0x1a1)][_0x550724(0x170)](_0xea0bed[_0x550724(0x16c)],_0x41daf9),_0x41daf9[_0x550724(0x1d4)]==='click'&&_0x41daf9[_0x550724(0x1c7)]&&_0x41daf9[_0x550724(0x1bd)]===_0x3747a8[_0x550724(0x1d7)]['id']&&(_0x41daf9[_0x550724(0x1bb)]<_0x3747a8[_0x550724(0x17b)]&&(_0x3747a8[_0x550724(0x1b9)]=_0xea0bed[_0x550724(0x16c)],_0x3747a8[_0x550724(0x17b)]=_0x41daf9[_0x550724(0x1bb)]),_0x41daf9[_0x550724(0x18e)]=(_0x41daf9[_0x550724(0x1bb)]/0x3e8)['toFixed'](0x2)),_0x3747a8[_0x550724(0x1a1)][_0x550724(0x1a5)]!==_0x3747a8[_0x550724(0x19c)]?_0x4822eb():_0x161bf4();});const _0x51d067=()=>{const _0x153f2e=_0x22a458;return Array['from'](_0x3747a8['actedDataMap'][_0x153f2e(0x1b5)]());},_0x4822eb=()=>{const _0x19beac=_0x22a458;_0x3747a8[_0x19beac(0x1aa)]&&io['to'](_0xea0bed['roomName'])['emit'](_0x19beac(0x191),{'currentTag':_0x3747a8['currentTag'],'minTakenTimeMS':_0x3747a8[_0x19beac(0x1b9)]?_0x3747a8[_0x19beac(0x17b)]:null,'actionResults':_0x51d067()});},_0x161bf4=()=>{const _0xee0040=_0x22a458;if(_0x3747a8['currentTag']){const _0x4d08ad=_0x3747a8[_0xee0040(0x1aa)];_0x3747a8[_0xee0040(0x1aa)]=null,_0x3747a8[_0xee0040(0x1b6)]=0x0;_0x3747a8[_0xee0040(0x1a1)][_0xee0040(0x1ba)](_0x3747a8['fastestUserName'])&&_0x3747a8['restCards'][_0xee0040(0x189)](_0x3747a8[_0xee0040(0x1d5)],0x1);_0x3747a8[_0xee0040(0x1b3)][_0xee0040(0x1c8)](_0x1682f8=>{const _0x290b23=_0xee0040,_0x300b59=_0x3747a8[_0x290b23(0x1a1)][_0x290b23(0x16f)](_0x1682f8['userName']);if(_0x300b59[_0x290b23(0x16c)]===_0x3747a8[_0x290b23(0x1b9)])_0x1682f8[_0x290b23(0x1c7)]++;else _0x300b59[_0x290b23(0x1c7)]===![]&&_0x1682f8[_0x290b23(0x19f)]++;});const _0x5097a6=Object[_0xee0040(0x199)]({'card':{'currentTag':_0x4d08ad,'cardId':_0x3747a8['currentCard']['id'],'winnerUserName':_0x3747a8[_0xee0040(0x1b9)]}},_0x44b787());_0x5097a6[_0xee0040(0x194)]=_0x51d067(),io['to'](_0xea0bed[_0xee0040(0x187)])['emit'](_0xee0040(0x17c),_0x5097a6);}};});