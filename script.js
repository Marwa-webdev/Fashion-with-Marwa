// -------------------- Products Data --------------------
const products = [
  // Shirts
  {id:1, name:'Classic Shirt', category:'shirts', gender:'male', image:'sb1.jpg', price:24.99},
  {id:2, name:'Elegant Blouse', category:'shirts', gender:'female', image:'sg1.jpg', price:29.99},
  {id:3, name:'Casual Tee', category:'shirts', gender:'male', image:'sb2.jpg', price:19.99},
  {id:4, name:'Summer Top', category:'shirts', gender:'female', image:'sg2.jpg', price:22.99},
   {id:3, name:'Casual Tee', category:'shirts', gender:'male', image:'sb3.jpg', price:19.99},
  {id:4, name:'Summer Top', category:'shirts', gender:'female', image:'sg3.jpg', price:22.99},
  // Pants
  {id:5, name:'Jeans', category:'pants', gender:'male', image:'pb1.jpg', price:39.99},
  {id:6, name:'Skirt', category:'pants', gender:'female', image:'pw1.jpg', price:34.99},
  {id:5, name:'Jeans', category:'pants', gender:'male', image:'pb2.jpg', price:39.99},
  {id:6, name:'Skirt', category:'pants', gender:'female', image:'pw2.jpg', price:34.99},
  {id:5, name:'Jeans', category:'pants', gender:'male', image:'pb3.jpg', price:39.99},
  {id:6, name:'Skirt', category:'pants', gender:'female', image:'pw3.jpg', price:34.99},
  // Hoodies
  {id:7, name:'Hoodie Men', category:'hoodie', gender:'male', image:'hb2.jpg', price:54.99},
  {id:8, name:'Hoodie Women', category:'hoodie', gender:'female', image:'hw2.jpg', price:49.99},
   {id:7, name:'Hoodie Men', category:'hoodie', gender:'male', image:'hb3.jpg', price:54.99},
  {id:8, name:'Hoodie Women', category:'hoodie', gender:'female', image:'hw4.jpg', price:49.99},
  // Suits
  {id:9, name:'Business Suit', category:'suits', gender:'male', image:'suit1.jpg', price:99.99},
  {id:9, name:'Business Suit', category:'suits', gender:'male', image:'suit2.jpg', price:99.99},
   {id:9, name:'Business Suit', category:'suits', gender:'male', image:'suit3.jpg', price:99.99},
  // Abayas
{id:13, name:'Classic Abaya', category:'abayas', gender:'female', image:'abaya1.jpg', price:49.99},
{id:14, name:'Luxury Abaya', category:'abayas', gender:'female', image:'abaya2.jpg', price:79.99},
{id:13, name:'Classic Abaya', category:'abayas', gender:'female', image:'abaya3.jpg', price:49.99},
{id:14, name:'Luxury Abaya', category:'abayas', gender:'female', image:'abaya4.jpg', price:79.99},
// Accessories
{id:15, name:'Sunglasses', category:'accessories', gender:'male', image:'images/sunglasses1.jpg', price:29.99},
{id:16, name:'Bag', category:'accessories', gender:'female', image:'images/bag1.jpg', price:59.99},

// Perfumes
{id:17, name:'Men Perfume', category:'perfumes', gender:'male', image:'images/perfume1.jpg', price:59.99},
{id:18, name:'Women Perfume', category:'perfumes', gender:'female', image:'images/perfume2.jpg', price:64.99},

// Shoes
{id:19, name:'Sneakers', category:'shoes', gender:'male', image:'images/shoes1.jpg', price:69.99},
{id:20, name:'Heels', category:'shoes', gender:'female', image:'images/shoes2.jpg', price:79.99},

  // Makeup 
  {id:11, name:'Men Watch', category:'makeup', gender:'male', image:'images/watch1.jpg', price:89.99},
  {id:12, name:'Necklace', category:'makeup', gender:'female', image:'images/necklace1.jpg', price:79.99}
];

// -------------------- Cart --------------------
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// -------------------- Navigation --------------------
function navigateTo(page) {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.classList.add('hidden'));

    const target = document.getElementById(page + '-page');
    if (target) target.classList.remove('hidden');

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-links a[data-page="${page}"]`);
    if (activeLink) activeLink.classList.add('active');
}

// Attach navbar events
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        navigateTo(link.dataset.page);
    });
});

// -------------------- Render Products --------------------
function renderProductsByGender(items) {
    const grid = document.querySelector('.products-grid');
    if (!items || items.length === 0) {
        grid.innerHTML = '<p>No products found.</p>';
        return;
    }

    grid.innerHTML = `
      <div class="gender-column">
        <h2>Women</h2>
        <div class="gender-products">
          ${items.filter(p => p.gender === 'female').map(p => `
            <div class="product-item">
              <div class="product-image"><img src="${p.image}" alt="${p.name}"></div>
              <div class="product-info">
                <h3>${p.name}</h3>
                <p>Rs. ${p.price.toFixed(2)}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="gender-column">
        <h2>Men</h2>
        <div class="gender-products">
          ${items.filter(p => p.gender === 'male').map(p => `
            <div class="product-item">
              <div class="product-image"><img src="${p.image}" alt="${p.name}"></div>
              <div class="product-info">
                <h3>${p.name}</h3>
                <p>Rs. ${p.price.toFixed(2)}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
}

// -------------------- Filter by Category --------------------
function filterByCategory(category) {
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    renderProductsByGender(filtered);

    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.category-btn[data-category="${category}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    navigateTo('products');
}

// -------------------- Cart Functions --------------------
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) existing.quantity++;
    else cart.push({...product, quantity:1});

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
    alert(`${product.name} added to cart!`);
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty!</p>';
        return;
    }

    let html = '';
    cart.forEach(item => {
        html += `
        <div class="cart-item">
            <div class="cart-item-image">${ item.category === "custom" 
    ? `<div class="cart-item-image">${item.image === 'shirt' ? '👕' : item.image === 'hoodie' ? '🧥' : '👖'}</div>`
    : `<img src="${item.image}" alt="${item.name}">`
}
</div>
            <div class="cart-item-details">
                <p>${item.name} x${item.quantity}</p>
                <p>Rs. ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        </div>`;
    });

    cartItems.innerHTML = html;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// -------------------- Customization Functions --------------------
let selectedItem = 'shirt';
let selectedColor = 'white';
let selectedSize = 'M';
let customText = '';
let customPrice = 1999;

function selectCustomItem(item) {
    selectedItem = item;
    const box = document.getElementById('customizationBox');
    box.classList.remove('hidden');

    document.getElementById('itemTitle').innerText = item.charAt(0).toUpperCase() + item.slice(1);
    document.getElementById('previewItem').innerText = item === 'shirt' ? '👕' : item === 'hoodie' ? '🧥' : '👖';

    document.getElementById('customText').value = '';
    document.getElementById('customPrice').innerText = customPrice;
}

function changeColor(color) {
    selectedColor = color;
    document.getElementById('previewItem').style.backgroundColor = color;
}

function changeSize(size, event) {
    selectedSize = size;
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function updateCustomText() {
    customText = document.getElementById('customText').value;
    const preview = document.getElementById('previewItem');
    preview.innerText = customText || (selectedItem === 'shirt' ? '👕' : selectedItem === 'hoodie' ? '🧥' : '👖');
}

function addCustomToCart() {
    customText = document.getElementById('customText').value || '';
    const price = Number(customPrice);

    const product = {
        id: Date.now(),
        name: customText ? `${selectedItem} - ${customText}` : selectedItem,
        category: "custom",
        gender: "custom",
        image: selectedItem,   // store the word shirt/hoodie/pants
        price: price,
        color: selectedColor,
        size: selectedSize,
        quantity: 1
    };

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
    alert('Custom product added to cart!');
}

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
    alert('Custom product added to cart!');

// -------------------- Initialize --------------------
document.addEventListener('DOMContentLoaded', () => {
    renderProductsByGender(products);
    updateCartCount();
    navigateTo('home');
});

