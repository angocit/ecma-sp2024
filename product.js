const renderProduct=async()=>{
    try{
    const response = await fetch('http://localhost:3000/products'); // Dữ liệu trả về kiểu Response
    const product = await response.json(); // Dữ liệu trả về dạng mảng.
// console.log(product);
// Khai báo vị trí đổ dữ liệu
    const content = document.getElementById('product-content');
    //Duyệt mảng dữ liệu trả về từ API
    product.map(({id,name,image,price})=>{
        // Tạo mới một node con.
        const div = document.createElement('div');
        // Tạo thuộc tính class cho node con
        div.classList.add('col-2');
        div.classList.add('col-sm-4');
        div.classList.add('col-md-3');
        // Đưa dữ liệu html vào trong node con vừa tạo.
        div.innerHTML=`
            <img src="${image}"/>
            <h3>${name}</h3>
            <span>${price}</span> <br>
            <button onClick="addToCart(${id})" class="btn btn-primary">Add to Cart</button>
        `;
        //Dòng 21 là tạo nút thêm vào giỏ hàng với sự kiện click thì gọi hàm addToCart.
        content.appendChild(div); // Push node con vào vị trí đổ dữ liệu
         // Gọi hàm đổ số lượng giỏ hàng vào vị trí xe đẩy
        RenderTotalQuantityCart();
    });
    }
    catch(e){
        console.log(`Error ${e.message}`);
    }

}
renderProduct();

//localStorage.
const addToCart=(id)=>{
    // console.log(id);
    //tạo một object lưu thông tin số lượng và id sản phẩm được thêm vào giỏ hàng
    const data = {
        pid:id,
        quantity: 1
    }
    const cart = localStorage.getItem('cart');
    // console.log(cart);
    //Trường hợp giỏ hàng trống
    if (cart==null){
        localStorage.setItem('cart',JSON.stringify([data]));
    }
    //Trường hợp giỏ hàng có sản phẩm
    //  - Check sản phẩm thêm vào đã tồn tại trong giỏ hàng chưa.
    // Nếu có rồi thì cập nhật tăng số lương/
    // Nếu chưa: Push Thêm sản phẩm đó vào trong giỏ hàng
    else {        
        //chuyển cart từ string sang json.
        let cartArr = JSON.parse(cart);
        let ktra = false; // Biến này để kiểm tra sản phẩm có tồn tại trong giỏ hàng không. Mặc định là không
        let keyvalue = -1; // Biến này để kiểm tra vị trí xuất hiện của sản phẩm nếu nó tồn tại trong giỏ hàng
        cartArr.map((value,key)=>{
            //nếu id sản phẩm bằng với giá trị pid của item
            if (value.pid ==id){ // Nếu sản phẩm có xuất trong giỏ hàng
                ktra=true;
                keyvalue = key;
            }
        });
        if (ktra){ // Nếu sản phẩm xuất hiện trong giỏ hàng
            cartArr[keyvalue].quantity = cartArr[keyvalue].quantity+1; // Tăng số lượng sản phẩm
            localStorage.setItem('cart',JSON.stringify(cartArr)); // Đặt lại giá trị của giỏ hàng
        }
        else { // Nếu sản phẩm không có trong giỏ hàng
            cartArr.push(data); // Push sản phẩm vào mảng giỏ hàng
            localStorage.setItem('cart',JSON.stringify(cartArr)); // Đặt lại giá trị của giỏ hàng
        }
    }
    // Gọi hàm đổ số lượng giỏ hàng vào vị trí xe đẩy
    RenderTotalQuantityCart();
}
const delCart =()=>{
    localStorage.removeItem('cart');
}
const checkCart=()=>{
    // const cart = localStorage.getItem('cart');
    // console.log(JSON.parse(cart));
    RenderTotalQuantityCart();
}

//Hàm tính tổng số lượng sản phẩm trong giỏ hàng
// Phương pháp:
// - Duyệt mảng
    // mỗi lần duyệt thì cộng với gia stri của quantity

const RenderTotalQuantityCart=()=>{
    // Mục tiêu: Đổ số lượng vào vị trí hình xe đẩy.
// Phương pháp:
//  - Kiểm tra đã tồn tại giỏ hàng chưa?
        //  - Nếu không tồn tại thì không làm gì cả.
        //  - Nếu tồn tại thì:
// - Truy cập đến node vị trí xe đẩy
// - Đổ dữ liệu số lượng vào vị trí xe đẩy

// - Lấy dữ liệu từ giỏ hàng
const carts = localStorage.getItem('cart');
// Kiểm tra giỏ hàng có tồn tại hay không.
if (carts !== null){
//truy cập node là vị trí xe đẩy
const cartItem = document.querySelector('#cart .quantity');
    // Chuyển dữ liệu của giỏ hàng sang JSON.
    const cart = JSON.parse(carts); // Dữ liệu tra về dạng mảng
    console.log(cart);
    // Duyệt mảng.
    // Cách 1 - Dùng reduce.
    let tong = cart.reduce((result,value)=>{
        return result+=value.quantity;
    },0);
    // Cách 2  dùng For.
    // let tong = 0;
    // for (let item of cart){
    //     tong+=item.quantity;
    // }

// console.log(cartItem);
    // Đổ dữ liệu.
    cartItem.innerHTML = tong;
}
}