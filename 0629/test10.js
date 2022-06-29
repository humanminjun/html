// **배열 순환하기 (forEach)
const arr = [
    {id: 0, name: '혜림', age:6},
    {id: 1, name: '현일', age:3},
    {id: 2, name: '현아', age:4},
    {id: 3, name: '우림', age:2}
];
            /*함수의 이름이 없으면 화살표*/
arr.forEach((el) => {
    console.log(el.name);
});