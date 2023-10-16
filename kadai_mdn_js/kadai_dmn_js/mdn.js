//年月日取得用関数の設定 (※getMonthは、0を基点としているため、+1している)
const date = new Date();
const [month, day, year] = [
  date.getMonth() + 1,
  date.getDate(),
  date.getFullYear(),
];

console.log('今日の日付は ' + year + '年' + month + '月' + day + '日');