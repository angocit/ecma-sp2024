const loadProduct = async()=>{
    let rq = await fetch("http://localhost:8000/products");
    let data = await rq.json();
    let content = document.getElementById("product-content");
    data.map(({id,title,price,images,description})=>{
        let item = document.createElement('div');
        item.classList.add('product-item');
        item.innerHTML = `<span>${id}</span><br>
        <span>${title}</span><br>
        <span>${price}</span><br>
        <span>${images}</span><br>
        <span>${description}</span><br>`;
        content.appendChild(item); 
    });
}
loadProduct();
const postProduct=async ()=>{
    // console.log("Ok");
    let data = {
        "id": "4",
        "title": "Sản phẩm demo 4",
        "price": 25000,
        "images": "Link img 4",
        "description": "sdfsd s sdfsdf"
      }
    let option = {
        method: "POST",
        body: JSON.stringify(data)
    }
    let rq = await fetch("http://localhost:8000/products",option);
    console.log(`Thêm sản phẩm thành công!`);
}
const editProduct=async ()=>{
    // console.log("Ok");
    let id = document.querySelector("input[name=search]").value;
    console.log(id);
    let data = {
        "id": id,
        "title": `Sửa Sản phẩm demo ${id}`,
        "price": 100000,
        "images": `Link img ${id}`,
        "description": "sdfsd s sdfsdf"
      }
    let option = {
        method: "PUT",
        body: JSON.stringify(data)
    }
    let rq = await fetch("http://localhost:8000/products/"+id,option);
    // console.log(`Thêm sản phẩm thành công!`);
}
const delProduct=async ()=>{
    // console.log("Ok");
    let id = document.querySelector("input[name=search]").value;
    console.log(id);
    let option = {
        method: "DELETE"
    }
    let rq = await fetch("http://localhost:8000/products/"+id,option);
    // console.log(`Thêm sản phẩm thành công!`);
}