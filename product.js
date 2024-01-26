const renderProduct=async()=>{
    try{
    const response = await fetch('http://localhost:3000/products');
    const product = await response.json();
    const content = document.getElementById('product-content');
    product.map(({id,name,image,price})=>{
        const div = document.createElement('div');
        div.classList.add('col-2');
        div.classList.add('col-sm-4');
        div.classList.add('col-md-3');
        div.innerHTML=`
            <img src="${image}"/>
            <h3>${name}</h3>
            <span>${price}</span> <br>
            <button onClick="addToCart(${id})" class="btn btn-primary">Add to Cart</button>
        `;
        content.appendChild(div);
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
        let ktra = false;
        let keyvalue = -1;
        cartArr.map((value,key)=>{
            //nếu id sản phẩm bằng với giá trị pid của item
            if (value.pid ==id){
                ktra=true;
                keyvalue = key;
            }
        });
        if (ktra){
            cartArr[keyvalue].quantity = cartArr[keyvalue].quantity+1;
            localStorage.setItem('cart',JSON.stringify(cartArr));
        }
        else {
            cartArr.push(data);
            localStorage.setItem('cart',JSON.stringify(cartArr));
        }
    }
}
const delCart =()=>{
    localStorage.removeItem('cart');
}
const checkCart=()=>{
    const cart = localStorage.getItem('cart');
    console.log(JSON.parse(cart));
}