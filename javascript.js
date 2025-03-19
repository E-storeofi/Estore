document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cart-icon"); 
    const cartPanel = document.getElementById("cart-panel"); 
    const closeCart = document.getElementById("close-cart"); 
    cartIcon.addEventListener("click", function (event) {
        event.preventDefault();
        cartPanel.classList.add("show");
    });
    closeCart.addEventListener("click", function () {
        cartPanel.classList.remove("show"); 
    });
});
document.getElementById("ToggleButton").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
