// const tenham = function *(a,b){
//     yield a+b;
//     yield a-b;
//     yield a*b;
//     yield a/b;
// }
// let ktra = tenham(5,6);
// console.log(`Tong 2 so la: ${ktra.next().value}`);
// console.log(`Hiệu 2 so la: ${ktra.next().value}`);
// console.log(`Tích 2 so la: ${ktra.next().value}`);
// console.log(`Thương 2 so la: ${ktra.next().value}`);
// const obj = {
//     firstname: "Ngô",
//     lastname: "Khá",
//     fullname(){
//         return `${this.firstname} ${this.lastname}`;
//     }
// }
// console.log(obj.fullname());
class WD18327{
    constructor(tentruong, chuyennganh){
        this.tentruong = tentruong;
        this.chuyennganh = chuyennganh;
    }
}
class Sinhvien extends WD18327{
    constructor(tensinhvien,namsinh,tentruong,chuyennganh){
        super(tentruong,chuyennganh);
        this.tensinhvien= tensinhvien,
        this.namsinh = namsinh
    }
    hienthi(){
        console.log(`Tên sinh viên là: ${this.tensinhvien}`);
        console.log(`Năm sinh: ${this.namsinh}`);
        console.log(`Chuyên ngành: ${this.chuyennganh}`);
        console.log(`Trường: ${this.chuyennganh}`);
    }
}
let lop = new WD18327("CĐ FPT Polytechnic","Marketing");
let sv = new Sinhvien("Nguyễn ĐỨc Anh",2005,lop.tentruong,lop.chuyennganh);
sv.hienthi();
// let kv = new Khuvuc("Đông Nam Á","Châu Á");
// // console.log(`Khu vực: ${kv.tenkhuvuc}`);
// let quocgia = new Quocgia("Vietnam","Kinh",kv.tenkhuvuc,kv.vitri);
// console.log(`Ten quoc gia: ${quocgia.tenquocgia}`);
// console.log(`Dan toc chu yeu: ${quocgia.dantoc}`);
// console.log(`Thuộc khu vực: ${quocgia.tenkhuvuc}`);
// console.log(`Tại vị trí: ${quocgia.vitri}`);