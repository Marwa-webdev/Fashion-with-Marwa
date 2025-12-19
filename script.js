
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
  {id:25, name:'Printed Cargo Pant', category:'pants', gender:'male', image:'images/pb4.jpg', price:5000},
  {id:26, name:'Winter Trouser', category:'pants', gender:'female', image:'images/winter trouser.jfif', price:5000},

  // Hoodies
  {id:27, name:'Cool Hoodie for Men', category:'hoodie', gender:'male', image:'images/cool hoodie.jfif', price:5000},
  {id:28, name:'Cat Ear Hoodie', category:'hoodie', gender:'female', image:'images/cat ear hoodie.jfif', price:5000},
  {id:29, name:'Graphic hoodie', category:'hoodie', gender:'male', image:'images/graphic hoodie.jfif', price:5000},
  {id:30, name:'Crop Hoodie', category:'hoodie', gender:'female', image:'images/crop hoodie.jfif', price:5000},
  {id:31, name:'Gym Hoodie', category:'hoodie', gender:'male', image:'images/gym hoodie.jfif', price:5000},
  {id:32, name:'Cute Women Hoodie', category:'hoodie', gender:'female', image:'images/cute women hoodie.jfif', price:5000},
  {id:33, name:'Plain White Hoodie', category:'hoodie', gender:'male', image:'images/hb1.jpg', price:5000},
  {id:34, name:'Korean Cute Hoodie', category:'hoodie', gender:'female', image:'images/hw2.jpg', price:5000},
  {id:35, name:'Plain Black Hoodie', category:'hoodie', gender:'male', image:'images/hb2.jpg', price:5000},
  {id:36, name:'Zip Up Hoodie', category:'hoodie', gender:'female', image:'images/hw3.jpg' , price:5000},
  {id:37, name:'Oversized Hoodie', category:'hoodie', gender:'male', image:'images/hb3.jpg', price:5000},
  {id:38, name:'Pink Hoodie', category:'hoodie', gender:'female', image:'images/hw4.jpg', price:5000},
  {id:39, name:'Japanese Asthetic Hoodie', category:'hoodie', gender:'male', image:'images/japanese asthetic hoodie.jfif', price:5000},
  {id:40, name:'Panda Hoodie', category:'hoodie', gender:'female', image:'images/panda hoodie.jfif', price:5000},
  {id:41, name:'Stylish Hoodie', category:'hoodie', gender:'male', image:'images/stylish hoodie.jfif', price:5000},
  {id:42, name:'Printed Hoodie ', category:'hoodie', gender:'female', image:'images/printed hoodie.jfif', price:5000},
  {id:43, name:'Zip Up Hoodie', category:'hoodie', gender:'male', image:'images/zip up graphic hoodie.jfif', price:5000},
  {id:44, name:'Sleevless Hoodie', category:'hoodie', gender:'female', image:'images/sleevless hoodie.jfif', price:5000},

  // Suits
  {id:45, name:'2-piece Suit', category:'suits', gender:'male', image:'images/2 piece suit m.jfif', price:10000},
  {id:46, name:'2-piece suit', category:'suits', gender:'female', image:'images/2 piece suit.jfif', price:9999},
  {id:47, name:'Casual men Suit', category:'suits', gender:'male', image:'images/casual men suit.jfif', price:9999},
  {id:48, name:'Formal Suit', category:'suits', gender:'female', image:'images/formal suit 1.jfif', price:10000},
  {id:49, name:'Grey Suit', category:'suits', gender:'male', image:'images/grey suit.jfif', price:11000},
  {id:50, name:'Grey Suit', category:'suits', gender:'female', image:'images/formal suit.jfif', price:11000},
  {id:51, name:'Elegent Suit', category:'suits', gender:'male', image:'images/suit1.jpg', price:10000},
  {id:52, name:'White Suit', category:'suits', gender:'female', image:'images/suit 4.jfif', price:9999},
  {id:53, name:'Blue Suit', category:'suits', gender:'male', image:'images/suit2.jpg', price:9999},
  {id:54, name:'White Suit', category:'suits', gender:'female', image:'images/suitt.jfif', price:11000},
  {id:55, name:'Wedding Suit', category:'suits', gender:'male', image:'images/wedding suit.jfif', price:9999},
  {id:56, name:'Office Suit', category:'suits', gender:'female', image:'images/suit.jfif', price:9999},

  // Abayas
  {id:57, name:'Classic Abaya', category:'abayas', gender:'female', image:'images/abaya.jfif', price:5000},
  {id:58, name:'Luxury Abaya', category:'abayas', gender:'female', image:'images/abaya1.jpg', price:5000},
  {id:59, name:'Butterfly abaya', category:'abayas', gender:'female', image:'images/abaya2.jpg', price:5000},
  {id:60, name:'Embroided abaya', category:'abayas', gender:'female', image:'images/abaya3.jpg', price:5000},
  {id:61, name:'Butterfly abaya', category:'abayas', gender:'female', image:'images/abaya4.jpg', price:5000},
  {id:62, name:'Embroided Kaftan', category:'abayas', gender:'female', image:'images/embroided kaftan.jfif', price:5000},
  {id:63, name:'Irani Chadar', category:'abayas', gender:'female', image:'images/irani chadar.jfif', price:5000},
  {id:64, name:'Jilbab', category:'abayas', gender:'female', image:'images/jilbab abaya.jfif', price:5000},

  // Accessories
  {id:65, name:'Casual Watch', category:'accessories', gender:'male', image:'images/casual watch.jfif', price:2000},
  {id:66, name:'Butterfly EarRing', category:'accessories', gender:'female', image:'images/butterfly ear ring.jfif', price:500},
  {id:67, name:'Leather Laptop Bag', category:'accessories', gender:'male', image:'images/leather laptop bag.jfif', price:5000},
  {id:68, name:'Ear Ring', category:'accessories', gender:'female', image:'images/ear ring.jfif', price:500},
  {id:69, name:'Leather Wallet', category:'accessories', gender:'male', image:'images/leather wallet.jfif', price:2500},
  {id:70, name:'Hand Bag', category:'accessories', gender:'female', image:'images/hand bag.jfif', price:7000},
  {id:71, name:'Long Purse ', category:'accessories', gender:'male', image:'images/long purse.jfif', price:1500},
  {id:72, name:'Rolex', category:'accessories', gender:'female', image:'images/ladies rolex.jfif', price:10000},
  {id:73, name:'Man Luxury Watch', category:'accessories', gender:'male', image:'images/man luxury watch.jfif', price:10000},
  {id:74, name:'Large Hoop Ear Ring', category:'accessories', gender:'female', image:'images/large hoop ear ring.jfif', price:500},
  {id:75, name:'Rolex', category:'accessories', gender:'male', image:'images/rolex m.jfif', price:10000},
  {id:76, name:'Neclace', category:'accessories', gender:'female', image:'images/neclace.jfif', price:899},
  {id:77, name:'Round Glasses', category:'accessories', gender:'male', image:'images/round glasses.jfif', price:2500},
  {id:78, name:'Pearl Neclace', category:'accessories', gender:'female', image:'images/pearl neclace.jfif', price:999},
  {id:79, name:'Shoulder Bag', category:'accessories', gender:'male', image:'images/shoulder bag m.jfif', price:6000},
  {id:80, name:'Rolex', category:'accessories', gender:'female', image:'images/rolex w.jfif', price:9000},
  {id:81, name:'Small Chest Bag', category:'accessories', gender:'male', image:'images/small chest bag.jfif', price:4000},
  {id:82, name:'Rose Gold Watch ', category:'accessories', gender:'female', image:'images/rose gold.jfif', price:5500},
  {id:83, name:'Sappire Bag ', category:'accessories', gender:'female', image:'images/sappire bag.jfif', price:5000},
  {id:84, name:'Shoulder Bag ', category:'accessories', gender:'female', image:'images/shoulder bag.jfif', price:5000},
  {id:85, name:'Sappire Bag ', category:'accessories', gender:'female', image:'images/sappire bag2.jfif', price:5000},
  {id:86, name:'Glasses', category:'accessories', gender:'female', image:'images/white eyeglass.jfif', price:500},

  // Perfumes
  {id:87, name:'Black Tie', category:'perfumes', gender:'male', image:'images/black tie.png', price:4000},
  {id:88, name:'Gorgeous', category:'perfumes', gender:'female', image:'images/Gorgeous.jfif', price:5000},
  {id:89, name:'Calvin Klein', category:'perfumes', gender:'male', image:'images/calvin klein.jfif', price:5000},
  {id:90, name:'J.perfume', category:'perfumes', gender:'female', image:'https://github.com/Marwa-webdev/Fashion-with-Marwa/blob/main/images/J.%20perfume.jfif', price:4000},
  {id:91, name:'Destiny', category:'perfumes', gender:'male', image:'images/destiny.jfif', price:3999},
  {id:92, name:'Premium Fregnance', category:'perfumes', gender:'female', image:'images/premium fregnence.jfif', price:4500},
  {id:93, name:'Gentleman', category:'perfumes', gender:'male', image:'images/gentlemen.jfif', price:5500},
  {id:94, name:'Queen of Paradise', category:'perfumes', gender:'female', image:'images/queen of paradise.jfif', price:5700},
  {id:95, name:'Office', category:'perfumes', gender:'male', image:'images/office for men.jfif', price:4800},
  {id:96, name:'Scents', category:'perfumes', gender:'female', image:'images/scents,jfif', price:3500},
  {id:97, name:'Luxury Perfume', category:'perfumes', gender:'male', image:'images/peb1.jpg', price:5600},
  {id:98, name:'Whisky Smoke', category:'perfumes', gender:'female', image:'images/whisky smoke.jfif', price:7000},

  // Shoes
  {id:99, name:'Formal Shoe', category:'shoes', gender:'male', image:'images/formal shoe.jfif', price:3000},
  {id:100, name:'Heels', category:'shoes', gender:'female', image:'images/ladies heel.jfif', price:4000},
  {id:101, name:'Nike Air Jorden', category:'shoes', gender:'male', image:'images/nike air jorden.jfif', price:3500},
  {id:102, name:'Pencil Heel', category:'shoes', gender:'female', image:'images/pencil heel.jfif', price:5000},
  {id:103, name:'Formal Shoe', category:'shoes', gender:'male', image:'images/sm1.jpg', price:3000},
  {id:104, name:'Sandal', category:'shoes', gender:'female', image:'images/sandal.jfif', price:4500},
  {id:107, name:'Sneakers', category:'shoes', gender:'male', image:'images/sneakers.jfif', price:6000},
  {id:108, name:'Heels', category:'shoes', gender:'female', image:'images/sw2.jpg', price:4899},
  {id:109, name:'Sneakers', category:'shoes', gender:'male', image:'images/shoe1.jfif', price:699},

  // Makeup
  {id:110, name:'Black Eye Liner', category:'makeup', gender:'female', image:'images/black eye liner.png', price:400},
  {id:111, name:'Eye Brow Pencil', category:'makeup', gender:'female', image:'images/eye brow pencil.jfif', price:500},
  {id:112, name:'Eye Shadow', category:'makeup', gender:'female', image:'images/eye shadow.jfif', price:2000},
  {id:113, name:'Face Powder ', category:'makeup', gender:'female', image:'images/face powder.jfif', price:1500},
  {id:114, name:'Lash Curler', category:'makeup', gender:'female', image:'images/lash curler.jfif', price:1000},
  {id:115, name:'Lip Stick', category:'makeup', gender:'female', image:'images/liquid lipstck.jfif', price:799},
  {id:120, name:'Lip Stick', category:'makeup', gender:'female', image:'images/mahroon lipstick.jfif', price:500},
  {id:114, name:'Lip Gloss', category:'makeup', gender:'female', image:'images/mw1.jpg', price:1000},
  {id:115, name:'Concealer', category:'makeup', gender:'female', image:'images/mw2.jpg', price:799},
  {id:120, name:'Setting Spray', category:'makeup', gender:'female', image:'images/setting spray.jfif', price:500},
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

    // ✅ Fix for cart display
    if (page === 'cart') {
        cart = JSON.parse(localStorage.getItem('cart')) || []; // refresh cart
        renderCart(); // show products and total
    }
}
// Handle Place Order
const orderForm = document.getElementById('order-form');
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent actual form submission

        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        // Here you can do actual order submission if needed
        alert('Order placed successfully!');

        // ✅ Clear cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));

        // ✅ Refresh cart display and count
        updateCartCount();
        renderCart();

        // ✅ Clear form inputs
        orderForm.reset();
    });
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
    const filtered = category === 'all'
        ? products
        : products.filter(p => p.category === category);

    renderProductsByGender(filtered);
    navigateTo('products');
}

// -------------------- Cart Functions --------------------
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    if (!cartItems || !totalPriceEl) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty!</p>';
        totalPriceEl.textContent = '0.00';
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        html += `
        <div class="cart-item" style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
            <div class="cart-item-image" style="width:80px; height:80px;">
                <img src="${item.image}" alt="${item.name}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div class="cart-item-details" style="flex:1; margin-left:10px;">
                <p>${item.name} x${item.quantity}</p>
                <p>Rs. ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background:red; color:white; border:none; padding:5px 10px; cursor:pointer;">Remove</button>
        </div>`;
    });

    cartItems.innerHTML = html;
    totalPriceEl.textContent = total.toFixed(2);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// -------------------- Init --------------------
document.addEventListener('DOMContentLoaded', () => {
    renderProductsByGender(products);
    updateCartCount();
    renderCart(); // ✅ safety render
    navigateTo('home');
});
// -------------------- Contact Form --------------------
function submitContactForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !subject || !message) {
        alert('Please fill all fields');
        return;
    }

    alert('Message sent successfully!');

    // Clear inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
}
function showCustomization(type) {
    document.getElementById('shirt-custom').classList.add('hidden');
    document.getElementById('hoodie-custom').classList.add('hidden');

    if (type === 'shirt') {
        document.getElementById('shirt-custom').classList.remove('hidden');
    } else if (type === 'hoodie') {
        document.getElementById('hoodie-custom').classList.remove('hidden');
    }
}

// -------------------- Customization: Add Text --------------------
function addText(btn) {
    const box = btn.closest('.custom-box');
    if (!box) return;

    let text = prompt("Enter your text:");
    if (!text) return;

    let textEl = box.querySelector('.design-text');

    if (!textEl) {
        textEl = document.createElement('div');
        textEl.className = 'design-text';
        box.appendChild(textEl);
    }

    textEl.textContent = text;
}

// -------------------- Customization: Add Logo --------------------
function addLogo(btn) {
    const box = btn.closest('.custom-box');
    if (!box) return;

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = () => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(input.files[0]);
        img.className = 'design-logo';
        box.appendChild(img);
    };

    input.click();
}
function addToCustomCart(btn) {
    const box = btn.closest('.custom-box');
    if (!box) return;

    alert('Customized item added to cart!');
}
function showCustomization(type) {
    document.getElementById('shirt-custom').classList.add('hidden');
    document.getElementById('hoodie-custom').classList.add('hidden');

    if (type === 'shirt') {
        document.getElementById('shirt-custom').classList.remove('hidden');
    } else {
        document.getElementById('hoodie-custom').classList.remove('hidden');
    }
}

// Add Text
function addText(btn) {
    const box = btn.closest('.custom-box');
    const area = box.querySelector('.design-area');

    let text = prompt("Enter text:");
    if (!text) return;

    let el = area.querySelector('.design-text');
    if (!el) {
        el = document.createElement('div');
        el.className = 'design-text';
        area.appendChild(el);
    }

    el.textContent = text;
}

// Add Logo
function addLogo(btn) {
    const box = btn.closest('.custom-box');
    const area = box.querySelector('.design-area');

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = () => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(input.files[0]);
        img.className = 'design-logo';
        area.appendChild(img);
    };

    input.click();
}

// Add to Cart (visual confirmation)
function addToCustomCart(btn) {
    const box = btn.closest('.custom-box');
    const img = box.querySelector('.product-img').src;

    const customProduct = {
        id: Date.now(), // unique id
        name: 'Customized Product',
        price: 1200, // you can change price
        image: img,
        quantity: 1
    };

    cart.push(customProduct);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();

    let msg = box.querySelector('.added-msg');
    if (!msg) {
        msg = document.createElement('div');
        msg.className = 'added-msg';
        msg.textContent = '✔ Added to Cart';
        box.appendChild(msg);
    }
}

