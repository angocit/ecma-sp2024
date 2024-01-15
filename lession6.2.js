// setTimeout(()=>{
//     console.log('so1');
//     setTimeout(()=>{
//         console.log('so2');
//         setTimeout(()=>{
//             console.log('so3');
//             setTimeout(()=>{
//                 console.log('so4');
//             },0);
//         },0);
//     },0);
// },0);
// let promise = new Promise((resolve, reject) =>{
//     reject("So1")
// });
// promise.then((result)=>{
// console.log(result);
// }).catch((err)=>{
//  console.log('Lỗi',err);
// });
// let a = setTimeout(()=>{
//     console.log(`so 1`);
//     setTimeout(()=>{
//         console.log(`so 2`);
//         setTimeout(()=>{
//             console.log(`so 3`);
//         },1000);
//     },1000);
// },1000);
// let promise = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve(1);
//     },2000);

// });
// // console.log(promise);
// promise.then((response)=>{
//     console.log(response);
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(2);
//         },1000);
//     });
// }).then((response)=>{
//     console.log(response);
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(3);
//         },1000);
//     });
// })
// .then((response)=>{
//     console.log(response);
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(4);
//         },1000);
//     });
// }).catch((err)=>{
//     console.log(`Loi ${err}`);
// });
// async / Await

// const asyncdemo = ()=>{
//     let data = fetch('https://dummyjson.com/products');
//     data.then((response)=>{
//         console.log(response);
//         return response.json();
//     }).then((response)=>{
//         // console.log(response);
//     });
// }
// asyncdemo();
const asyncdemo = async ()=>{
    let data = await fetch('https://dummyjson.com/products');
    let res = await data.json();
    // console.log(res);
    let content = document.getElementById("product-content");
    const productarr = res.products;
    // let html = '';
    console.log(productarr);
    productarr.map(({title,price,thumbnail})=>{
    //  html +=`<div class="product-item">
    //     <img src ="${thumbnail}"/>
    //     <h3>${title}</h3>
    //     <span>${price}</span>
    //  </div>`;
    let item = document.createElement('div');
    item.classList.add('product-item');
    item.innerHTML = `<img src ="${thumbnail}"/>
         <h3>${title}</h3>
        <span>${price}</span>`;
        content.appendChild(item); 
    });
    // content.innerHTML = html;
};
asyncdemo();