let x =5; //숫자형
let y = 'five';  //문자형
var isTrue = true;  //불린형(Boolean)
var empty = null;  //null
var nothing;  //undefined
var sym = Symbol('me') //Symbol

var item ={
    price : 5000,
    count : 10,
}; //객체(object)
//^^^^^^^^^^^^^^^^^^^^^^^^^데이터의 종류
let fruits = ['apple', 'orange', 'kiwi']
let addFruit = function(fruit){
    fruits.push(fruit);
} //함수
addFruit('watermelone'); //함수 실행

console.log(fruits); //콘솔출력
