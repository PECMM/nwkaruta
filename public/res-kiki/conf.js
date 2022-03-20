const settings = {
  appId: 'kikisamakaruta',
  dataId:'1',
  
  pageOptions: {
    title: 'キキ様 朝ツイかるた',
    referenceHTML: [
      '元ネタ：<a href="https://twitter.com/Kiki_Shisui">紫水キキ様</a> ',
      '<br />',
      '効果音素材：<a href="https://otologic.jp/">OtoLogic</a>様 ',
    ].map(x => `<span class='footerItem'>${x}</span>`).join(''),
  },
  
  soundSettings: {
    voiceVolume: 1.00,
    effectVolume: 0.10,
  },
  
  endCardSettings: {
    soundPath: 'otsu.mp3',
    imgPath: 'otsu.jpg',
    imgAlpha: 0.40,
    backgroundColor: '#000000',
  },
  
  cards: [
    { id:'a3', label:'う', imgPath:'a3.jpg', soundPath:'a3.mp3', },
    { id:'k1', label:'か', imgPath:'k1.jpg', soundPath:'k1.mp3', },
    { id:'k4', label:'け', imgPath:'k4.jpg', soundPath:'k4.mp3', },
    { id:'s3', label:'す', imgPath:'s3.jpg', soundPath:'s3.mp3', },
    { id:'s5', label:'そ', imgPath:'s5.jpg', soundPath:'s5.mp3', },
    { id:'n2', label:'に', imgPath:'n2.jpg', soundPath:'n2.mp3', },
    { id:'h1', label:'は', imgPath:'h1.jpg', soundPath:'h1.mp3', },
    { id:'m4', label:'め', imgPath:'m4.jpg', soundPath:'m4.mp3', },
    { id:'y1', label:'や', imgPath:'y1.jpg', soundPath:'y1.mp3', },
  ],
};

export default settings;
