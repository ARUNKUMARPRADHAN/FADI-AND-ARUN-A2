document.addEventListener('DOMContentLoaded', function() {
    const productNameSpan = document.getElementById('product-name');
    const productPriceSpan = document.getElementById('product-price');
    const sizeSelect = document.getElementById('size');
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const orderConfirmationDiv = document.getElementById('order-confirmation');
    const selectedProductSpan = document.getElementById('selected-product');
    const selectedSizeSpan = document.getElementById('selected-size');
    const cartDiv = document.getElementById('cart');
    const cartItemsList = document.getElementById('cart-items');
  
    let products = [
      { name: 'T-Shirt', price: 19.99, sizes: ['S', 'M', 'L', 'XL'], imageUrl:'1.png' },
      { name: 'Jeans', price: 39.99, sizes: ['28', '30', '32', '34'], imageUrl: 'jeans.jpg' }
    ];
  
    // Display the first product by default
    displayProductDetails(products[0]);
  
    // Event listener for product selection
    productNameSpan.addEventListener('change', function() {
      const selectedProductName = productNameSpan.value;
      const selectedProduct = products.find(product => product.name === selectedProductName);
      displayProductDetails(selectedProduct);
    });
  
    // Event listener for add to cart button
    addToCartBtn.addEventListener('click', function() {
      const selectedProductName = productNameSpan.value;
      const selectedSize = sizeSelect.value;
      addToCart(selectedProductName, selectedSize);
      selectedProductSpan.textContent = selectedProductName;
      selectedSizeSpan.textContent = selectedSize;
      orderConfirmationDiv.classList.remove('hidden');
      renderCart();
    });
  
    // Function to display product details
    function displayProductDetails(product) {
      productNameSpan.textContent = product.name;
      productPriceSpan.textContent = product.price.toFixed(2);
      sizeSelect.innerHTML = '';
      product.sizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.textContent = size;
        sizeSelect.appendChild(option);
      });
    }
  
    // Function to add product to cart
    function addToCart(productName, size) {
      const product = products.find(product => product.name === productName);
      const cartItem = {
        name: product.name,
        size: size,
        price: product.price,
        imageUrl: product.imageUrl
      };
      cart.push(cartItem);
    }
  
    // Function to render cart items
    function renderCart() {
      cartItemsList.innerHTML = '';
      cart.forEach(item => {
        const listItem = document.createElement('li');
        const image = document.createElement('img');
        image.src = item.imageUrl;
        image.alt = item.name;
        listItem.appendChild(image);
        const info = document.createElement('div');
        info.textContent = `${item.name} - Size: ${item.size} - Price: $${item.price.toFixed(2)}`;
        listItem.appendChild(info);
        cartItemsList.appendChild(listItem);
      });
      cartDiv.classList.remove('hidden');
    }
  });
  