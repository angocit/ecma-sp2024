// Mục tiêu:
    // - Lấy ra danh sách sản phẩm trong giỏ hàng và đổ dữ liệu vào tbody.

// Cách làm.
const rederCart =()=>{
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
        // Duyệt mảng products
        products.map(async ({pid,quantity})=>{
            // console.log(pid,quantity); // Chỉ có id sản phẩm và số lượng
            // Mong muốn là phải có cả tên, ảnh, đơn giá sp
        //  =>Cần viết hàm lấy thông tin tên, ảnh, đơn giá từ id sản phẩm. getProductById()
        
        // lấy dữ liệu sản phẩm thông qua id sản phẩm``
        const product = await getProductById(pid);
        // Tạo một node con chứa thông tin sản phẩm

        const tr = document.createElement('tr');
        //Đổ dữ liệu html vào node con.
        tr.innerHTML=`
        <td></td>
        <td><img src ="${product.image}" width="60"/></td>
        <td>${product.name}</td>
        <td>${quantity}</td>
        <td>${product.price}</td>
        <td>${(product.price*quantity)}</td>
        <td></td>
        `;
        // Đổ dữ liệu của node con vào node tbody
        tbody.appendChild(tr);
            // console.log(product.name);
            //
        });
    }
}
const getProductById=async (pid)=>{
    product = await fetch(`http://localhost:3000/products/${pid}`); //Gọi api
    product = await product.json();
    // console.log(product);
    return {name: product.name,price:product.price,image:product.image}
}
rederCart();