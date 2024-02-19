// Phương pháp.
//  - Lấy toàn bộ danh sách sản phẩm từ bảng products
//  Lặp mảng sử dụng filter.
const filterProduct = async (catid, minprice,maxprice)=>{
    console.log(catid,minprice,maxprice);
    // Lấy danh sách tất cả sản phẩm.
    const res = await fetch('http://localhost:3000/products');
    const product = await res.json();
    const productfilter = product.filter(value=>{
        return value.category==catid&&(Number(value.price)>=Number(minprice)&&Number(value.price)<=Number(maxprice))
    });
    console.log(productfilter);
    renderProduct(productfilter);
};
const Filter = async()=>{
    //Lấy value từ ô input
    const cat = document.querySelector('select').value;
    const maxprice = document.querySelector('input[name="maxprice"]').value;
    const minprice = document.querySelector('input[name="minprice"]').value;
    await filterProduct(cat,minprice,maxprice);
}

const renderProduct = (productarr)=>{
    // Truy cập node đổ dữ liệu
    const content = document.querySelector("#content .row");
    content.innerHTML="";
    productarr.map(data=>{
        const div = document.createElement("div");
        div.classList.add("col-sm-4");
        div.innerHTML=`
            <img src = "${data.image}"/>
            <h3>${data.name}</h3>
            <span>${data.price}</span>
        `;
        content.appendChild(div);
    });
}
// Viết hàm in danh sách tất cả sản phẩm
const printProduct = async()=>{
    // gọi api lấy danh sách sản phẩm 
    const res = await fetch('http://localhost:3000/products');
    const product = await res.json();
    renderProduct(product);
}
printProduct();