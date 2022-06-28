//객체 속성 기술자 이해
//4가지 속성이 있는데
//enumerable false 하면 for문이 실행 되지 않는다.
let car = {
    name: "tesla",
    color: ["red", "blue", "green"],
};

for (let key in car) {
    console.log(key);
}

console.log("enumerable false");
Object.defineProperty(car, "name", {
    value: "tesla upgrade",
    enumerable: false,
});

for (let key in car) {
    console.log(key);
}