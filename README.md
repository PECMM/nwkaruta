# 汎用NW対戦かるた 動かし方

このリポジトリを fork して heroku へデプロイしたらそのまま動くと思います

## fork 時に必要なこと

### 以下のファイルは変更が必要
* favicon
* ツイッターカードに埋め込まれている絶対URL
  * public/karuta-*-kiki.html 参照  
   (`https://nwkaruta.herokuapp.com/res-kiki/thumb-solo.jpg` など)


## 複数種類のかるた共存時に必要なこと

### 新しい種類のかるた追加に必要なファイル一覧
※`public/res-kiki/` を参考に、 XXXX に置き換えて説明  
※各ファイル名は index.html からのリンクおよび設定ファイル内の記載に一致していればなんでもよいです

```
root/
  ├─ public/
  │     ├─ karuta-multi-XXXX.html
  │     └─ karuta-solo-XXXX.html
  └─ public/res-XXXX/
         ├─ *.[jpg,png]
         ├─ *.mp3
         ├─ otsu.jpg
         ├─ otsu.mp3
         ├─ conf-cards.js
         ├─ conf-multi.js
         ├─ conf-solo.js
         ├─ banner-multi.jpg
         └─ banner-solo.jpg
         ├─ thumb-multi.jpg
         └─ thumb-solo.jpg
```

* 各かるた画面への index.html からのリンクにバナーを用いない場合
  * public/index.html からのリンクを、画像ではなくテキストに変更する
  * 以下のファイルは不要
    * public/res-XXXX/banner-multi.jpg
    * public/res-XXXX/banner-solo.jpg
* 各かるた画面のツイッターカードが不要な場合
  * public/index.html からのリンクを、 karuta-solo-XXXX.html 等を経由せずに直接 `karuta-solo.html?ps=～` に変更する
  * 以下のファイルは不要
    * public/karuta-multi-XXXX.html
    * public/karuta-solo-XXXX.html
      * これらはツイッターカードのためのリダイレクト用ファイル
    * public/res-XXXX/thumb-multi.jpg
    * public/res-XXXX/thumb-solo.jpg
* ゲーム終了時の音声およびエンドカードが不要な場合
  * 各設定ファイル (`conf-*.js` 等) にて、設定値 `endCardSettings.imgPath` および `endCardSettings.soundPath` を宣言しない
  * 以下のファイルは不要
    * public/res-XXXX/otsu.jpg
    * public/res-XXXX/otsu.mp3


### ファイルの編集
1. index.html
1. res-XXXX/conf-*.js
1. かるたの札および読み上げ音声


#### index.html
* 各かるた起動のためのリンク
  * ツイッターカードありの場合 `karuta-solo-XXXX.html` のようなリダイレクト用ファイルへのリンク  
    そうでない場合 `karuta-solo.html?ps=res-XXXX/conf-solo.js&ps=res-XXXX/conf-cards.js` のような設定ファイルを指定するリンク
* リンクの内容
  * バナーありの場合、リンク内容を `res-XXXX/banner-solo.jpg` のような画像  
    そうでない場合、普通のテキスト
* 対戦版・タイムアタック版の双方で同様のリンクを用意する

#### `conf-*.js`
* conf-multi.js, conf-solo.js (双方で同様)
  * **`appId` は必ず固有の値にすること**
    * 対戦部屋が適切に分離できずに、混ざってしまう可能性があります。  
      おそらくエラーで正常に対戦できなくなります
  * `referenceHTML` の画像・音声について説明が必要であれば記述してください
  * `referenceHTML` の効果音素材については書き換えないでください。 (もしくは素材を置きかえた場合は適切に修正)
  * `endCardSettings` 以下の画像・音声を適切に設定
* conf-cards.js
  * 複数のかるた設定ファイルを用意する場合、固有の`dataId`にすること
  * `cards` の画像・音声を適切に設定
  * カード画像の縦横比率は、デフォルトで 4:3 になっています。  
    かるた種類によって切り替える場合は、各 `conf-*.js` 内で `cardSettings.origWidth` 等を上書きしてください。
