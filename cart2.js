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
                <td><input data="${item.pid}" type ="number" value="${item.quantity}" onchange="changeQuantity(this)"/></td>
                <td>${product.price}</td>
                <td>${product.price*item.quantity}</td>
                <td>Xóa</td>
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
// const check = async()=>{
//     let product = await getProductById(2);
//     console.log(product.name);
// }
// check();

const changeQuantity = (el)=>{
    // console.log(el);
    // lấy thông tin số lượng và id sản phẩm
    let pid = el.getAttribute('data');
    let quantity = el.value;
    // console.log(pid,quantity);
    // Lấy thông tin giỏ hàng
    const cart = localStorage.getItem('cart');
    // chuyển dữ liệu giỏ hàng sang json
    const cartArr = JSON.parse(cart)
    // Kiểm tra vị trí xuất hiện của sản phẩm trong giỏ hàng
    let keyvalue = -1; // Biến này để kiểm tra vị trí xuất hiện của sản phẩm nếu nó tồn tại trong giỏ hàng
    cartArr.map((value,key)=>{
        if (value.pid ==pid){ // Nếu sản phẩm có xuất trong giỏ hàng
            keyvalue = key;
        }
    });
    // Thay đổi số lượng tại vị trí sản phẩm xuất hiện
    cartArr[keyvalue].quantity = quantity;
    // Set lại giỏ hàng theo giá trị mới
    localStorage.setItem('cart',JSON.stringify(cartArr));
    rederCart();
}