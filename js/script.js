// key

const usernameSaved = "Username";
const passwordSaved = "Password";

const fName = "First Name";
const lName = "Last Name";

// Registrasi

function data(){

    const usernameRegis = document.getElementById("username-regis").value;
    const passwordRegis = document.getElementById("password-regis").value;

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    localStorage.setItem(usernameSaved, usernameRegis);
    localStorage.setItem(passwordSaved, passwordRegis);

    localStorage.setItem(fName, firstName);
    localStorage.setItem(lName, lastName);

    alert("your account has been created")
    location.href = "index.html";
};

// login
function check() {

    const getUsername = localStorage.getItem(usernameSaved);
    const getPassword = localStorage.getItem(passwordSaved);

    const usernameLogin = document.getElementById("username-login");
    const passwordLogin = document.getElementById("password-login");


    if(usernameLogin.value == getUsername && passwordLogin.value == getPassword) {
        alert("You are logined");

        location.href = "menu.html";
    } else {
        alert("Incorrect Username or Password!")
    }
};

const getFirstName = localStorage.getItem(fName);
const getLastName = localStorage.getItem(lName);

const text = document.getElementById("text");
text.innerText = "Hey! Welcome " + getFirstName +" "+ getLastName;

