const Register= async()=>{
    event.preventDefault();
    // Lấy thông tin từ input.
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    // gửi request phương thức post lên api json-server-auth: http://localhost:3000/register
    try{
    const res = await fetch('http://localhost:3000/register',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: name, email: email, password: password})
        });
    if (res.status==400){
        console.log(res.statusText);
    }
    else {
        const data = await res.json();
        console.log(data);
        alert('Đăng ký thành công');
    }
}
catch (err){
    console.log(err);
}
    
}
const Login= async()=>{
    event.preventDefault();
    // Lấy thông tin từ input.
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    // gửi request phương thức post lên api json-server-auth: http://localhost:3000/register
    try{
        const res = await fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: email, password: password})
            });
        // console.log(res);
        if (res.status==400){
            alert(`Sai tên Đăng nhập hoặc mật khẩu`);
        }
        else {
            const data  = await res.json();
            console.log(data);
            localStorage.setItem('user',JSON.stringify(data));
            alert(`Đăng nhập thành công`);
        }
    }
    catch (err){
        alert(`Đăng nhập không thành công`);
    }
    
}