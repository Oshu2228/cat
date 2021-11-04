'use strict';

{
  const list = [
    'images/01.jpg',
    'images/02.jpg',
    'images/03.jpg',
    'images/04.jpg',
    'images/05.jpg',
    'images/06.jpg',
    'images/07.jpg',
    'images/08.jpg',
    'images/09.jpg',
    'images/10.jpg',
  ];

  const img = document.getElementById('main');
  const [leftArrow, rightArrow] = document.getElementsByTagName('span');
  let imgN = 0; //現在のファイル番号

  function setImage() {
    img.src = list[imgN];
    p.textContent = `${imgN + 1} / ${list.length}`
  }
  
  //ページ読み込み
  document.addEventListener('DOMContentLoaded', () => {
    // img.src = list[imgN]; //１枚目(配列listの先頭)を設定
    // p.textContent = `${imgN + 1} / ${list.length}`
    setImage();
  });
  
    


  //右矢印ボタンをクリック
  rightArrow.addEventListener('click', () => {
    imgN ++;
    if(imgN >= list.length){
      imgN = list.length - 1; //最大値を上回らないよう固定
    }
    setImage();
  });
  //左矢印ボタンをクリック
  leftArrow.addEventListener('click', () => {
    imgN --;
    if(imgN < 0){
      imgN = 0; //最小値を下回らないように固定
    }
    setImage();
  });

  const p = document.createElement('p');// p 要素を生成
  p.style.color = 'lightgray';// p要素の文字色を設定

  const div = document.getElementById('photo');//親要素
  div.insertBefore(p, img.nextElementSibling); //img要素の下に追加

  //DOMContentLoadedイベントリスナーの設定 ↓

  // let count = 0;
  // document.body.style.color = 'white';

// const countID = setInterval(() => {
// document.body.textContent = count;
// count ++;
// if(count > 5){
//   clearInterval(countID);
// }
// }, 1000);



const Button = document.createElement('button');//再生ボタン
Button.textContent = '自動再生する';
div.appendChild(Button);//div#photo要素の一番下の子要素にする
let autoplay = false;

const stopButton = document.createElement('button');
stopButton.textContent = '停止する';
div.appendChild(stopButton);

Button.addEventListener('click', () => {
  //変数autoplayがfalseの時だけsetIntarvalを呼ぶ
  if(autoplay == false){
    Button.textContent = '無効'// ボタンの表示を変更
    autoplay = setInterval(() => {
      imgN ++;
      if(imgN >= list.length){
        imgN = 0;
      }
      setImage();
    },500)
  }else {
    clearInterval(autoplay);
  autoplay = false; //初期値falseに戻す
  Button.textContent = '自動再生する';
  }
})


stopButton.addEventListener('click', () => {
  clearInterval(autoplay);
  autoplay = false; //初期値falseに戻す
  Button.textContent = '自動再生する';
});


}