
////////////////////////////////////////////////////////////////////////////////

// let navigator = document.querySelector("#links");
// let user_info = document.querySelector("#user_info");
// let user = document.querySelector("#user");

// if (localStorage.getItem("username")) {
//   navigator.style.display = "none";
//   user_info.style.display = "flex";
//   user.innerHTML = localStorage.getItem("username");
// }
///////////////////////////////////////////////////////////////////////////////

var allProducts = document.querySelector(".products");
let cartProducts = JSON.parse(localStorage.getItem("ProductsInCart"));
console.log(cartProducts)
if(cartProducts){
    drawItems(cartProducts);
}
function drawItems(products) {
    let i=0
    let productItem = products.map((item) => {
       return `
                <div class="product_item">
                    <img class="product_item_img" src="${item.imageUrl}">
                    <div class="product_item_desc">
                        <h2>"${item.title}"</h2>
                        <p>${item.description}"</p>
                    <span>color: "${item.color}"</span>
                    </div>
                    <div class="product_item_action">
                         <button class="add_to_cart" id="remove" onClick="removeFromCart(${i++})">Remove from cart</button>
                    </div>
                </div>
             `
     });
      allProducts.innerHTML = productItem.join('');
}
// remove item from cart using the item index
let btnRemove =document.querySelector("#remove-btn");
function removeFromCart(i){
console.log(i)
cartProducts.splice(i,1);
drawItems(cartProducts);
localStorage.setItem("ProductsInCart",JSON.stringify(cartProducts))
}

