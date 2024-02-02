const getProductById=async (pid)=>{
    product = await fetch(`http://localhost:3000/products/${pid}`); //Gọi api
    product = await product.json();
    // console.log(product);
    return {name: product.name,price:product.price,image:product.image}
}
const rederCart =async ()=>{
    // Lấy dữ liệu giỏ hàng từ localStorage.
    //  - Kiểm tra nếu tồn tại thì xử lý render cart.
    //  - Nếu không tồn tại thì thông báo là giỏ hàng trống
    const cart  = localStorage.getItem('cart');
    if (cart ==null){ // Giỏ hàng trống
        // THông báo là giỏ hàng trống.
        // - Truy cập đến node muốn hiển thị thông báo.
        const mess = document.getElementById("cart");
        // Đổ thông báo
        mess.innerHTML="Giỏ hàng trống";
    }
    else { // Giỏ hàng có sản phẩm
        const products = JSON.parse(cart); // Chuyển dữ liệu lấy từ localstorage sang object
        // console.log(products);
        // Truy cập đến vị trí node muốn đổ dữ liệu (tbody).
        const tbody = document.querySelector("tbody");
        tbody.innerHTML='';
        // Duyệt mảng products
        var tongtien = 0;
        for (let item of products){
            // console.log(pid,quantity); // Chỉ có id sản phẩm và số lượng
            // Mong muốn là phải có cả tên, ảnh, đơn giá sp
        //  =>Cần viết hàm lấy thông tin tên, ảnh, đơn giá từ id sản phẩm. getProductById()
        
        // lấy dữ liệu sản phẩm thông qua id sản phẩm``
        const product = await getProductById(item.pid);
        // Tạo một node con chứa thông tin sản phẩm

        const tr = document.createElement('tr');
        //Đổ dữ liệu html vào node con.
        tr.innerHTML=`
        <td></td>
        <td><img src ="${product.image}" width="60"/></td>
        <td>${product.name}</td>
        <td>${item.quantity}</td>
        <td>${(product.price*item.quantity)}</td>
         `;
        // Cộng dồn tiền mỗi lần lặp
        tongtien = tongtien+product.price*item.quantity;
        console.log(tongtien);
        // Đổ dữ liệu của node con vào node tbody
        tbody.appendChild(tr);
            // console.log(product.name);
            //
        };
        // Đổ tổng tiền vào node tổng tiền. => truy cập vào node tổng tiền.
        console.log(tongtien);
        const total = document.querySelector('#total span');
        // Đổ dữ liệu tổng tiền vào node
        total.innerHTML = tongtien;
    }
}
const checkOut=async()=>{
    event.preventDefault();
    let hoten = document.querySelector('input[name="name"]').value;
    let diachi = document.querySelector('input[name="address"]').value;
    let sdt = document.querySelector('input[name="phone"]').value;
    let status = "Đang xử lý";
    let created_date = new Date();
    // Update thoogn tin khách hàng vào trong order đồng thời update thông tin đơn hàng vào mục order_details
    // - Update thông tin khahs hàng hangfbangr order
    const order = await fetch('http://localhost:3000/order',
    {
        method: 'POST',
        body: JSON.stringify({customer_name:hoten,customer_address:diachi,customer_phone_number:sdt,status:status,created_date:created_date})
    }
    );
    // Lấy ID của order
    const order_id = await order.json();
    // Lấy thông tin giỏ hàng lưu vào order_details.
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    for (let item of cart) {
        // lấy thông tin sản phẩm
        const product = await getProductById(item. pid);
        console.log(item);
        // Insert từng sna rphamar vào order_details
        await fetch('http://localhost:3000/order_details',
            {
                method: 'POST',
                body: JSON.stringify({
                    order_id:order_id.id,
                    product_id:item.pid,
                    quantity:item.quantity,
                    unit_price: item.quantity*product.price
                })
            }
            );
    }
}
rederCart();