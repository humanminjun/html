//배열 요소를 분할 / 변환(form)
const str = '12345678';

const distributeArr = Array.from(str);
console.log(distributeArr);

const medifiedArr = Array.from(distributeArr, el => el*2);
console.log(medifiedArr);