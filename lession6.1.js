// const a = [{a:6,b:9},{a:8,b:5},{a:3,b:6}];
const a = [5,6,7,8,9];
// Map.
// a.map((giatri,index)=>{
//     console.log(giatri);
// });
// forEach
// a.forEach((giatri,index)=>{
//     console.log(giatri);
// });
// let tong = a.reduce((result,giatri)=>result+=giatri);
// console.log(tong);
// const b = a.filter(({a,b})=>{
//     return b>5;
// });
const b = a.filter((value)=>{
    return value>6;
});
console.log(b);