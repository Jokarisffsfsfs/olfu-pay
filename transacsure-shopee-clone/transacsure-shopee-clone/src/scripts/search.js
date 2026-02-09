// This file contains JavaScript functions for handling product search functionality.

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const productList = document.getElementById('productList'); // Assuming there's an element to display products

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        filterProducts(query);
    });

    function filterProducts(query) {
        const products = productList.getElementsByClassName('product-card'); // Assuming each product card has this class
        Array.from(products).forEach(product => {
            const productName = product.querySelector('.product-name').textContent.toLowerCase(); // Assuming product name has this class
            if (productName.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
});