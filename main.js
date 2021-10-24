const cartArr = [];

function updateCartTab() {
 
    cartArr.push(1)

    let cartNum = cartArr.length - 1; 

    if (cartNum > 0){
    document.getElementById('cart-label').innerHTML
        = "Cart("+cartNum+ ")";
    }
}

updateCartTab ();

function myAlert() {
    alert("Items Added to Cart!");
  }
