// const tenham = function *(a,b){
//     yield a-b;
//     yield a+b;
//     yield a*b;
// }
// let ktra = tenham(5,6);
// console.log(`Hiệu là: ${ktra.next().value}`);
// console.log(`Tổng là: ${ktra.next().value}`);
// console.log(`Tích là: ${ktra.next().value}`);
// const obj = {
//     firstname: "Ngô",
//     lastname: "Khá",
//     fullname(){
//         return `${this.firstname} ${this.lastname}`;
//     }
// }
// console.log(obj.fullname());
// class Khuvuc{
//     constructor(khuvuc,vitri){
//         this.tenkhuvuc = khuvuc;
//         this.vitri = vitri;
//     }
// }
// class Quocgia extends Khuvuc{
//     constructor(tenquocgia,dantoc,khuvuc,vitri){
//         super(khuvuc,vitri);
//         this.tenquocgia = tenquocgia;
//         this.dantoc = dantoc;
//     }
// }
// let kv = new Khuvuc("Đông Nam Á","Châu Á");
// // console.log(`Khu vực: ${kv.tenkhuvuc}`);
// let quocgia = new Quocgia("Vietnam","Kinh",kv.tenkhuvuc,kv.vitri);
// console.log(`Ten quoc gia: ${quocgia.tenquocgia}`);
// console.log(`Dan toc chu yeu: ${quocgia.dantoc}`);
// console.log(`Thuộc khu vực: ${quocgia.tenkhuvuc}`);
// console.log(`Tại vị trí: ${quocgia.vitri}`);