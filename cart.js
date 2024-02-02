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
        <td><a onclick="delProductInCart('${item.pid}')"><svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1 -32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1 -32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1 -32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.7 23.7 0 0 0 -21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0 -16-16z"/></svg></a></td>
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
const  delProductInCart= (pid)=>{
    // lấy thông tin giỏ hàng
    const cart = localStorage.getItem('cart');
    // chuyển string sang json
    cartArr = JSON.parse(cart);
    // Kiểm tra vị trí của sản phẩm muốn xóa
    let keyvalue = -1; // Biến này để kiểm tra vị trí xuất hiện của sản phẩm trong giỏ hàng
    cartArr.map((value,key)=>{
        if (value.pid ==pid){ // Nếu sản phẩm có xuất trong giỏ hàng
            keyvalue = key;
        }
    });
    // Thực hiện xóa sản phẩm ở vị trí trả về
    cartArr.splice(keyvalue,1);
    // cập nhật lại giỏ hàng
    localStorage.setItem('cart',JSON.stringify(cartArr));
    rederCart();
}
rederCart();