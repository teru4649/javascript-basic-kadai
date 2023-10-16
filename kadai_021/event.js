//id=btnのHTML要素を定数に代入
const btn = document.getElementById('btn');
//id=textのHTML要素を定数に代入
const text = document.getElementById('text');

//HTML要素がクリックされたときにイベント処理を実行
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);

});