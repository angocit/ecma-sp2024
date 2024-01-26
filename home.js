const API ='http://localhost:3000/products';
const RenderProduct = async()=>{
    const data = await fetch(API);
    const products = await data.json();
    const content = document.getElementById("product-content");
    products.map(({id,name,price,image})=>{
        let div = document.createElement("div");
        div.classList.add("col-6");
        div.classList.add("col-sm-4");
        div.classList.add("col-md-3");         
        div.innerHTML =`
            <img src = "${image}"/>
            <h3>${name}</h3>
            <span class="price">${price}</span>
            <p></po><button class="btn btn-primary" onclick="addToCart(${id})">Add to cart</button></p>
        `
        content.appendChild(div);
    });
    console.log(products);
}
RenderProduct();

const addToCart=(e)=>{
    const cart = {
        pid: e,
        quantity: 1
    }
    const carts = localStorage.getItem('cart');
    if (carts==null){
        const mang = [cart];
        localStorage.setItem('cart', JSON.stringify(mang));
    }
    else{
    // console.log(JSON.parse(carts));
    let slg = 1;
    const cartarr = JSON.parse(carts);
    checkkey = -1;
    cartarr.map(({pid,quantity},key)=>{
        console.log(quantity);
        if (e==pid){
            slg = quantity+1;
            checkkey =key;
        }
    });
    if (checkkey>-1){
        cartarr[checkkey].quantity =slg;
        localStorage.setItem('cart', JSON.stringify(cartarr));
    }
    else {
       const productinCart = [...cartarr];
        productinCart.push(cart);
        localStorage.setItem('cart', JSON.stringify(productinCart));
    }
    }
// 
}
const CheckCart=()=>{
    const cart = localStorage.getItem('cart');
    console.log(JSON.parse(cart));
}
const DelCart=()=>{
    localStorage.removeItem('cart');
}