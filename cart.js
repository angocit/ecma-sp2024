// Mục tiêu:
    // - Lấy ra danh sách sản phẩm trong giỏ hàng và đổ dữ liệu vào tbody.

// Cách làm.
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
        <td> <input type="number" value="${item.quantity}" data-id="${item.pid}" onchange="ChangeQuantity(this)"/></td>
        <td>${product.price}</td>
        <td>${(product.price*item.quantity)}</td>
        <td></td>
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
        total.innerHTML = tongtien;
    }
}
const getProductById=async (pid)=>{
    product = await fetch(`http://localhost:3000/products/${pid}`); //Gọi api
    product = await product.json();
    // console.log(product);
    return {name: product.name,price:product.price,image:product.image}
}
const ChangeQuantity=(el)=>{
    // console.log(el.value,el.getAttribute('data-id'));
    // Lấy thông tin id sản phẩm và số lượng từ ô input
    let pid = el.getAttribute('data-id');
    let quantity=el.value;
    // => cập nhật số lượng vào trong giỏ hàng.
    // - Lấy thông tin giỏ hàng
    const cart = localStorage.getItem('cart');
    // chuyển string sang json
    cartArr = JSON.parse(cart);
    let keyvalue = -1; // Biến này để kiểm tra vị trí xuất hiện của sản phẩm trong giỏ hàng
    cartArr.map((value,key)=>{
        if (value.pid ==pid){ // Nếu sản phẩm có xuất trong giỏ hàng
            keyvalue = key;
        }
    });
    // Update số lượng vào vị trí key.
    cartArr[keyvalue].quantity = quantity;
    localStorage.setItem('cart',JSON.stringify(cartArr));
    // console.log(cartArr);
    rederCart();
}
rederCart();