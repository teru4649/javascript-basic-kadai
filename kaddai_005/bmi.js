//変数の定義&代入
let weight = 70;
let height = 1.74;
let BMI = weight / (height*height);
const roundBMI = (Math.round(BMI * 100))/100; //おまけ 小数点の桁数を四捨五入するため
// let roundBMI = round(BMI);

//コンソールへ出力
console.log('体重は'+ weight + 'kgです。');
console.log('身長は' + height + 'mです。');
console.log('BMIは' + BMI + 'です。'); //小数点を整理しない場合
console.log('BMIは' + roundBMI + 'です。'); //おまけ 小数点2桁までで四捨五入して表示