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
  
  //ページ読み込み
  document.addEventListener('DOMContentLoaded', () => {
    img.src = list[imgN]; //１枚目(配列listの先頭)を設定
  });

  let imgN = 0; //現在のファイル番号

  //右矢印ボタンをクリック
  rightArrow.addEventListener('click', () => {
    imgN ++;
    if(imgN >= list.length){
      imgN = list.length - 1; //最大値を上回らないよう固定
    }
    img.src = list[imgN];
  });
  //左矢印ボタンをクリック
  leftArrow.addEventListener('click', () => {
    imgN --;
    if(imgN < 0){
      imgN = 0; //最小値を下回らないように固定
    }
    img.src = list[imgN];
  });

}