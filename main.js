function foodItem(quantity, options, price, imgsrc){
    this.quantity = quantity;
    this.options = options;
    this.price = price;
    this.imgsrc = imgsrc;
}
const cartArr = [];

function updateCartTab() {
 
    cartArr.push(1)

    let cartNum = cartArr.length - 1; 

    if (cartNum > 0){
    document.getElementById('cart-label').innerHTML
        = "Cart("+cartNum+ ")";
    } else {
        document.getElementById('cart-label').innerHTML
        = "Cart"
    }
}

updateCartTab ();

function myAlert() {
    alert("Items Added to Cart!");
  }

document.getElementById("quantity").change(function() {
    if (this.value == "1") {
        document.getElementsByClassName("price").text("$5.99");
    } else if (this.value == "3") {
        document.getElementsByClassName("price").text("$12.99");
    } else if (this.value == "6") {
        document.getElementsByClassName("price").text("$24.99");
    } else if (this.value == "12") {
        document.getElementsByClassName("price").text("$49.99");
    }
});