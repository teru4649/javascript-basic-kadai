//配列の宣言と値の代入
const holidays = ['正月','成人の日','建国記念日','天皇誕生日','春分の日',
                  '昭和の日','憲法記念日','みどりの日','こどもの日','海の日',
                  '山の日','敬老の日','秋分の日','スポーツの日','勤労感謝の日'];

//for文によるコンソール出力
console.log('for文による祝日の出力');
for (let i = 0; i <= holidays.length-1; i++){
  console.log(holidays[i]);
}

//While文によるコンソール出力
console.log('while文による祝日の出力');
i = 0;
while (i !== holidays.length) {
  console.log(holidays[i]);
  i++;
}