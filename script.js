// Products Data
const allProducts = [
  // Shirts
  {id:1, name:'Classic Shirt', category:'shirts', gender:'men', image:'images/shirt1.png', price:24.99},
  {id:2, name:'Elegant Blouse', category:'shirts', gender:'women', image:'images/blouse1.jpg', price:29.99},
  {id:3, name:'Casual Tee', category:'shirts', gender:'men', image:'images/shirt2.jpg', price:19.99},
  {id:4, name:'Summer Top', category:'shirts', gender:'women', image:'images/blouse2.jpg', price:22.99},
  {id:5, name:'Formal Shirt', category:'shirts', gender:'men', image:'images/shirt3.jpg', price:34.99},
  {id:6, name:'Silk Blouse', category:'shirts', gender:'women', image:'images/blouse3.jpg', price:39.99},
  {id:7, name:'Striped Shirt', category:'shirts', gender:'men', image:'images/shirt4.jpg', price:27.99},
  {id:8, name:'Sleeveless Top', category:'shirts', gender:'women', image:'images/blouse4.jpg', price:25.99},
  {id:9, name:'Denim Shirt', category:'shirts', gender:'men', image:'images/shirt5.jpg', price:31.99},
  {id:10, name:'Chiffon Blouse', category:'shirts', gender:'women', image:'images/blouse5.jpg', price:33.99},

  // Pants
  {id:11, name:'Jeans', category:'pants', gender:'men', image:'images/jeans1.jpg', price:39.99},
  {id:12, name:'Skirt', category:'pants', gender:'women', image:'images/skirt1.jpg', price:34.99},
  {id:13, name:'Chinos', category:'pants', gender:'men', image:'images/chinos1.jpg', price:42.99},
  {id:14, name:'Leggings', category:'pants', gender:'women', image:'images/leggings1.jpg', price:29.99},
  {id:15, name:'Cargo Pants', category:'pants', gender:'men', image:'images/cargo1.jpg', price:45.99},
  {id:16, name:'Palazzo Pants', category:'pants', gender:'women', image:'images/palazzo1.jpg', price:38.99},
  {id:17, name:'Sweatpants', category:'pants', gender:'men', image:'images/sweatpants1.jpg', price:36.99},
  {id:18, name:'Jeans Slim', category:'pants', gender:'women', image:'images/jeans2.jpg', price:41.99},
  {id:19, name:'Formal Pants', category:'pants', gender:'men', image:'images/formal1.jpg', price:49.99},
  {id:20, name:'Culottes', category:'pants', gender:'women', image:'images/culottes1.jpg', price:44.99},

  // Hoodies
  {id:21, name:'Hoodie Men', category:'hoodie', gender:'men', image:'images/hoodie1.jpg', price:54.99},
  {id:22, name:'Hoodie Women', category:'hoodie', gender:'women', image:'images/hoodie2.jpg', price:49.99},
  {id:23, name:'Zip Hoodie', category:'hoodie', gender:'men', image:'images/hoodie3.jpg', price:59.99},
  {id:24, name:'Pullover Hoodie', category:'hoodie', gender:'women', image:'images/hoodie4.jpg', price:52.99},
  {id:25, name:'Cropped Hoodie', category:'hoodie', gender:'women', image:'images/hoodie5.jpg', price:47.99},
  {id:26, name:'Oversized Hoodie', category:'hoodie', gender:'men', image:'images/hoodie6.jpg', price:61.99},
  {id:27, name:'Sport Hoodie', category:'hoodie', gender:'men', image:'images/hoodie7.jpg', price:55.99},
  {id:28, name:'Fleece Hoodie', category:'hoodie', gender:'women', image:'images/hoodie8.jpg', price:50.99},
  {id:29, name:'Graphic Hoodie', category:'hoodie', gender:'men', image:'images/hoodie9.jpg', price:57.99},
  {id:30, name:'Hoodie Long', category:'hoodie', gender:'women', image:'images/hoodie10.jpg', price:53.99},

  // Suits
  {id:31, name:'Business Suit', category:'suits', gender:'men', image:'images/suit1.jpg', price:99.99},
  {id:32, name:'Evening Gown', category:'suits', gender:'women', image:'images/gown1.jpg', price:149.99},
  {id:33, name:'Tuxedo', category:'suits', gender:'men', image:'images/suit2.jpg', price:129.99},
  {id:34, name:'Cocktail Dress', category:'suits', gender:'women', image:'images/gown2.jpg', price:139.99},
  {id:35, name:'Blazer Set', category:'suits', gender:'men', image:'images/suit3.jpg', price:119.99},
  {id:36, name:'Formal Dress', category:'suits', gender:'women', image:'images/gown3.jpg', price:124.99},
  {id:37, name:'Double Suit', category:'suits', gender:'men', image:'images/suit4.jpg', price:135.99},
  {id:38, name:'Ball Gown', category:'suits', gender:'women', image:'images/gown4.jpg', price:159.99},
  {id:39, name:'Slim Fit Suit', category:'suits', gender:'men', image:'images/suit5.jpg', price:109.99},
  {id:40, name:'Maxi Dress', category:'suits', gender:'women', image:'images/gown5.jpg', price:129.99},
];

// Initialize cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// -------------------- Render Products --------------------
function renderProducts(categoryFilter = 'all') {
  const productsGrid = document.querySelector('.products-grid');
  if (!productsGrid) return;

  const filtered = categoryFilter === 'all' ? allProducts : allProducts.filter(p => p.category === categoryFilter);

  let html = '<div class="gender-section-wrapper">';

  // Men's Collection
  const menProducts = filtered.filter(p => p.gender === 'men');
  if (menProducts.length > 0) {
    html += `<div class="gender-section"><h3>Men's Collection</h3><div class="products-column">`;
    menProducts.forEach(product => {
      html += `
        <div class="product-card">
          <div class="product-image"><img src="${product.image}" alt="${product.name}"></div>
          <div class="product-info">
            <div class="product-category">${product.category}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">Rs. ${product.price}</div>
            <div class="product-buttons">
              <button class="product-add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
          </div>
        </div>`;
    });
    html += `</div></div>`;
  }

  // Women's Collection
  const womenProducts = filtered.filter(p => p.gender === 'women');
  if (womenProducts.length > 0) {
    html += `<div class="gender-section"><h3>Women's Collection</h3><div class="products-column">`;
    womenProducts.forEach(product => {
      html += `
        <div class="product-card">
          <div class="product-image"><img src="${product.image}" alt="${product.name}"></div>
          <div class="product-info">
            <div class="product-category">${product.category}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">Rs. ${product.price}</div>
            <div class="product-buttons">
              <button class="product-add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
          </div>
        </div>`;
    });
    html += `</div></div>`;
  }

  html += `</div>`;
  productsGrid.innerHTML = html;
}

// -------------------- Add To Cart --------------------
function addToCart(productId) {
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) existing.quantity++;
  else cart.push({...product, quantity:1});

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
  showNotification(`${product.name} added to cart!`);
}

// -------------------- Update Cart Count --------------------
function updateCartCount() {
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}

// -------------------- Render Cart --------------------
function renderCart() {
  const cartItems = document.querySelector('.cart-items');
  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="empty-cart">Your cart is empty!</div>`;
    return;
  }

  let html = '';
  cart.forEach(item => {
    html += `
      <div class="cart-item">
        <div class="cart-item-image"><img src="${item.image}" alt="${item.name}"></div>
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name} x${item.quantity}</div>
          <div class="cart-item-price">Rs. ${(item.price * item.quantity).toFixed(2)}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
      </div>`;
  });

  cartItems.innerHTML = html;
}

// -------------------- Remove From Cart --------------------
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

// -------------------- Notification --------------------
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => notification.remove(), 3000);
}

// -------------------- Initialize --------------------
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartCount();
});
