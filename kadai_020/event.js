//id=btn のHTML要素を定数に代入
const addBtn = document.getElementById('btn');
//id=text のHTML要素を定数に代入
const parentText = document.getElementById('text');

//id=btn のHTML要素がクリックされたときイベント処理を実行
addBtn.addEventListener('click', () => {
  //HTML要素のテキストを変更
  parentText.textContent = 'ボタンをクリックしました';
});