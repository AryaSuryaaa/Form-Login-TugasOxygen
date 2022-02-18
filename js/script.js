// key

const usernameSaved = "Username";
const passwordSaved = "Password";

// Registrasi

function data(){

    const usernameRegis = document.getElementById("username-regis").value;
    const passwordRegis = document.getElementById("password-regis").value;

    localStorage.setItem(usernameSaved, usernameRegis);
    localStorage.setItem(passwordSaved, passwordRegis);

    alert("your account has been created")
};

// login
function check() {

    const getUsername = localStorage.getItem(usernameSaved);
    const getPassword = localStorage.getItem(passwordSaved);

    const usernameLogin = document.getElementById("username-login");
    const passwordLogin = document.getElementById("password-login");


    if(usernameLogin.value == getUsername && passwordLogin.value == getPassword) {
        alert("You are logined");
    } else {
        alert("Username atau kata sandi salah")
    }
};


document.getElementById("cantNotif").addEventListener("click", function() {
    alert("fungsi ini belum tersedia");
})