let navigator = document.querySelector("#links");
let user_info = document.querySelector("#user_info");
let user = document.querySelector("#user");

if (localStorage.getItem("username")) {
  navigator.style.display = "none";
  user_info.style.display = "flex";
  user.innerHTML = localStorage.getItem("username");
}



let logOutBtn = document.querySelector("#logout")

logOutBtn.addEventListener("click",()=>{
    console.log("log out");
  localStorage.clear();
  setTimeout(function(){
    window.location="login.html";
  } , 1500)
})
