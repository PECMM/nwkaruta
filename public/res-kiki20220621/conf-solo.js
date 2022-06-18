const settings = {
  appId: 'kikisamakaruta20220621-solo',
  
  penaltySecPerCard: 30,
  rankingAppURL: 'https://script.google.com/macros/s/AKfycby_cGDxRX3wTns6FJEBs6gREnr6WQDTPppjjNOI6wiE-FpXnVdEPUDnw9cRl0XjnabG/exec',
  rankingPage: {
    label: '全国ランキング',
    linkPath: './ranking.html',
  },
  
  tweetHashtag: '紫水百パペ一首',
  pageOptions: {
    title: 'キキ様2022お誕生日記念かるた ひとりであそぶ',
    referenceHTML: [
      `元ネタ：<a href='https://twitter.com/Kiki_Shisui'>紫水キキ</a>様`,
      `  音声：<a href='https://www.youtube.com/channel/UC3MBUvkVTI9p-p0be7y7TQA'>キキ様の配信</a>`,
      `  画像：有志パペくん一同 <a href='res-kiki20220621/special.html'>お誕生日記念 特設ページ</a>`,
      `※本作は素材をお借りして作成したファンメイドのゲームです`,
      ``,
      `効果音素材：<a href='https://otologic.jp/'>OtoLogic</a>様`,
    ].map(x => `<span class='footerItem'>${x}</span>`).join('<br>'),
  },
  
  soundSettings: {
    voiceVolume: 1.00,
    effectVolume: 0.10,
  },
  
  endCardSettings: {
    soundPath: '../res-kiki/otsu.mp3',
    imgPath: 'endcard.jpg?cb=20220618-222426',
    imgAlpha: 0.40,
    backgroundColor: '#000000',
  },
  
  cardSettings: {
    origWidth : 1200,
    origHeight: 1600,
    borderSize: 20,
  },
  
  progressArea: {
    fontColor      : '#DDFFDD',
    backgroundColor: '#35770E',
    splitLineColor : '#330033',
    myUserFontColor   : '#FFFF33', // solo版では使用しない
    otherUserFontColor: '#F0F0F0', // solo版では使用しない
  },
  playArea: {
    backgroundColor: '#54BF16',
    playCountdownLength: 3,
    playCountdownBlinking: false,
    playCountdownImageMarginRate: 0.1, // 画面縦横それぞれに対してこの割合を片側マージンとして減じ、そこからはみ出ないように最大サイズで画像を表示。画像の縦横比は維持
    playCountdownImageItems: [
      { path: 'countdown1.jpg?cb=20220605-070216', textX:0.521, textY:0.761, fontSizeRate: 0.35 },
      { path: 'countdown2.jpg?cb=20220605-071630', textX:0.760, textY:0.710, fontSizeRate: 0.35 },
      { path: 'countdown3.jpg?cb=20220604-054250', textX:0.612, textY:0.640, fontSizeRate: 0.35 },
    ],
    notation: {
      maskAreaMarginRate: 0.05, // 情報表示のための黒塗りマスクを出す際のマージン。概ね 1 - rate * 2 がマスクの画面に占める割合
      maskAreaAlpha: 0.75,
      effectAlpha: 0.90,
      effectOKImagePath: 'effect-ok.png?cb=20220605-225116',
      effectNGImagePath: 'effect-ng.png?cb=20220605-225109',
    },
  },
};

export default settings;
