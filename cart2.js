/*Phuowgn pháp làm
1. Lấy dữ liệu giỏ hàng từ localStorage.
2. Kiểm tra dữ liệu giỏ hàng có tồn tại hay không
   - Nếu tồn tại thì render sản phẩm
   - Nếu không tồn tại => Hiển thị thông báo giỏ hàng trống
*/
// Cách làm
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
        products.map(async({pid,quantity},index)=>{
            // khởi tạo thẻ tr
            const tr = document.createElement('tr');
            // gọi sản phẩm theo id từ hàm getProductById
            let product = await getProductById(pid);
            tr.innerHTML=`
                <td>${index+1}</td>
                <td><img width="60" src="${product.image}"></td>
                <td>${product.name}</td>
                <td>${quantity}</td>
                <td>${product.price}</td>
                <td>${product.price*quantity}</td>
                <td>Xóa</td>
            `;
            // Đổ dữ liệu vào tbody
            tbody.appendChild(tr);
        });
    }
}
const getProductById = async(pid)=>{
    let product = await fetch(`http://localhost:3000/products/${pid}`);
    product = await product.json();
    // console.log(product);
    return {name:product.name,image:product.image,price:product.price}
}
rederCart();
// const check = async()=>{
//     let product = await getProductById(2);
//     console.log(product.name);
// }
// check();