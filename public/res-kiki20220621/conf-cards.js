const settings = {
  dataId:'1',
  cards: [
    { id:'a1', label:'あ', imgPath:'a1.jpg', soundPath:'../res-kiki/a1.mp3', cb:'20220619-002223', illustrator:'maeyu'             ,cardText:'あさはねむい',reading:'朝は朝で多分…今この感じ「続」って感じだろうな',srcTitle:'【睡眠】二度寝したいからどうにかしてキキを寝かしつけてくれ頼んだ',srcURL:'https://www.youtube.com/watch?v=fRrMOxcEa0A&t=5265',srcStartTime:'1:27:45',},
    { id:'a2', label:'い', imgPath:'a2.jpg', soundPath:'./a2.mp3'          , cb:'20220619-002223', illustrator:'821-scoVill'       ,cardText:'いぬもあるくし キキもあるく',reading:'超イヌのキキ',srcTitle:'【Nintendo Switch Sports】虚弱スポーツ大会',srcURL:'https://www.youtube.com/watch?v=tlCrfJyIyF0&t=538',srcStartTime:'0:08:58',},
    { id:'a3', label:'う', imgPath:'a3.jpg', soundPath:'../res-kiki/a3.mp3', cb:'20220619-002223', illustrator:'稲松なまつ'        ,cardText:'うわああああーーーーー',reading:'うわああああーーーーー',srcTitle:'【Minecraft】操作に慣れてきたので落下なんかするわけない',srcURL:'https://www.youtube.com/watch?v=OoF8JXILkyo&t=883',srcStartTime:'0:14:43',},
    { id:'a4', label:'え', imgPath:'a4.jpg', soundPath:'../res-kiki/a4.mp3', cb:'20220619-002223', illustrator:'リク'              ,cardText:'えがおに なれない',reading:'笑顔の所はさぁ',srcTitle:'【雑談】眠くなる魔法のポーションの調合をしながら先週の振り返り雑談【紫水キキ / ひよクロ】',srcURL:'https://www.youtube.com/watch?v=ufB9vuifyt4&t=3278',srcStartTime:'0:54:38',},
    { id:'a5', label:'お', imgPath:'a5.jpg', soundPath:'../res-kiki/a5.mp3', cb:'20220619-002223', illustrator:'961ニウム'         ,cardText:'おねえさま ありがとう',reading:'ねえさま たまらん dear my sister 何度でも見たいぜ！',srcTitle:'【Minecraft】三回連続でマイクラする予定はなかったけど流石に聞いて欲しい',srcURL:'https://www.youtube.com/watch?v=2J1A8QoJZuM&t=742',srcStartTime:'0:12:22',},
    { id:'k1', label:'か', imgPath:'k1.jpg', soundPath:'../res-kiki/k1.mp3', cb:'20220619-002223', illustrator:'ぶち'              ,cardText:'かんゆドロップ食べろ。',reading:'肝油さぁ…キキ好きじゃん',srcTitle:'【雑談】お話の最大公約数',srcURL:'https://www.youtube.com/watch?v=GLnoMYYW3Uw&t=2108',srcStartTime:'0:35:08',},
    { id:'k2', label:'き', imgPath:'k2.jpg', soundPath:'../res-kiki/k2.mp3', cb:'20220619-002223', illustrator:'ノック・エンガチョ',cardText:'き木',reading:'木…キキの邪魔をするんじゃない',srcTitle:'【収益化記念】祝・感謝記念ゴルフ',srcURL:'https://www.youtube.com/watch?v=Q4X3VrXqVvk&t=1180',srcStartTime:'0:19:40',},
    { id:'k3', label:'く', imgPath:'k3.jpg', soundPath:'../res-kiki/k3.mp3', cb:'20220619-002223', illustrator:'SA MA'             ,cardText:'くらげ',reading:'海月銀河',srcTitle:'※続き【キキ散歩】水族館でサメ見たり世界のメリーゴーランド見たり、綺麗な街探したりお散歩しよ【紫水キキ / ひよクロ】',srcURL:'https://www.youtube.com/watch?v=FnMXWPJIonE&t=1621',srcStartTime:'0:27:01',},
    { id:'k4', label:'け', imgPath:'k4.jpg', soundPath:'../res-kiki/k4.mp3', cb:'20220619-002223', illustrator:'はつほ'            ,cardText:'けちゃっぷ',reading:'ケチャップもいいと思う',srcTitle:'【Q&A】キミたちの疑問を解消しよう',srcURL:'https://www.youtube.com/watch?v=IBGTDm7M7G4&t=2056',srcStartTime:'0:34:16',},
    { id:'k5', label:'こ', imgPath:'k5.jpg', soundPath:'./k5.mp3'          , cb:'20220619-002223', illustrator:'はいざんへい'      ,cardText:'こうおつつけがたいキキ',reading:'こう！こう！こう！こう！こう！こう！ｳﾜｧｧｧこう！ｳｳｳｳこう！こう！こう！',srcTitle:'【Nintendo Switch Sports】虚弱スポーツ大会',srcURL:'https://www.youtube.com/watch?v=tlCrfJyIyF0&t=2820',srcStartTime:'0:47:00',},
    { id:'s1', label:'さ', imgPath:'s1.jpg', soundPath:'../res-kiki/s1.mp3', cb:'20220619-002223', illustrator:'エリアル'          ,cardText:'さよなら△ またきて□ どっち派？',reading:'さようなら、パトラップにひっかかった もの。よし',srcTitle:'【Minecraft】ひさしぶりのマイクラは真夜中の怪しげな作業雑談の巻',srcURL:'https://www.youtube.com/watch?v=oj2NicxcUH4&t=3704',srcStartTime:'1:01:44',},
    { id:'s2', label:'し', imgPath:'s2.jpg', soundPath:'../res-kiki/s2.mp3', cb:'20220619-002223', illustrator:'しいらさん'        ,cardText:'しゃっくり止まらぬ',reading:'しゃっくり止まったの',srcTitle:'【Super Bunny Man】気の合う二人で協力して笑顔でクリアwwwwwwするスーパーバニーマン【涼海ネモ/紫水キキ / ひよクロ】',srcURL:'https://www.youtube.com/watch?v=ooE3eRFzMbA&t=33',srcStartTime:'0:00:35',},
    { id:'s3', label:'す', imgPath:'s3.jpg', soundPath:'../res-kiki/s3.mp3', cb:'20220619-002223', illustrator:'ばさ'              ,cardText:'すみッコキキ',reading:'すみっこ～♩',srcTitle:'【キキごはん】ごはん食べながらラジオの反省会と読めなかったお便りを読む番外編',srcURL:'https://www.youtube.com/watch?v=1zwyWnoFHiA&t=53',srcStartTime:'0:00:53',},
    { id:'s4', label:'せ', imgPath:'s4.jpg', soundPath:'./s4.mp3'          , cb:'20220619-002223', illustrator:'12指腸'            ,cardText:'せもたれになる',reading:'背中はねぇ、あいてる',srcTitle:'【Q&A】キミたちの疑問を解消しよう【紫水キキ / ひよクロ】',srcURL:'https://www.youtube.com/watch?v=IBGTDm7M7G4&t=1002',srcStartTime:'0:16:42',},
    { id:'s5', label:'そ', imgPath:'s5.jpg', soundPath:'../res-kiki/s5.mp3', cb:'20220619-002223', illustrator:'821-scoVill'       ,cardText:'そでのなか 見ようとしちゃだめ',reading:'そでの中に住みたい。この冬を紫水キキのそでの中で過ごしたい',srcTitle:'【暗黒集会】ハロウィンはキミたちと暗黒集会',srcURL:'https://www.youtube.com/watch?v=w-IXlN7FBkU&t=369',srcStartTime:'0:06:09',},
    { id:'t1', label:'た', imgPath:'t1.jpg', soundPath:'../res-kiki/t1.mp3', cb:'20220619-002223', illustrator:'塩見鶏'            ,cardText:'たいちょう すぐ くずす',reading:'体調良い日あるのって言うとまあ、ほとんどね、ほとんどが体調よくない日ではあるかもしれないんだけども',srcTitle:'【Unpacking】お片付け全一',srcURL:'https://www.youtube.com/watch?v=1UNvNMezUOg&t=226',srcStartTime:'0:03:46',},
    { id:'t2', label:'ち', imgPath:'t2.jpg', soundPath:'../res-kiki/t2.mp3', cb:'20220619-002223', illustrator:'ノック・エンガチョ',cardText:'ちこく ちこく～～',reading:'遅刻ってさあ どのくらいから遅刻っていう？ 1分？10分？待てる？',srcTitle:'街で見かけた仲良さそうなJKの制服が違う学校同士だと勝手に感動する委員会',srcURL:'https://www.youtube.com/watch?v=mPbnjU9UJ6M&t=450',srcStartTime:'0:07:30',},
    { id:'t3', label:'つ', imgPath:'t3.jpg', soundPath:'../res-kiki/t3.mp3', cb:'20220619-002223', illustrator:'あつしま'          ,cardText:'つがるかいきょうは サムイ',reading:'あ～あ～ 津軽海峡冬景色～♩',srcTitle:'【お誕生日カウントダウン】名場面をみんなと振り返りながら迎えたいポポ！【家入ポポ / ひよクロ】',srcURL:'https://www.youtube.com/watch?v=KfOYd8QIDd0&t=2333',srcStartTime:'0:38:53',},
    { id:'t4', label:'て', imgPath:'t4.jpg', soundPath:'../res-kiki/t4.mp3', cb:'20220619-002223', illustrator:'あつしま'          ,cardText:'てきは ほんのうじでねてる',reading:'敵は本能寺にあり',srcTitle:'【#ひよクロコラボ】一人じゃ解けない問題もみんなでなら解けるよね？※簡単な問題しか出ません！',srcURL:'https://www.youtube.com/watch?v=p8drQCwNhGI&t=2425',srcStartTime:'0:40:25',},
    { id:'t5', label:'と', imgPath:'t5.jpg', soundPath:'../res-kiki/t5.mp3', cb:'20220619-002223', illustrator:'SA MA'             ,cardText:'とりあえずでたのむ 前菜でおなかいっぱいになってしまう',reading:'とりあえず出しとくか',srcTitle:'実は話すの三回目の先輩だけど全然舐めてないよ♡リンちゃまのこともっと知りたいな♡雑談',srcURL:'https://www.youtube.com/watch?v=U7AC86Qqo_Q&t=1890',srcStartTime:'0:31:30',},
    { id:'n1', label:'な', imgPath:'n1.jpg', soundPath:'../res-kiki/n1.mp3', cb:'20220619-002223', illustrator:'汐こうじ'          ,cardText:'なまくび',reading:'生首を お姉さまが お姉さまが持ってきてくれたのかな～',srcTitle:'【Minecraft】操作に慣れてきたので落下なんかするわけない',srcURL:'https://www.youtube.com/watch?v=OoF8JXILkyo&t=2923',srcStartTime:'0:48:43',},
    { id:'n2', label:'に', imgPath:'n2.jpg', soundPath:'../res-kiki/n2.mp3', cb:'20220619-002223', illustrator:'きの'              ,cardText:'にゃーにゃーにゃーの日',reading:'にゃんにゃんタイム',srcTitle:'ネコチャン見たりお城建築見たりのおさんぽ',srcURL:'https://www.youtube.com/watch?v=VFbeiCIyQiQ&t=1284',srcStartTime:'0:21:24',},
    { id:'n3', label:'ぬ', imgPath:'n3.jpg', soundPath:'../res-kiki/n3.mp3', cb:'20220619-002223', illustrator:'12指腸'            ,cardText:'ぬり絵 バケツぬり 不可',reading:'ぬり分けとかしてるときも飽きちゃうんだよねぇ',srcTitle:'【Minecraft】魅惑の整地～昨日のアンケートについて雑談しながら～',srcURL:'https://www.youtube.com/watch?v=NXSzultGcI0&t=1090',srcStartTime:'0:18:10',},
    { id:'n4', label:'ね', imgPath:'n4.jpg', soundPath:'../res-kiki/n4.mp3', cb:'20220619-002223', illustrator:'jyaco'             ,cardText:'ねるこは そだつ',reading:'寝る子たちはおやすみ～',srcTitle:'【ASMR　囁き/whisper】眠れないキミに羊を数えてあげよう',srcURL:'https://www.youtube.com/watch?v=fHTiUFXwv-k&t=4123',srcStartTime:'1:08:43',},
    { id:'n5', label:'の', imgPath:'n5.jpg', soundPath:'../res-kiki/n5.mp3', cb:'20220619-002223', illustrator:'ふかひれ'          ,cardText:'のうりょくしゃ へぇ… キミも そうなのか',reading:'能力者たちが居る中で、能力持ってないやつが何故か強いみたいな あるなあ',srcTitle:'【12時間】GW最後の日、キキと一緒に過ごすなんでもない日常',srcURL:'https://www.youtube.com/watch?v=rwP7rDIX85g&t=5621',srcStartTime:'1:33:41',},
    { id:'h1', label:'は', imgPath:'h1.jpg', soundPath:'../res-kiki/h1.mp3', cb:'20220619-002223', illustrator:'maeyu'             ,cardText:'はしっこが すき',reading:'はじっこしかないじゃん',srcTitle:'【Minecraft】魅惑の整地～昨日のアンケートについて雑談しながら～',srcURL:'https://www.youtube.com/watch?v=NXSzultGcI0&t=3144',srcStartTime:'0:52:24',},
    { id:'h2', label:'ひ', imgPath:'h2.jpg', soundPath:'../res-kiki/h2.mp3', cb:'20220619-002223', illustrator:'ぼんじりウマ太郎'  ,cardText:'ひまつぶしに 天井見はじめて 早4時間経つ',reading:'暇になったから飲むかぁ',srcTitle:'【Golf it/ゲーム】キミたちを労わる為のゴルフ',srcURL:'https://www.youtube.com/watch?v=oR1SOYf7xtM&t=2665',srcStartTime:'0:44:25',},
    { id:'h3', label:'ふ', imgPath:'h3.jpg', soundPath:'./h3.mp3'          , cb:'20220619-002223', illustrator:'くずはな＊'        ,cardText:'ふかしキキ',reading:'ふぅ～って、ふぅ～ってなってしまうんですけれども',srcTitle:'【歌枠/SINGING】夜に聴くならやっぱりこの可愛いもダークも詰め込み歌枠',srcURL:'https://www.youtube.com/watch?v=zy9LolBpsTo&t=3792',srcStartTime:'1:03:12',},
    { id:'h4', label:'へ', imgPath:'h4.jpg', soundPath:'../res-kiki/h4.mp3', cb:'20220619-002223', illustrator:'きの'              ,cardText:'へぇ… あんたも キキっていうんだ',reading:'へぇ、これが紫水キキの配信か～ まぁ聞いてやるか～',srcTitle:'【睡眠】二度寝したいからどうにかしてキキを寝かしつけてくれ頼んだ',srcURL:'https://www.youtube.com/watch?v=fRrMOxcEa0A&t=4151',srcStartTime:'1:09:11',},
    { id:'h5', label:'ほ', imgPath:'h5.jpg', soundPath:'../res-kiki/h5.mp3', cb:'20220619-002223', illustrator:'塩見鶏'            ,cardText:'ほんもののキキはどーれだ',reading:'ほんもののキキはどーれだ',srcTitle:'【Minecraft】羊毛小屋を完成させたいめえええええええええ',srcURL:'https://www.youtube.com/watch?v=cjV0JuXf-e0&t=95',srcStartTime:'0:01:35',},
    { id:'m1', label:'ま', imgPath:'m1.jpg', soundPath:'./m1.mp3'          , cb:'20220619-002223', illustrator:'ぼんじりウマ太郎'  ,cardText:'まーーらいおん',reading:'まぁまぁまぁ',srcTitle:'【#紫水キキ初配信】やぁキミたち、はじめまして',srcURL:'https://www.youtube.com/watch?v=ZYcUYiNgBS0&t=652',srcStartTime:'0:10:53',},
    { id:'m2', label:'み', imgPath:'m2.jpg', soundPath:'../res-kiki/m2.mp3', cb:'20220619-002223', illustrator:'からた'            ,cardText:'みもフタも キキもないこと言う (おろか)',reading:'『み』っていうの…そのなんていうかキキ…キキの『み』ってこと',srcTitle:'【雑談】キキかるたやろう！！！！！！！！！！！！！！！！！！！！！',srcURL:'https://www.youtube.com/watch?v=MpX3ddh_j48&t=1253',srcStartTime:'0:20:53',},
    { id:'m3', label:'む', imgPath:'m3.jpg', soundPath:'../res-kiki/m3.mp3', cb:'20220619-002223', illustrator:'touki'             ,cardText:'むいしきに わらってるときってけっこう つかれてるから きをつけてね',reading:'無意識に 何かを 足とか腕とかを押し付けてることもあるのかもしれない',srcTitle:'【Vampire Survivors】BANの影響で昨日の配信が冥界行きしたのでリベンジャーズサバイバーズ',srcURL:'https://www.youtube.com/watch?v=0JBOoF5poGY&t=5706',srcStartTime:'1:35:06',},
    { id:'m4', label:'め', imgPath:'m4.jpg', soundPath:'../res-kiki/m4.mp3', cb:'20220619-002223', illustrator:'lilｨ'              ,cardText:'めがねキキ',reading:'眼鏡くいくいのやつ1個出しとこうか最初に',srcTitle:'【暗黒集会】正直あの日以来妄想マロが溜まり過ぎているので一度闇を解き放つ',srcURL:'https://www.youtube.com/watch?v=nSQ_gOwYfY0&t=660',srcStartTime:'0:11:00',},
    { id:'m5', label:'も', imgPath:'m5.jpg', soundPath:'./m5.mp3'          , cb:'20220619-002223', illustrator:'エリアル'          ,cardText:'もも',reading:'ふともものベルトの下 まな板の上 裾の奥',srcTitle:'【記念】メンバーシップ解放感謝のバッジ発表会',srcURL:'https://www.youtube.com/watch?v=fnfOYf3Mqfc&t=530',srcStartTime:'0:08:50',},
    { id:'y1', label:'や', imgPath:'y1.jpg', soundPath:'../res-kiki/y1.mp3', cb:'20220619-002223', illustrator:'961ニウム'         ,cardText:'やだやだやだやだやだやだやだ',reading:'やだやだやだやだやだやだやだ',srcTitle:'【世界のアソビ大全51】コネクトフォーで774inc.の後輩ボコってみたｗｗｗｗｗ',srcURL:'https://www.youtube.com/watch?v=M2qdmxDA7MU&t=3265',srcStartTime:'0:54:25',},
    { id:'y3', label:'ゆ', imgPath:'y3.jpg', soundPath:'../res-kiki/y3.mp3', cb:'20220619-002223', illustrator:'ばさ'              ,cardText:'ゆうがたごろ おきるから いつも くらい',reading:'ゆうがたごろもさー 聞いてない人居たらアレなんだけどさあ ドレッシングの擬人化の話かなんかで盛り上がってさあ',srcTitle:'【12時間】GW最後の日、キキと一緒に過ごすなんでもない日常',srcURL:'https://www.youtube.com/watch?v=rwP7rDIX85g&t=30445',srcStartTime:'8:27:25',},
    { id:'y5', label:'よ', imgPath:'y5.jpg', soundPath:'./y5.mp3'          , cb:'20220619-002223', illustrator:'汐こうじ'          ,cardText:'よると ひとりと どうぶつがすき だーれだ',reading:'キキが夜な夜なブランコ乗りにいくから ちょっと撤去するのやめて欲しいんだよね',srcTitle:'【12時間】GW最後の日、キキと一緒に過ごすなんでもない日常',srcURL:'https://www.youtube.com/watch?v=rwP7rDIX85g&t=12017',srcStartTime:'3:20:17',},
    { id:'r1', label:'ら', imgPath:'r1.jpg', soundPath:'../res-kiki/r1.mp3', cb:'20220619-002223', illustrator:'ガーターベルツァー',cardText:'らっこ',reading:'らっこ欲しいらっこ',srcTitle:'【雑談】キキかるたやろう！！！！！！！！！！！！！！！！！！！！！',srcURL:'https://www.youtube.com/watch?v=MpX3ddh_j48&t=1408',srcStartTime:'0:23:28',},
    { id:'r2', label:'り', imgPath:'r2.jpg', soundPath:'./r2.mp3'          , cb:'20220619-002223', illustrator:'lilｨ'              ,cardText:'りめんばー みー',reading:'りぃちゅ先生ね やりたいねって一緒に言ってて でもなかなかタイミングがなくてね キキもちょっとバタバタしてて 遊べてよかったよかった',srcTitle:'【雑談】五月病末期患者の皆さん、コチラへ【紫水キキ / ひよクロ】',srcURL:'https://www.youtube.com/watch?v=XN6Il9I3ERc&t=490',srcStartTime:'0:08:10',},
    { id:'r3', label:'る', imgPath:'r3.jpg', soundPath:'./r3.mp3'          , cb:'20220619-002223', illustrator:'リク'              ,cardText:'るまんどのおいしさを 大人になってから気づいた人を見る目',reading:'ルドーです',srcTitle:'【世界のアソビ大全51/ゲーム】いくら仲良しのひよクロとて大喧嘩するかもしれないアレをやる',srcURL:'https://www.youtube.com/watch?v=FeArUDS7K-0&t=324',srcStartTime:'0:05:24',},
    { id:'r4', label:'れ', imgPath:'r4.jpg', soundPath:'../res-kiki/r4.mp3', cb:'20220619-002223', illustrator:'ふかひれ'          ,cardText:'れむすいみんって 浅い眠りか深い眠りか どっちだっけーってなるよね',reading:'ノンレムでノンついてるのにそれが実は寝てる方のやつとかよく分かんないんだよな',srcTitle:'【#キキキニナル】完全なる初会話、ひよクロが好きという噂は本当なんですか？？？と問い詰めてみたいと思う【緋笠トモシカ/紫水キキ / ひよクロ】',srcURL:'https://www.youtube.com/watch?v=qdN9yztoYjE&t=4667',srcStartTime:'1:17:47',},
    { id:'r5', label:'ろ', imgPath:'r5.jpg', soundPath:'../res-kiki/r5.mp3', cb:'20220619-002223', illustrator:'jyaco'             ,cardText:'ろいやるみるくてぃー がのみたい顔',reading:'ロイヤルミルクティーを そう それでキキ初めて紅茶っていうものを飲んだんだよ',srcTitle:'【キキごはん】キキにとっては朝ごはんだけれども',srcURL:'https://www.youtube.com/watch?v=V8LJKBos-j0&t=3232',srcStartTime:'0:53:52',},
    { id:'w1', label:'わ', imgPath:'w1.jpg', soundPath:'../res-kiki/w1.mp3', cb:'20220619-002223', illustrator:'くずはな＊'        ,cardText:'わかんないっぴ',reading:'わかんないっぴ じゃないのよ～',srcTitle:'【Minecraft】ひさしぶりのマイクラは真夜中の怪しげな作業雑談の巻',srcURL:'https://www.youtube.com/watch?v=oj2NicxcUH4&t=3350',srcStartTime:'0:55:50',},
    { id:'w5', label:'を', imgPath:'w5.jpg', soundPath:'../res-kiki/w5.mp3', cb:'20220619-002223', illustrator:'バネ'              ,cardText:'をたくっていう？ おたくっていう？',reading:'ヲタクくんさぁすぐ眼鏡くいくいし始めるからさぁ',srcTitle:'【キキ散歩】だらりゆるりとさんぽ道',srcURL:'https://www.youtube.com/watch?v=Xvk3cbM_Ob0&t=2656',srcStartTime:'0:44:16',},
    { id:'nn', label:'ん', imgPath:'nn.jpg', soundPath:'../res-kiki/nn.mp3', cb:'20220619-002223', illustrator:'はつほ'            ,cardText:'んまーーーい',reading:'んまーーーい',srcTitle:'【Minecraft】羊毛小屋を完成させたいめえええええええええ',srcURL:'https://www.youtube.com/watch?v=cjV0JuXf-e0&t=672',srcStartTime:'0:11:12',},
  ],
};

export default settings;