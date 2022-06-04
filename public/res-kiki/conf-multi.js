const settings = {
  appId: 'kikisamakaruta-multi',
  
  pageOptions: {
    title: 'キキ様 朝ツイかるた みんなであそぶ',
    referenceHTML: [
      '元ネタ：<a href="https://twitter.com/Kiki_Shisui">紫水キキ</a>様 … <a href="https://twitter.com/search?q=from%3Akiki_shisui%20since%3A2022-02-01_07%3A00%3A00_JST%20until%3A2022-04-11_06%3A20%3A00_JST%20filter%3Aimages&src=typed_query&f=live">かるた画像</a> <a href="https://www.youtube.com/channel/UC3MBUvkVTI9p-p0be7y7TQA">読み上げ音声</a>',
      '※本作は素材をお借りして作成したファンメイドのゲームです',
      '',
      '効果音素材：<a href="https://otologic.jp/">OtoLogic</a>様',
    ].map(x => `<span class='footerItem'>${x}</span>`).join('<br />'),
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
};

export default settings;
