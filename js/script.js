// login   sign up + save data in local storage
// products // add products to cart // add some products fav and delete
// add 1 or more products
// user without login can see only the products
///////////////////////////////////////////////////////////////////////////////////

// localStorage.setItem("first car" , "Toyota")
// console.log(localStorage.getItem("first car"))

// localStorage.setItem("student1" , "Abdo")
// console.log(localStorage.getItem("student1"))

// localStorage.removeItem("first car" , "Toyota")

// localStorage.clear()

////////////////////////////////////////////////////////////////////////////////

let allProducts = document.querySelector(".products");
let products = [
  {
    id: 1,
    title: "Oppo reno 7",
    description: "The new mobile from oppo company 6-2022",
    color: "black",
    imageUrl: "images/oppo1.jpeg",
  },
  {
    id: 2,
    title: "Iphone 13",
    description: "The new mobile from oppo company 6-2022",
    color: "metalic",
    imageUrl: "images/iphone.jpeg",
  },
  {
    id: 3,
    title: "LIGE Men's Military Steel Wristwatch",
    description:
      "Waterproof Chronograph Analog Quartz Watch for Business and Casual Occasions",
    color: "black",
    imageUrl: "images/watch.jpeg",
  },
  {
    id: 4,
    title: "Oppo reno 7",
    description: "The new mobile from oppo company 6-2022",
    color: "green",
    imageUrl: "images/oppo1.jpeg",
  },
];

function drawItems() {
  let y = products.map((item) => {
    return `
                <div class="product_item">
                    <img class="product_item_img" src="${item.imageUrl}">
                    <div class="product_item_desc">
                        <h2>"${item.title}"</h2>
                        <p>${item.description}"</p>
                    <span>color: "${item.color}"</span>
                    </div>
                    <div class="product_item_action">
                       
                        <button class="add_to_cart" onClick="addToCart(${item.id})">Add to cart</button>
                        <i class="fav far fa-heart"></i>
                    </div>
                </div>
                `
  });
  allProducts.innerHTML = y.join('');
}

drawItems();

let cartProductDive = document.querySelector(".cart_products div");
let badge = document.querySelector(".badge");


/*--------------------------------------*/
let addedItems = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")): [];
console.log(addedItems)

if(addedItems){
  addedItems.map(item => {
    cartProductDive.innerHTML += `<p>${item.title}</p>`;
})
badge.style.display = "block";
badge.textContent =addedItems.length;
}


/*----------------------------------------*/

  if (localStorage.getItem("username")) {
    function addToCart(id) {
      let chossenItem = products.find((item) => item.id === id);
      cartProductDive.innerHTML += `<p>${chossenItem.title}</p>`;

      addedItems.push(chossenItem);
      localStorage.setItem("ProductsInCart", JSON.stringify(addedItems));
      console.log(localStorage.getItem("ProductsInCart"));

      /*-- Get the count of products in the cart by counting pragraphs on the cart div */
      let cartProductCount = document.querySelectorAll(".cart_products div p" ).length;
      badge.textContent = cartProductCount;

      /*--Get the count of products in the cart by increasing the count when adding a new product */
      //badge.textContent = parseInt(badge.textContent)  + 1;
      badge.style.display = "block";
    }
  } else {
    console.log("faild");
    window.location = "login.html";
  }


let cartProducts = document.querySelector(".cart_products");

let shoppingCart = document.querySelector(".shopping_cart");
shoppingCart.addEventListener("click", () => {
  if (cartProducts.style.display === "block") {
    cartProducts.style.display = "none";
  } else {
    cartProducts.style.display = "block";
  }
});
