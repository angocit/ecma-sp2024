const thongke = async()=>{
    const response = await fetch('http://localhost:3000/order_details');
    const data  = await response.json();
    // console.log(data);
    let soluong = data.reduce((total,order)=>{
        return total += Number(order.quantity);
    },0);
    // console.log(soluong);
    let doanhthu = data.reduce((total,order)=>{
        return total += Number(order.unit_price);
    },0);
    return {tong:soluong,doanhthu:doanhthu}
}
const printResults = async()=>{
    const tk = await thongke();
    console.log(`Số lượng sản phẩm đã bán: ${tk.tong}`);
    console.log(`Doanh thun: ${tk.doanhthu}`);
}
printResults();