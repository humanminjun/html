//내용 찾기 ???.find
const arr =[
    {name:'우림', age: 2},
    {name:'수림', age: 5},
    {name:'후림', age: 30},
    {name:'무림', age: 3},
    {name:'부림', age: 6},

];

const myFriend = arr.find(a => a.age == 30);
console.log(myFriend);