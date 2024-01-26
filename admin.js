const loadProducts = async ()=>{
    let data = await fetch('http://localhost:3000/products');
    let res = await data.json();
    max = Number(maxid(res))+1;
    document.querySelector('input[name="id"]').value = max;
    // console.log(max);
    // console.log(res);
    const tbody = document.querySelector('tbody');
    tbody.innerHTML="";
    res.map((value,index)=>{
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index+1}</td>
            <td>${value.name}</td>
            <td><img src="${value.image}" width="80"/></td>
            <td>${value.price}</td>
            <td><button onclick="editProduct(${value.id})">Sửa</button><button onclick="delProduct(${value.id})">Xóa</button></td>
        `;
        tbody.appendChild(tr);
    });
}
addProduct=async ()=>{
    event.preventDefault();
    let id = document.querySelector('input[name="id"]').value;
    let name= document.querySelector('input[name="name"]').value;
    let price= document.querySelector('input[name="price"]').value;
    let category= document.querySelector('select[name="category"]').value;
    let image= document.querySelector('input[name="images"]').value;
    console.log(id,name,price,category,image);
    let data = {
        "id": id,
        "name": name,
        "price": price,
        "image": image,
        "category": category
      }
    let option = {
        method: "POST",
        body: JSON.stringify(data)
    }
    let rq = await fetch("http://localhost:3000/products",option);
    await loadProducts();
}
delProduct = async(id)=>{
    let option = {
        method: "DELETE"
    }
    let rq = await fetch("http://localhost:3000/products/"+id,option);
    await loadProducts();
}
closeForm = ()=>{
    let popup = document.getElementById("editproduct");
    popup.classList.remove("show");
}
const updateProduct = async()=>{
    event.preventDefault();
    const id = document.querySelector('#editproduct input[name="id"]').value
    const name = document.querySelector('#editproduct input[name="name"]').value;
    const category = document.querySelector('#editproduct select[name="category"]').value;
    const image = document.querySelector('#editproduct input[name="images"]').value;
    const price = document.querySelector('#editproduct input[name="price"]').value;
    // console.log(id,name,price,category,image);
    let data = {
        name: name,
        price: price,
        image: image,
        category: category
      }
    let option = {
        method: "PUT",
        body: JSON.stringify(data)
    }
    let rq = await fetch("http://localhost:3000/products/"+id,option);
    await loadProducts();
    // let popup = document.getElementById("editproduct");
    // popup.classList.remove("show");
}
loadProducts();
const maxid = (data)=>{
    let max= 0;
    data.map(({id})=>{
        if (max <id) max = id;
    })
    return max;
}
const editProduct=async(id)=>{
    // Truy cập các node input để truyền dữ liệu vào.
    const name = document.querySelector('#editproduct input[name="name"]');
    const category = document.querySelector('#editproduct select[name="category"]');
    const image = document.querySelector('#editproduct input[name="images"]');
    const price = document.querySelector('#editproduct input[name="price"]');
    let rq = await fetch("http://localhost:3000/products/"+id);
    let product =await rq.json();
    console.log(product);
    // Truyền dữ liệu vào ô input
    name.value=product.name;
    category.value = product.category;
    image.value = product.image;
    price.value = product.price;
    //Truyền id vào ô input id.
    document.querySelector('#editproduct input[name="id"]').value=id;
    document.querySelector("#editproduct").classList.add("show");
}