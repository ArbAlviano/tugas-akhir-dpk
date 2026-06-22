function LoginPage(event) {
    event.preventDefault(); 

    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    console.log("Tombol Login di Klik!");
    console.log("Username yang diinput:", usernameInput);
    console.log("Password yang diinput:", passwordInput);
    
    if (usernameInput === "user" && passwordInput === "1234") {
        console.log("berhasil");
        alert("Login Berhasil! Selamat datang, user.");
        window.location.href = "/tugasahir/home.html"; 
    } else if (usernameInput === "" || passwordInput === "") {
        alert("Harap isi semua kolom Username dan Password!");
        console.log("isi semua kolom");
    } else {
        alert("Username atau Password salah! Silakan coba lagi.");
        console.log("salah");
    }
}