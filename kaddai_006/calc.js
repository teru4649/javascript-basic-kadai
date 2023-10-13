//変数numに0～15までのランダムな整数を代入
// let num = Math.floor(Math.random() * 16);

//変数numに適当な値を代入
let num = 6;

if (num % 3 == 0 && num % 5 == 0) {
  console.log('変数に入っている値は' + num + 'です。');
  console.log('3と5の倍数です');
}
//変数numの値が3で割った余りが0の場合、【3の倍数です】を出力
else if (num % 3 == 0) {
  console.log('変数に入っている値は' + num + 'です。');
  console.log('3の倍数です');
}
//変数numの値が5で割った余りが0の場合、【5の倍数です】を出力
else if (num % 5 == 0) {
  console.log('変数に入っている値は' + num + 'です。');
  console.log('5の倍数です。');
}
else {
  console.log('変数に入っている値は' + num + 'です。');
  console.log('');
}
