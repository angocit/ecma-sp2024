const a = [{a:6,b:9},{a:8,b:5},{a:6,b:6}];
// const a = [5,6,7,8,9,4,3,2];
// // Map.
// for(let item of a){
//     console.log(item);
// }
// for(let i=0; i<a.length; i++){
//     console.log(a[i]);
// }
// a.map((value,index)=>{
//     console.log(value,index);
// });
// // forEach
// a.forEach((value,index)=>{
//     console.log(value);
// });
// let tong = a.reduce((result,value,index)=>{
//     if (index%2==0){
//         result+=value
//     }
//     else{
//         result-=value 
//     }
//     return result;
// });
// console.log(tong);
const b = a.filter(({a,b})=>{
    return b ==5;
});
console.log(b);
// const b = a.filter((value)=>{
//     return value>6;
// });
// console.log(b);