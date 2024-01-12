// -----------Các cách truy cập đến DOM--------------------
// document.getElementById("Tên ID");
// document.getElementsByClassName("Tên Class");
// document.getElementsByTagName("Tên thẻ");
// document.querySelector("Thuộc tính")   với thuộc tính có thể là:
// .tenclass || tenthe || #tên_ID...
// document.querySelectorAll("Thuộc tính") với thuộc tính có thể là:
// .tenclass || tenthe || #tên_ID...
// https://img.freepik.com/free-psd/furniture-facebook-cover-web-banner-template_237398-331.jpg
let content = document.getElementById("content");
// console.dir(content);
let firtimg = content.firstElementChild;
firtimg.src = "https://img.freepik.com/free-psd/furniture-facebook-cover-web-banner-template_237398-331.jpg";
// console.dir(firtimg);
// content.innerHTML = "Nội dung mới"
// console.log(content.innerHTML);