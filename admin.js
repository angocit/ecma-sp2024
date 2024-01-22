const loadProducts = async ()=>{
    let data = await fetch('http://localhost:8000/products');
    let res = await data.json();
    // console.log(res);
    const tbody = document.querySelector('tbody');
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
    let rq = await fetch("http://localhost:8000/products",option);
    await loadProducts();
}
delProduct = async(id)=>{
    let option = {
        method: "DELETE"
    }
    let rq = await fetch("http://localhost:8000/products/"+id,option);
    loadProducts();
}
editProduct = (id)=>{
    let popup = document.getElementById("editproduct");
    popup.classList.add("show");
}
closeForm = ()=>{
    let popup = document.getElementById("editproduct");
    popup.classList.remove("show");
}
loadProducts();