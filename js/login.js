let username = document.querySelector("#username");
let password = document.querySelector("#password");

let loginbtn = document.querySelector("#login");

loginbtn.addEventListener("click", function (e) {
    e.preventDefault()
console.log(username.value);
    if (username.value === "" || password.value === "") {
        alert("Please enter data");
    }
    else {
        var getUser = localStorage.getItem("username");
        var getPass = localStorage.getItem("password");
                if ((getUser && getUser.trim() === username.value.trim()) && (getPass && getPass === password.value)) {
                    setTimeout(() => { window.location = "index.html" }, 1000)            
        }
        else {
            alert("wrong username or passwords");           
        }
    }
    })