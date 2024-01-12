const tenham = function *(a,b){
    yield a-b;
    yield a+b;
    yield a*b;
}
let ktra = tenham(5,6);
console.log(`Hiệu là: ${ktra.next().value}`);
console.log(`Tổng là: ${ktra.next().value}`);
console.log(`Tích là: ${ktra.next().value}`);