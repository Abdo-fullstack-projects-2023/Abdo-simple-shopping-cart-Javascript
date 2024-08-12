let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let registerbtn = document.querySelector("#sign_up");

function register(e) {
  e.preventDefault();

  if (username === "" || email == "" || password == "") {
    alert("Please enter data");
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    setTimeout(() => {
      window.location ="login.html";
    }, 1000);
  }
}

registerbtn.addEventListener("click", register);
