// This file contains JavaScript functions for managing the shopping cart, including adding and removing items.

let cart = [];

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartCount();
    alert(`${product.name} has been added to your cart.`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    alert('Product has been removed from your cart.');
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        let cartDetails = 'Your Cart:\n';
        cart.forEach((item, index) => {
            cartDetails += `${index + 1}. ${item.name} - ₱${item.price} x ${item.quantity}\n`;
        });
        alert(cartDetails);
    }
}