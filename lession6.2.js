
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
//     },1000);

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

const asyncdemo = ()=>{
    let data = fetch('https://dummyjson.com/products');
    // console.log(data);
    data.then((response)=>{
        console.log(response);
        // return response.json();
    }).then((response)=>{
        // console.log(response.products);
    });
}
asyncdemo();
// const asyncdemo = async ()=>{
//     let data = await fetch('https://dummyjson.com/products');
//     console.log(data);
//     // let products = await data.json();
//     // console.log(products);
// }
// asyncdemo();