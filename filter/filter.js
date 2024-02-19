// Phương pháp.
//  - Lấy toàn bộ danh sách sản phẩm từ bảng products
//  Lặp mảng sử dụng filter.
const filterProduct = async (catid, minprice,maxprice)=>{
    // Lấy danh sách tất cả sản phẩm.
    const res = await fetch('http://localhost:3000/products');
    const product = await res.json();
    const productfilter = product.filter(value=>{
        return value.category==catid&&value.price>=minprice&&value.price<=maxprice
    });
    console.log(productfilter);
};
filterProduct(1,80000,100000);