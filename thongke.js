const thongke = async()=>{
    const res = await fetch('http://localhost:3000/order_details');
    const orders = await res.json();
    // console.log(order);
    let tongsp = 0;
    let tongdoanhthu = 0;
    for (let order of orders) {
        tongsp+=Number(order.quantity);
        tongdoanhthu +=Number(order.unit_price);
    }
    return {tongsp, tongdoanhthu}
}
const print = async()=>{
    const order = await thongke();
// Truy cập đến node Tổng SP
    const tongsp = document.querySelector('#tongsp strong');
    // Truy cập đến node Doanh thu
    const doanhthu = document.querySelector('#doanhthu strong');
    // console.log(`Tổng sản phẩm: ${order.tongsp}`);
    // console.log(`Tổng doanh thu: ${order.tongdoanhthu}`);
    tongsp.innerHTML=order.tongsp;
    doanhthu.innerHTML=order.tongdoanhthu;
}
print();
