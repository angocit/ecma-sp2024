// let a = 10;
// let b = 5;
// //In tổng a+b
// // console.log('Tổng a+b là: '+(a+b))
// // Template string
// // console.log(`Tổng
// //  ${a}+${b} là: ${a+b}`);
// // function tinhtong (a,b){
// //     return a+b;
// // }
// // Arrow function
// const tinhtong = (a,b=5,c=10)=>a+b+c;
// console.log(`Tổng là: ${tinhtong(5,10)}`);
// function bangcuuchuong(so){
//     console.log('------------Bảng cửu chương số '+so+'-----------');
//     for (var i=0;i<10;i++){
//         console.log(i+'x'+so+'='+(so*i));
//     }

// }
// bangcuuchuong(5);
// Destructuring
// let nameArr = ["Ngô","Bá","Khá"];
// let person = {
//     name: "Ngô Bá Khá",
//     age: 27,
//     address: "Bắc Ninh",
//     status:"Juventus"
// }
// // let [ho,dem,ten] = nameArr;
// let {name:ten,age:tuoi,address:diachi,status:trangthai} = person;
// console.log(diachi);
// console.log(`Địa chỉ là: ${tinhtrang}`);
// let a = 10;
// let b = 30;
// console.log(`Tổng ${a}+${b} là ${a+b}`);
// Destructuring;
// const manga = [6,4,8,10];
// // console.log(manga[1]);
// let [so1,,,so4] = manga;
// console.log(so4);
// Spread, rest
let manga = [1,2,100,10,5,6];
// let max= manga[0];
// for (let so of manga){
//     if (max<so){
//         max = so;
//     }
// }
// console.log(max);

// let mangb = [6,8,1];
// let mangc= [...manga,...mangb];

// let mangb = [6,...manga];
// console.log(mangc);
// let max = Math.min(...manga);
// console.log(max);
const result ={
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
    };
    
function makeList(arr){
    const failureItems =[] ; // Change the code here
    for (let item of arr){
        failureItems.push(`<li class="text-warning">${item}</li>`);
    }
    return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);
    
