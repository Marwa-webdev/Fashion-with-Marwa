// -------------------- Products Data --------------------
const products = [
  // Shirts
  {id:1, name:'Casaul Shirt', category:'shirts', gender:'male', image:'images/casual shirt.jfif', price:899},
  {id:2, name:'Button Down Shirt', category:'shirts', gender:'female', image:'images/button down shirt.jfif', price:899},
  {id:3, name:'Double Pocket Shirt', category:'shirts', gender:'male', image:'images/Double pocket shirt.jfif', price:799},
  {id:4, name:'Casual Shirt', category:'shirts', gender:'female', image:'images/casual shirt w.jfif', price:799},
  {id:5, name:'Polo Shirt', category:'shirts', gender:'male', image:'images/polo shirt.jfif', price:999},
  {id:6, name:'Formal Top', category:'shirts', gender:'female', image:'images/formal top.jfif', price:899},
  {id:7, name:'Printed Shirt', category:'shirts', gender:'male', image:'images/printed shirt.jfif', price:999},
  {id:8, name:'Plain White Shirt', category:'shirts', gender:'female', image:'images/sg2.jpg', price:1999},
  {id:9, name:'T-shirt', category:'shirts', gender:'male', image:'images/T-shirt.jfif', price:899},
  {id:10, name:'Silk Shirt', category:'shirts', gender:'female', image:'images/silk shirt.jfif', price:1999},
  {id:11, name:'Printed Shirt', category:'shirts', gender:'male', image:'images/sb4.jpg', price:999},
  {id:12, name:'Tie Sleeve Shirt', category:'shirts', gender:'female', image:'images/tie sleeve shirt.jfif', price:899},

  // Pants
  {id:13, name:' Baggy Jeans', category:'pants', gender:'male', image:'images/baggy jeans.jfif', price:3999},
  {id:14, name:'Cargo Pant', category:'pants', gender:'female', image:'images/cargo pant.jfif', price:4700},
  {id:15, name:'Cargo Pant', category:'pants', gender:'male', image:'images/cargo pant m.jfif', price:4600},
  {id:16, name:'Formal Parallel Trouser', category:'pants', gender:'female', image:'images/formal parallel trouser.jfif', price:5000},
  {id:17, name:'Formal', category:'pants', gender:'male', image:'images/formal trouser.jfif', price:4500},
  {id:18, name:'High Rise Wrinkle Free Trouser', category:'pants', gender:'female', image:'images/high rise wrinkle free trouser.jfif', price:4599},
  {id:19, name:'Pant', category:'pants', gender:'male', image:'images/pb1.jpg', price:500},
  {id:20, name:'LoosePant', category:'pants', gender:'female', image:'images/loose pant.jfif', price:4798},
  {id:21, name:'White Pant', category:'pants', gender:'male', image:'images/pb2.jpg', price:3999},
  {id:22, name:'Plain Pant', category:'pants', gender:'female', image:'images/pw1.jpg', price:3999},
  {id:23, name:'Black Cargo', category:'pants', gender:'male', image:'images/pb3.jpg', price:4700},
  {id:24, name:'Embroided Pant', category:'pants', gender:'female', image:'images/pw2.jpg', price:4697},
  {id:23, name:'Printed Cargo Pant', category:'pants', gender:'male', image:'images/pb4.jpg', price:5000},
  {id:24, name:'Winter Trouser', category:'pants', gender:'female', image:'imageswinter trouser.jfif', price:5000},


  // Hoodies
  {id:25, name:'Cool Hoodie for Men', category:'hoodie', gender:'male', image:'images/cool hoodie.jfif', price:5000},
  {id:26, name:'Cat Ear Hoodie', category:'hoodie', gender:'female', image:'images/cat ear hoodie.jfif', price:5000},
  {id:27, name:'Graphic hoodie', category:'hoodie', gender:'male', image:'images/graphic hoodie.jfif', price:5000},
  {id:28, name:'Crop Hoodie', category:'hoodie', gender:'female', image:'images/crop hoodie.jfif', price:5000},
  {id:29, name:'Gym Hoodie', category:'hoodie', gender:'male', image:'images/gym hoodie.jfif', price:5000},
  {id:30, name:'Cute Women Hoodie', category:'hoodie', gender:'female', image:'images/cute women hoodie.jfif', price:5000},
  {id:31, name:'Plain White Hoodie', category:'hoodie', gender:'male', image:'images/hb1.jpg', price:5000},
  {id:32, name:'Korean Cute Hoodie', category:'hoodie', gender:'female', image:'images/hw2.jpg', price:5000},
  {id:33, name:'Plain Black Hoodie', category:'hoodie', gender:'male', image:'images/hb2.jpg', price:5000},
  {id:34, name:'Zip Up Hoodie', category:'hoodie', gender:'female', image:'images/hw3.jpg' , price:5000},
  {id:35, name:'Oversized Hoodie', category:'hoodie', gender:'male', image:'images/hb3.jpg', price:5000},
  {id:36, name:'Pink Hoodie', category:'hoodie', gender:'female', image:'images/hw4.jpg', price:5000},
  {id:35, name:'Japanese Asthetic Hoodie', category:'hoodie', gender:'male', image:'images/japanese asthetic hoodie.jfif', price:5000},
  {id:36, name:'Panda Hoodie', category:'hoodie', gender:'female', image:'images/panda hoodie.jfif', price:5000},
  {id:35, name:'Stylish Hoodie', category:'hoodie', gender:'male', image:'images/stylish hoodie.jfif', price:5000},
  {id:36, name:'Printed Hoodie ', category:'hoodie', gender:'female', image:'images/printed hoodie.jfif', price:5000},
  {id:35, name:'Zip Up Hoodie', category:'hoodie', gender:'male', image:'images/zip up graphic hoodie.jfif', price:5000},
  {id:36, name:'Sleevless Hoodie', category:'hoodie', gender:'female', image:'images/sleevless hoodie.jfif', price:5000},

  // Suits
  {id:17, name:'2-piece Suit', category:'suits', gender:'male', image:'images/2 piece suit m.jfif', price:10000},
  {id:36, name:'2-piece suit', category:'suits', gender:'female', image:'images/2 piece suit.jfif', price:9999},
  {id:18, name:'Casual men Suit', category:'suits', gender:'male', image:'images/casual men suit.jfif', price:9999},
  {id:36, name:'Formal Suit', category:'suits', gender:'female', image:'images/formal suit 1.jfif', price:10000},
  {id:19, name:'Grey Suit', category:'suits', gender:'male', image:'images/grey suit.jfif', price:11000},
  {id:36, name:'Grey Suit', category:'suits', gender:'female', image:'images/formal suit.jfif', price:11000},
  {id:17, name:'Elegent Suit', category:'suits', gender:'male', image:'images/suit1.jpg', price:10000},
  {id:36, name:'White Suit', category:'suits', gender:'female', image:'images/suit 4.jfif', price:9999},
  {id:18, name:'Blue Suit', category:'suits', gender:'male', image:'images/suit2.jpg', price:9999},
  {id:36, name:'White Suit', category:'suits', gender:'female', image:'images/suitt.jfif', price:11000},
  {id:19, name:'Wedding Suit', category:'suits', gender:'male', image:'images/wedding suit.jfif', price:9999},
  {id:36, name:'Office Suit', category:'suits', gender:'female', image:'images/suit.jfif', price:9999},
  // Abayas
  {id:20, name:'Classic Abaya', category:'abayas', gender:'female', image:'images/abaya.jfif', price:5000},
  {id:21, name:'Luxury Abaya', category:'abayas', gender:'female', image:'images/abaya1.jpg', price:5000},
  {id:22, name:'Butterfly abaya', category:'abayas', gender:'female', image:'images/abaya2.jpg', price:5000},
  {id:23, name:'Embroided abaya', category:'abayas', gender:'female', image:'images/abaya3.jpg', price:5000},
  {id:20, name:'Butterfly abaya', category:'abayas', gender:'female', image:'images/abaya4.jpg', price:5000},
  {id:21, name:'Embroided Kaftan', category:'abayas', gender:'female', image:'images/embroided kaftan.jfif', price:5000},
  {id:22, name:'Irani Chadar', category:'abayas', gender:'female', image:'images/irani chadar.jfif', price:5000},
  {id:23, name:'Jilbab', category:'abayas', gender:'female', image:'images/jilbab abaya.jfif', price:5000},

  // Accessories
  {id:24, name:'Casual Watch', category:'accessories', gender:'male', image:'casual watch.jfif', price:2000},
  {id:25, name:'Butterfly EarRing', category:'accessories', gender:'female', image:'butterfly ear ring.jfif', price:500},
  {id:24, name:'Leather Laptop Bag', category:'accessories', gender:'male', image:'leather laptop bag.jfif', price:5000},
  {id:25, name:'Ear Ring', category:'accessories', gender:'female', image:'ear ring.jfif', price:500},
  {id:24, name:'Leather Wallet', category:'accessories', gender:'male', image:'leather wallet.jfif', price:2500},
  {id:25, name:'Hand Bag', category:'accessories', gender:'female', image:'hand bag.jfif', price:7000},
  {id:24, name:'Long Purse ', category:'accessories', gender:'male', image:'long purse.jfif', price:1500},
  {id:25, name:'Rolex', category:'accessories', gender:'female', image:'ladies rolex', price:10000},
  {id:24, name:'Man Luxury Watch', category:'accessories', gender:'male', image:'man luxury watch.jfif', price:10000},
  {id:25, name:'Large Hoop Ear Ring', category:'accessories', gender:'female', image:'large hoop ear ring.jfif', price:500},
  {id:24, name:'Rolex', category:'accessories', gender:'male', image:'rolex m.jfif', price:10000},
  {id:25, name:'Neclace', category:'accessories', gender:'female', image:'neclace.jfif', price:899},
 {id:24, name:'Round Glasses', category:'accessories', gender:'male', image:'round glasses.jfif', price:2500},
  {id:25, name:'Pearl Neclace', category:'accessories', gender:'female', image:'pearl neclace.jfif', price:999},
 {id:24, name:'Shoulder Bag', category:'accessories', gender:'male', image:'shoulder bag m.jfif', price:6000},
  {id:25, name:'Rolex', category:'accessories', gender:'female', image:'rolex w.jfif', price:9000},
{id:24, name:'Small Chest Bag', category:'accessories', gender:'male', image:'small chest bag.jfif', price:4000},
  {id:25, name:'Rose Gold Watch ', category:'accessories', gender:'female', image:'rose gold.jfif', price:5500},
{id:25, name:'Sappire Bag ', category:'accessories', gender:'female', image:'sappire bag.jfif', price:5000},
{id:25, name:'Shoulder Bag ', category:'accessories', gender:'female', image:'shoulder bag.jfif', price:5000},
{id:25, name:'Sappire Bag ', category:'accessories', gender:'female', image:'sappire bag2.jfif', price:5000},
{id:25, name:'Glasses', category:'accessories', gender:'female', image:'white eyeglass.jfif', price:500},

  // Perfumes
  {id:26, name:'Black Tie', category:'perfumes', gender:'male', image:'black tie.png', price:4000},
  {id:27, name:'Gorgeous', category:'perfumes', gender:'female', image:'Gorgeous.jfif', price:5000},
  {id:26, name:'Calvin Klein', category:'perfumes', gender:'male', image:'calvin klein.jfif', price:5000},
  {id:27, name:'J.perfume', category:'perfumes', gender:'female', image:'J.perfume.jfif', price:4000},
  {id:26, name:'Destiny', category:'perfumes', gender:'male', image:'destiny.jfif', price:3999},
  {id:27, name:'Premium Fregnance', category:'perfumes', gender:'female', image:'premium fregnence.jfif', price:4500},
  {id:26, name:'Gentleman', category:'perfumes', gender:'male', image:'gentlemen.jfif', price:5500},
  {id:27, name:'Queen of Paradise', category:'perfumes', gender:'female', image:'queen of paradise.jfif', price:5700},
  {id:26, name:'Office', category:'perfumes', gender:'male', image:'office for men.jfif', price:4800},
  {id:27, name:'Scents', category:'perfumes', gender:'female', image:'scents', price:3500},
  {id:26, name:'Luxury Perfume', category:'perfumes', gender:'male', image:'peb1.jpg', price:5600},
  {id:27, name:'Whisky Smoke', category:'perfumes', gender:'female', image:'whisky smoke.jfif', price:7000},

  // Shoes
  {id:28, name:'Formal Shoe', category:'shoes', gender:'male', image:'formal shoe.jfif', price:3000},
  {id:29, name:'Heels', category:'shoes', gender:'female', image:'ladies heel.jfif', price:4000},
  {id:28, name:'Nike Air Jorden', category:'shoes', gender:'male', image:'nike air jorden.jfif', price:3500},
  {id:29, name:'Pencil Heel', category:'shoes', gender:'female', image:'pensil heel.jfif', price:5000},
  {id:28, name:'Formal Shoe', category:'shoes', gender:'male', image:'sm1.jpg', price:3000},
  {id:29, name:'Sandal', category:'shoes', gender:'female', image:'sandal.jfif', price:4500},
  {id:28, name:'Sneakers', category:'shoes', gender:'male', image:'sm2.jpg', price:3500},
  {id:29, name:'Sneakers', category:'shoes', gender:'female', image:'sw1.jpg', price:5000},
  {id:28, name:'Sneakers', category:'shoes', gender:'male', image:'sneakers', price:6000},
  {id:29, name:'Heels', category:'shoes', gender:'female', image:'sw2.jpg', price:4899},
  {id:28, name:'Sneakers', category:'shoes', gender:'male', image:'shoe1.jfif', price:69.99},
  {id:29, name:'Velvet Heel', category:'shoes', gender:'female', image:'velvet high heel.jfif', price:6000},

// Makeup
{id:30, name:'Black Eye Liner', category:'makeup', gender:'female', image:'black eye liner.png', price:400},
{id:31, name:'Eye Brow Pencil', category:'makeup', gender:'female', image:'eye brow pencil.jfif', price:500},
{id:32, name:'Eye Shadow', category:'makeup', gender:'female', image:'eye shadow,jfif', price:2000},
{id:33, name:'Face Powder ', category:'makeup', gender:'female', image:'face powder.jfif', price:1500},
{id:34, name:'Lash Curler', category:'makeup', gender:'female', image:'lash curler.jfif', price:1000},
{id:35, name:'Liquid Lipstick', category:'makeup', gender:'female', image:'liquid lipstick.jfif', price:400},
{id:36, name:'Mahroon Lipstick', category:'makeup', gender:'female', image:'mahroon lipstick.jfif', price:600},
{id:37, name:'Pink Lipglos', category:'makeup', gender:'female', image:'mw1.jpg', price:300},
{id:38, name:'Conceler', category:'makeup', gender:'female', image:'mw2.jpg', price:500},
{id:39, name:'Setting Spray', category:'makeup', gender:'female', image:'setting spray.jfif', price:899}

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
            <div class="cart-item-image">
                ${item.category === "custom" 
                    ? (item.image === 'shirt' ? '👕' : item.image === 'hoodie' ? '🧥' : '👖')
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

// -------------------- Customization --------------------
let selectedItem = 'shirt';
let selectedColor = 'white';
let selectedSize = 'M';
let customText = '';
let customPrice = 1999;

function selectCustomItem(item) {
    selectedItem = item;

    document.getElementById('customizationBox').classList.remove('hidden');
    document.getElementById('itemTitle').innerText = item.toUpperCase();
    document.getElementById('previewItem').innerText =
        item === 'shirt' ? '👕' : item === 'hoodie' ? '🧥' : '👖';

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
    
    const product = {
        id: Date.now(),
        name: customText ? `${selectedItem} - ${customText}` : selectedItem,
        category: "custom",
        gender: "custom",
        image: selectedItem,
        price: customPrice,
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

// -------------------- Initialize --------------------
document.addEventListener('DOMContentLoaded', () => {
    renderProductsByGender(products);
    updateCartCount();
    navigateTo('home');
});
function submitContactForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !subject || !message) {
        alert("Please fill all fields before sending.");
        return;
    }

    alert("Your message has been sent successfully!");
    
    // Clear the form after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}


