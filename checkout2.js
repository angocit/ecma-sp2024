const rederCart = async()=>{
    // Lấy thông tin giỏ hàng từ localstrorage
    const cart = localStorage.getItem('cart');
    // let product = await getProductById(2);
    // console.log(product);
    if (cart == null){  // Giỏ hàng trống
        // - Hiển thị thông báo giỏ hàng trống
        document.getElementById('cart').innerHTML="<pre>Giỏ hàng trống</pre>";
    }
    else {  // TỒn tại giỏ hàng
        const products = JSON.parse(cart);
        console.log(products); // Dữ liệu chỉ có id sp và số lượng => Viết hàm lấy thông tin sản phẩm theo ID
        // Duyệt mảng products để lấy thông tin id, số lượng kết hợp hàm getProductById để đổ dữ lieueh vào tbody
        // Truy cập tbody
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = '';
        let tong = 0;
        // products.map(async({pid,quantity},index)=>{
            let index = 0;
            for (let item of products){
            // khởi tạo thẻ tr
            const tr = document.createElement('tr');
            // gọi sản phẩm theo id từ hàm getProductById
            let product = await getProductById(item.pid);
            tr.innerHTML=`
                <td>${index+1}</td>
                <td><img width="60" src="${product.image}"></td>
                <td>${product.name}</td>
                <td>${item.quantity}</td>
                <td>${product.price}</td>
                <td>${product.price*item.quantity}</td>
                  `;
            // Đổ dữ liệu vào tbody
            tbody.appendChild(tr);
            tong += product.price*item.quantity;
            index++;
        };
        // truy cập node tổng tiền:
        const total = document.querySelector('#totals span');
        // console.log(total);
        total.innerHTML =tong;
    }
}
const getProductById = async(pid)=>{
    let product = await fetch(`http://localhost:3000/products/${pid}`);
    product = await product.json();
    // console.log(product);
    return {name:product.name,image:product.image,price:product.price}
}
rederCart();
const checkOut=async()=>{
    event.preventDefault();
    let hoten = document.querySelector('input[name="hoten"]').value;
    let diachi = document.querySelector('input[name="diachi"]').value;
    let sdt = document.querySelector('input[name="sdt"]').value;
    let status = "Đang xử lý";
    let date = new Date();
    const resorder = await fetch(`http://localhost:3000/order`,{
        method:'POST',
        body: JSON.stringify({
            customer_name:hoten,
            customer_address:diachi,
            customer_phone_number:sdt,
            created_date:date,
            status:status 
        })
    });
    const order = await resorder.json();
    let orderid = order.id;
    // console.log(orderid);
    // Lấy thông tin giỏ hàng.
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    for (let product of cart) {
        price = await getProductById(product.pid);
        await fetch(`http://localhost:3000/order_details`,{
            method:'POST',
            body: JSON.stringify({
                order_id: orderid,
                product_id: product.pid,
                quantity: product.quantity,
                unit_price: price.price*product.quantity
            })
        })
    }
}