// ===== HoopWear E-Commerce App =====

// ========== PRODUCT CATALOG ==========
const products = [
  // ===== SHOES (20) =====
  { id: 1, cat: 'shoes', brand: 'Nike', name: 'LeBron XXI "Throne"', price: 18500, mrp: 22000, emoji: '👟', rating: 4.8, reviews: 1243, badge: 'hot' },
  { id: 2, cat: 'shoes', brand: 'Nike', name: 'KD 16 "Aunt Pearl"', price: 15990, mrp: 18500, emoji: '👟', rating: 4.7, reviews: 876, badge: 'new' },
  { id: 3, cat: 'shoes', brand: 'Nike', name: 'Kobe 8 Protro "Mambacita"', price: 21000, mrp: 25000, emoji: '👟', rating: 4.9, reviews: 2045, badge: 'hot' },
  { id: 4, cat: 'shoes', brand: 'Nike', name: 'Zoom Freak 5 "Cream City"', price: 11990, mrp: 14500, emoji: '👟', rating: 4.5, reviews: 654, badge: '' },
  { id: 5, cat: 'shoes', brand: 'Nike', name: 'PG 6 "Painted Swoosh"', price: 9990, mrp: 12500, emoji: '👟', rating: 4.3, reviews: 432, badge: '' },
  { id: 6, cat: 'shoes', brand: 'Adidas', name: 'Harden Vol 8 "Triple Black"', price: 14500, mrp: 17000, emoji: '👟', rating: 4.6, reviews: 789, badge: '' },
  { id: 7, cat: 'shoes', brand: 'Adidas', name: 'D.O.N. Issue 5 "Spidey"', price: 10990, mrp: 13000, emoji: '👟', rating: 4.4, reviews: 551, badge: 'new' },
  { id: 8, cat: 'shoes', brand: 'Adidas', name: 'Dame 9 "EXTPLY"', price: 12490, mrp: 15000, emoji: '👟', rating: 4.5, reviews: 623, badge: '' },
  { id: 9, cat: 'shoes', brand: 'Under Armour', name: 'Curry 11 "Dub Nation"', price: 16500, mrp: 19500, emoji: '👟', rating: 4.8, reviews: 1567, badge: 'hot' },
  { id: 10, cat: 'shoes', brand: 'Under Armour', name: 'Curry Flow 10 "Iron Sharpens Iron"', price: 13990, mrp: 16000, emoji: '👟', rating: 4.6, reviews: 934, badge: '' },
  { id: 11, cat: 'shoes', brand: 'Jordan', name: 'Air Jordan 38 "Fundamentals"', price: 19500, mrp: 23000, emoji: '👟', rating: 4.7, reviews: 1102, badge: '' },
  { id: 12, cat: 'shoes', brand: 'Jordan', name: 'Luka 2 "Lake Bled"', price: 12990, mrp: 15500, emoji: '👟', rating: 4.5, reviews: 743, badge: 'new' },
  { id: 13, cat: 'shoes', brand: 'Jordan', name: 'Tatum 2 "Venom"', price: 11990, mrp: 14000, emoji: '👟', rating: 4.4, reviews: 598, badge: '' },
  { id: 14, cat: 'shoes', brand: 'Puma', name: 'MB.03 "Toxic" LaMelo Ball', price: 13490, mrp: 16000, emoji: '👟', rating: 4.6, reviews: 867, badge: 'hot' },
  { id: 15, cat: 'shoes', brand: 'Puma', name: 'Rise Nitro "Fiery Coral"', price: 8990, mrp: 11000, emoji: '👟', rating: 4.2, reviews: 321, badge: '' },
  { id: 16, cat: 'shoes', brand: 'New Balance', name: 'TWO WXY v4 "Neon Nights"', price: 11500, mrp: 14000, emoji: '👟', rating: 4.3, reviews: 412, badge: '' },
  { id: 17, cat: 'shoes', brand: 'New Balance', name: 'Kawhi 3 "Fun Police"', price: 14990, mrp: 17500, emoji: '👟', rating: 4.5, reviews: 645, badge: 'new' },
  { id: 18, cat: 'shoes', brand: 'Anta', name: 'KT 9 "Klay Thompson"', price: 7990, mrp: 10000, emoji: '👟', rating: 4.1, reviews: 278, badge: '' },
  { id: 19, cat: 'shoes', brand: 'Nike', name: 'Air Max Impact 4', price: 6990, mrp: 9000, emoji: '👟', rating: 4.0, reviews: 203, badge: 'sale' },
  { id: 20, cat: 'shoes', brand: 'Nike', name: 'Ja 1 "Scratch" Ja Morant', price: 10990, mrp: 13500, emoji: '👟', rating: 4.6, reviews: 812, badge: '' },

  // ===== JERSEYS (20) =====
  { id: 21, cat: 'jerseys', brand: 'Nike', name: 'LeBron James Lakers #23 Icon', price: 4500, mrp: 5500, emoji: '👕', rating: 4.9, reviews: 3201, badge: 'hot' },
  { id: 22, cat: 'jerseys', brand: 'Nike', name: 'Stephen Curry Warriors #30', price: 4500, mrp: 5500, emoji: '👕', rating: 4.8, reviews: 2876, badge: 'hot' },
  { id: 23, cat: 'jerseys', brand: 'Nike', name: 'Kevin Durant Suns #35 Icon', price: 4200, mrp: 5000, emoji: '👕', rating: 4.7, reviews: 1543, badge: '' },
  { id: 24, cat: 'jerseys', brand: 'Nike', name: 'Giannis Bucks #34 Statement', price: 4500, mrp: 5500, emoji: '👕', rating: 4.6, reviews: 1234, badge: '' },
  { id: 25, cat: 'jerseys', brand: 'Nike', name: 'Luka Dončić Mavs #77 City', price: 5200, mrp: 6500, emoji: '👕', rating: 4.8, reviews: 1876, badge: 'new' },
  { id: 26, cat: 'jerseys', brand: 'Nike', name: 'Jayson Tatum Celtics #0 Icon', price: 4200, mrp: 5000, emoji: '👕', rating: 4.5, reviews: 987, badge: '' },
  { id: 27, cat: 'jerseys', brand: 'Nike', name: 'Nikola Jokić Nuggets #15', price: 4200, mrp: 5000, emoji: '👕', rating: 4.6, reviews: 1102, badge: '' },
  { id: 28, cat: 'jerseys', brand: 'Nike', name: 'Ja Morant Grizzlies #12', price: 3800, mrp: 4500, emoji: '👕', rating: 4.4, reviews: 765, badge: '' },
  { id: 29, cat: 'jerseys', brand: 'Nike', name: 'Joel Embiid 76ers #21', price: 3800, mrp: 4500, emoji: '👕', rating: 4.3, reviews: 654, badge: '' },
  { id: 30, cat: 'jerseys', brand: 'Nike', name: 'Anthony Edwards TWolves #5', price: 4000, mrp: 5000, emoji: '👕', rating: 4.7, reviews: 1345, badge: 'new' },
  { id: 31, cat: 'jerseys', brand: 'Mitchell & Ness', name: 'Michael Jordan Bulls #23 Retro', price: 8500, mrp: 10000, emoji: '👕', rating: 4.9, reviews: 5432, badge: 'hot' },
  { id: 32, cat: 'jerseys', brand: 'Mitchell & Ness', name: 'Kobe Bryant Lakers #24 Retro', price: 8500, mrp: 10000, emoji: '👕', rating: 4.9, reviews: 4876, badge: 'hot' },
  { id: 33, cat: 'jerseys', brand: 'Mitchell & Ness', name: 'Allen Iverson 76ers #3 Retro', price: 7500, mrp: 9000, emoji: '👕', rating: 4.7, reviews: 2134, badge: '' },
  { id: 34, cat: 'jerseys', brand: 'Nike', name: 'Victor Wembanyama Spurs #1', price: 4500, mrp: 5500, emoji: '👕', rating: 4.8, reviews: 2045, badge: 'new' },
  { id: 35, cat: 'jerseys', brand: 'Nike', name: 'Shai Gilgeous-Alexander OKC #2', price: 4200, mrp: 5000, emoji: '👕', rating: 4.6, reviews: 1234, badge: '' },
  { id: 36, cat: 'jerseys', brand: 'Nike', name: 'Devin Booker Suns #1 City', price: 4800, mrp: 6000, emoji: '👕', rating: 4.5, reviews: 876, badge: '' },
  { id: 37, cat: 'jerseys', brand: 'Nike', name: 'Jimmy Butler Heat #22 Vice', price: 5200, mrp: 6500, emoji: '👕', rating: 4.7, reviews: 1567, badge: '' },
  { id: 38, cat: 'jerseys', brand: 'Nike', name: 'Donovan Mitchell Cavs #45', price: 3800, mrp: 4500, emoji: '👕', rating: 4.3, reviews: 543, badge: '' },
  { id: 39, cat: 'jerseys', brand: 'Nike', name: 'Trae Young Hawks #11 City', price: 4000, mrp: 5000, emoji: '👕', rating: 4.4, reviews: 678, badge: '' },
  { id: 40, cat: 'jerseys', brand: 'Nike', name: 'Chet Holmgren OKC #7 Icon', price: 3500, mrp: 4500, emoji: '👕', rating: 4.2, reviews: 345, badge: 'new' },

  // ===== BASKETBALLS (20) =====
  { id: 41, cat: 'balls', brand: 'Spalding', name: 'NBA Official Game Ball Leather', price: 12500, mrp: 15000, emoji: '🏀', rating: 4.9, reviews: 987, badge: 'hot' },
  { id: 42, cat: 'balls', brand: 'Spalding', name: 'TF-1000 Legacy Indoor', price: 5500, mrp: 7000, emoji: '🏀', rating: 4.7, reviews: 1234, badge: '' },
  { id: 43, cat: 'balls', brand: 'Spalding', name: 'TF-500 Indoor/Outdoor Composite', price: 2800, mrp: 3500, emoji: '🏀', rating: 4.5, reviews: 2341, badge: '' },
  { id: 44, cat: 'balls', brand: 'Spalding', name: 'Street Phantom Outdoor Rubber', price: 1200, mrp: 1500, emoji: '🏀', rating: 4.3, reviews: 3456, badge: '' },
  { id: 45, cat: 'balls', brand: 'Wilson', name: 'NBA Authentic Series Indoor Game', price: 7500, mrp: 9000, emoji: '🏀', rating: 4.8, reviews: 876, badge: 'hot' },
  { id: 46, cat: 'balls', brand: 'Wilson', name: 'Evolution Indoor Game Ball', price: 4500, mrp: 5500, emoji: '🏀', rating: 4.8, reviews: 5432, badge: 'hot' },
  { id: 47, cat: 'balls', brand: 'Wilson', name: 'NCAA Legend Composite', price: 2200, mrp: 2800, emoji: '🏀', rating: 4.4, reviews: 1876, badge: '' },
  { id: 48, cat: 'balls', brand: 'Wilson', name: 'NBA DRV Plus Outdoor', price: 1500, mrp: 2000, emoji: '🏀', rating: 4.2, reviews: 2543, badge: '' },
  { id: 49, cat: 'balls', brand: 'Molten', name: 'BG5000 FIBA Official Game Ball', price: 9500, mrp: 11500, emoji: '🏀', rating: 4.9, reviews: 654, badge: '' },
  { id: 50, cat: 'balls', brand: 'Molten', name: 'GG7X Composite Leather', price: 3800, mrp: 4500, emoji: '🏀', rating: 4.6, reviews: 1543, badge: '' },
  { id: 51, cat: 'balls', brand: 'Molten', name: 'BGR7 Deep Channel Rubber', price: 900, mrp: 1200, emoji: '🏀', rating: 4.1, reviews: 3210, badge: 'sale' },
  { id: 52, cat: 'balls', brand: 'Nike', name: 'Elite All Court 2.0', price: 3200, mrp: 4000, emoji: '🏀', rating: 4.5, reviews: 1987, badge: '' },
  { id: 53, cat: 'balls', brand: 'Nike', name: 'Everyday Playground Graphic', price: 1800, mrp: 2200, emoji: '🏀', rating: 4.3, reviews: 2876, badge: '' },
  { id: 54, cat: 'balls', brand: 'Nike', name: 'Skills Mini Basketball', price: 800, mrp: 1000, emoji: '🏀', rating: 4.0, reviews: 1543, badge: '' },
  { id: 55, cat: 'balls', brand: 'Under Armour', name: 'UA 595 Composite Indoor', price: 3500, mrp: 4200, emoji: '🏀', rating: 4.4, reviews: 654, badge: '' },
  { id: 56, cat: 'balls', brand: 'Spalding', name: 'Kobe Bryant Marble Series', price: 2500, mrp: 3200, emoji: '🏀', rating: 4.6, reviews: 1876, badge: 'new' },
  { id: 57, cat: 'balls', brand: 'Wilson', name: 'NBA Team Alliance (Lakers)', price: 2000, mrp: 2500, emoji: '🏀', rating: 4.3, reviews: 1234, badge: '' },
  { id: 58, cat: 'balls', brand: 'Wilson', name: 'NBA Team Alliance (Warriors)', price: 2000, mrp: 2500, emoji: '🏀', rating: 4.3, reviews: 1102, badge: '' },
  { id: 59, cat: 'balls', brand: 'Spalding', name: 'Zi/O Excel Indoor/Outdoor', price: 3000, mrp: 3800, emoji: '🏀', rating: 4.5, reviews: 987, badge: '' },
  { id: 60, cat: 'balls', brand: 'Baden', name: 'Perfection Elite Game Ball', price: 6500, mrp: 8000, emoji: '🏀', rating: 4.7, reviews: 432, badge: 'new' },

  // ===== ACCESSORIES (20) =====
  { id: 61, cat: 'accessories', brand: 'Spalding', name: 'Pro Slam Breakaway Rim', price: 4500, mrp: 5500, emoji: '🥅', rating: 4.6, reviews: 543, badge: '' },
  { id: 62, cat: 'accessories', brand: 'SKLZ', name: 'Pro Performance Shooting Net', price: 2800, mrp: 3500, emoji: '🥅', rating: 4.4, reviews: 765, badge: '' },
  { id: 63, cat: 'accessories', brand: 'Franklin', name: 'Official Size Backboard & Rim Kit', price: 8500, mrp: 10500, emoji: '🥅', rating: 4.5, reviews: 321, badge: '' },
  { id: 64, cat: 'accessories', brand: 'Goalrilla', name: 'Heavy-Duty Chain Net (Steel)', price: 1200, mrp: 1500, emoji: '🥅', rating: 4.7, reviews: 1876, badge: 'hot' },
  { id: 65, cat: 'accessories', brand: 'Nike', name: 'Pro Ankle Sleeve 3.0', price: 1800, mrp: 2200, emoji: '🦵', rating: 4.5, reviews: 2341, badge: '' },
  { id: 66, cat: 'accessories', brand: 'Nike', name: 'Elite Arm Sleeve (Pair)', price: 1500, mrp: 1800, emoji: '💪', rating: 4.6, reviews: 3456, badge: 'hot' },
  { id: 67, cat: 'accessories', brand: 'Nike', name: 'NBA Headband "Swoosh"', price: 600, mrp: 800, emoji: '🎽', rating: 4.3, reviews: 5432, badge: '' },
  { id: 68, cat: 'accessories', brand: 'Under Armour', name: 'Curry Armour Slide Sandals', price: 3200, mrp: 4000, emoji: '🩴', rating: 4.4, reviews: 876, badge: '' },
  { id: 69, cat: 'accessories', brand: 'Nike', name: 'NBA Basketball Socks (3-Pack)', price: 1200, mrp: 1500, emoji: '🧦', rating: 4.5, reviews: 4321, badge: '' },
  { id: 70, cat: 'accessories', brand: 'Nike', name: 'Elite Crew Socks "Court Ready"', price: 800, mrp: 1000, emoji: '🧦', rating: 4.4, reviews: 3210, badge: '' },
  { id: 71, cat: 'accessories', brand: 'Shock Doctor', name: 'Pro Mouthguard Basketball', price: 950, mrp: 1200, emoji: '🦷', rating: 4.2, reviews: 987, badge: '' },
  { id: 72, cat: 'accessories', brand: 'McDavid', name: 'Hex Knee Pad (Pair)', price: 2500, mrp: 3200, emoji: '🦵', rating: 4.6, reviews: 1543, badge: '' },
  { id: 73, cat: 'accessories', brand: 'Nike', name: 'Hoops Elite Pro Backpack', price: 4500, mrp: 5500, emoji: '🎒', rating: 4.7, reviews: 2134, badge: 'new' },
  { id: 74, cat: 'accessories', brand: 'Wilson', name: 'NBA Ball Carry Bag (6-Ball)', price: 1800, mrp: 2200, emoji: '🎒', rating: 4.3, reviews: 654, badge: '' },
  { id: 75, cat: 'accessories', brand: 'SKLZ', name: 'Dribble Stick Training Aid', price: 3800, mrp: 4500, emoji: '🏋️', rating: 4.5, reviews: 432, badge: '' },
  { id: 76, cat: 'accessories', brand: 'Nike', name: 'Finger Sleeves (10-Pack)', price: 500, mrp: 700, emoji: '🤞', rating: 4.1, reviews: 2876, badge: '' },
  { id: 77, cat: 'accessories', brand: 'SKLZ', name: 'Court Vision Training Goggles', price: 1200, mrp: 1500, emoji: '🥽', rating: 4.3, reviews: 765, badge: '' },
  { id: 78, cat: 'accessories', brand: 'Nike', name: 'Sport Water Bottle 32oz Squeeze', price: 700, mrp: 900, emoji: '🧴', rating: 4.4, reviews: 4567, badge: '' },
  { id: 79, cat: 'accessories', brand: 'Under Armour', name: 'Undeniable 5.0 Duffle Bag', price: 3500, mrp: 4200, emoji: '🎒', rating: 4.5, reviews: 1234, badge: '' },
  { id: 80, cat: 'accessories', brand: 'Spalding', name: 'Portable Ball Pump + Needles', price: 450, mrp: 600, emoji: '💨', rating: 4.2, reviews: 5678, badge: 'sale' },
];

const categoryInfo = {
  shoes: { label: 'Basketball Shoes', icon: '👟', count: 20 },
  jerseys: { label: 'Jerseys', icon: '👕', count: 20 },
  balls: { label: 'Basketballs', icon: '⛹️', count: 20 },
  accessories: { label: 'Accessories', icon: '🎽', count: 20 },
};

// ========== CART ==========
let cart = [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showToast(`🏀 ${product.name} added to cart!`);

  // Bump animation on badge
  const badge = document.getElementById('cartCount');
  if (badge) {
    badge.classList.remove('bump');
    void badge.offsetWidth;
    badge.classList.add('bump');
  }

  // Update button state
  updateAddButtons();
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.id !== productId);
  updateCartUI();
  updateAddButtons();
}

function changeQty(productId, delta) {
  const item = cart.find(c => c.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  updateCartUI();
}

function updateCartUI() {
  // Badge
  const totalItems = cart.reduce((s, c) => s + c.qty, 0);
  const badge = document.getElementById('cartCount');
  if (badge) badge.textContent = totalItems;

  // Cart items
  const container = document.getElementById('cartItems');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <p>Your cart is empty</p>
      </div>`;
  } else {
    container.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="ci-img">${item.emoji}</div>
        <div class="ci-info">
          <div class="ci-name">${item.name}</div>
          <div class="ci-price">₹${item.price.toLocaleString('en-IN')}</div>
        </div>
        <div class="ci-actions">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},+1)">+</button>
          <button class="ci-remove" onclick="removeFromCart(${item.id})" title="Remove">✕</button>
        </div>
      </div>`).join('');
  }

  // Total
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = `₹${total.toLocaleString('en-IN')}`;
}

function updateAddButtons() {
  document.querySelectorAll('.p-btn').forEach(btn => {
    const id = parseInt(btn.dataset.id);
    const inCart = cart.some(c => c.id === id);
    if (inCart) {
      btn.classList.add('in-cart');
      btn.innerHTML = '✓ In Cart';
    } else {
      btn.classList.remove('in-cart');
      btn.innerHTML = '+ Add to Cart';
    }
  });
}

function toggleCart() {
  document.getElementById('cartOverlay')?.classList.toggle('open');
  document.getElementById('cartDrawer')?.classList.toggle('open');
}

function closeCart() {
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.getElementById('cartDrawer')?.classList.remove('open');
}

// ========== PRODUCT RENDERING ==========
function renderProducts(category) {
  const filtered = category === 'all'
    ? products
    : products.filter(p => p.cat === category);

  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const sortVal = document.getElementById('sortSelect')?.value || 'popular';
  let sorted = [...filtered];

  switch (sortVal) {
    case 'price-low': sorted.sort((a, b) => a.price - b.price); break;
    case 'price-high': sorted.sort((a, b) => b.price - a.price); break;
    case 'rating': sorted.sort((a, b) => b.rating - a.rating); break;
    case 'newest': sorted.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0)); break;
    default: sorted.sort((a, b) => b.reviews - a.reviews); break;
  }

  grid.innerHTML = sorted.map(p => {
    const discount = Math.round((1 - p.price / p.mrp) * 100);
    const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
    const badgeHtml = p.badge
      ? `<span class="p-badge ${p.badge}">${p.badge === 'sale' ? 'SALE' : p.badge === 'new' ? 'NEW' : p.badge === 'hot' ? 'HOT' : ''}</span>`
      : '';
    const inCart = cart.some(c => c.id === p.id);

    return `
      <div class="p-card">
        <div class="p-img">
          ${badgeHtml}
          ${p.emoji}
        </div>
        <div class="p-body">
          <div class="p-brand">${p.brand}</div>
          <div class="p-name">${p.name}</div>
          <div class="p-rating">
            <span class="p-stars">${stars}</span>
            <span class="p-reviews">(${p.reviews.toLocaleString()})</span>
          </div>
          <div class="p-prices">
            <span class="p-price">₹${p.price.toLocaleString('en-IN')}</span>
            <span class="p-mrp">₹${p.mrp.toLocaleString('en-IN')}</span>
            <span class="p-discount">${discount}% off</span>
          </div>
          <button class="p-btn ${inCart ? 'in-cart' : ''}" data-id="${p.id}" onclick="addToCart(${p.id})">
            ${inCart ? '✓ In Cart' : '+ Add to Cart'}
          </button>
        </div>
      </div>`;
  }).join('');

  // Update results count
  const countEl = document.getElementById('resultCount');
  if (countEl) countEl.textContent = `${sorted.length} products`;

  // Update title
  const titleEl = document.getElementById('shopTitle');
  if (titleEl) {
    titleEl.textContent = category === 'all' ? 'All Products' : (categoryInfo[category]?.label || 'Products');
  }
}

// ========== SEARCH ==========
function handleSearch(query) {
  query = query.toLowerCase().trim();
  if (!query) return;

  // Navigate to shop
  navigateTo('shop');

  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const results = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.brand.toLowerCase().includes(query) ||
    p.cat.toLowerCase().includes(query)
  );

  // Update active cat tab
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));

  const titleEl = document.getElementById('shopTitle');
  if (titleEl) titleEl.textContent = `Search: "${query}"`;

  const countEl = document.getElementById('resultCount');
  if (countEl) countEl.textContent = `${results.length} results`;

  grid.innerHTML = results.length === 0
    ? '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted);">No products found. Try a different search term.</div>'
    : results.map(p => {
      const discount = Math.round((1 - p.price / p.mrp) * 100);
      const stars = '★'.repeat(Math.floor(p.rating));
      const inCart = cart.some(c => c.id === p.id);
      const badgeHtml = p.badge ? `<span class="p-badge ${p.badge}">${p.badge.toUpperCase()}</span>` : '';
      return `
          <div class="p-card">
            <div class="p-img">${badgeHtml}${p.emoji}</div>
            <div class="p-body">
              <div class="p-brand">${p.brand}</div>
              <div class="p-name">${p.name}</div>
              <div class="p-rating"><span class="p-stars">${stars}</span><span class="p-reviews">(${p.reviews.toLocaleString()})</span></div>
              <div class="p-prices"><span class="p-price">₹${p.price.toLocaleString('en-IN')}</span><span class="p-mrp">₹${p.mrp.toLocaleString('en-IN')}</span><span class="p-discount">${discount}% off</span></div>
              <button class="p-btn ${inCart ? 'in-cart' : ''}" data-id="${p.id}" onclick="addToCart(${p.id})">${inCart ? '✓ In Cart' : '+ Add to Cart'}</button>
            </div>
          </div>`;
    }).join('');
}

// ========== SPA NAVIGATION ==========
let currentCat = 'all';

function navigateTo(page, extra) {
  // Hide all sections
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));

  // Show target
  const target = document.getElementById(`page-${page}`);
  if (target) target.classList.add('active');

  // Handle shop category
  if (page === 'shop') {
    currentCat = extra || 'all';
    renderProducts(currentCat);

    // Update cat tabs
    document.querySelectorAll('.cat-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.cat === currentCat);
    });
  }

  // Close mobile menu
  document.querySelector('.nav-actions')?.classList.remove('open');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleHash() {
  const hash = window.location.hash.substring(1) || 'home';
  const parts = hash.split('/');
  navigateTo(parts[0], parts[1]);
}

// ========== FORM VALIDATION ==========
function validateLogin(e) {
  e.preventDefault();
  let valid = true;
  const u = document.getElementById('loginUser');
  const p = document.getElementById('loginPass');
  clearErrors(u, p);

  if (u.value.length < 5) { showError(u, 'Username must be at least 5 characters'); valid = false; }
  if (p.value.length < 6) { showError(p, 'Password must be at least 6 characters'); valid = false; }

  if (valid) {
    showToast('✅ Login successful! Welcome back.');
    e.target.reset();
    setTimeout(() => { window.location.hash = 'home'; }, 600);
  }
}

function validateRegister(e) {
  e.preventDefault();
  let valid = true;
  const fields = ['regUser', 'regPass', 'regCPass', 'regEmail', 'regMobile'].map(id => document.getElementById(id));
  clearErrors(...fields);

  const [u, p, cp, em, mob] = fields;

  if (u.value.length < 6) { showError(u, 'Min 6 characters'); valid = false; }
  if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(p.value)) { showError(p, 'Min 8 chars: uppercase, lowercase & number'); valid = false; }
  if (p.value !== cp.value) { showError(cp, 'Passwords do not match'); valid = false; }
  if (!/^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(em.value)) { showError(em, 'Invalid email format'); valid = false; }
  if (!/^[6-9]\d{9}$/.test(mob.value)) { showError(mob, '10 digits starting with 6-9'); valid = false; }

  if (valid) {
    showToast('🎉 Account created! Welcome to HoopWear.');
    e.target.reset();
    setTimeout(() => { window.location.hash = 'login'; }, 600);
  }
}

function validateForgot(e) {
  e.preventDefault();
  const em = document.getElementById('forgotEmail');
  clearErrors(em);
  if (!/^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(em.value)) {
    showError(em, 'Enter a valid email address');
    return;
  }
  showToast('📧 Reset link sent to your email!');
  e.target.reset();
}

function showError(input, msg) {
  input.classList.add('error');
  const err = input.parentElement.querySelector('.form-error');
  if (err) { err.textContent = msg; err.classList.add('visible'); }
}

function clearErrors(...inputs) {
  inputs.forEach(i => {
    if (!i) return;
    i.classList.remove('error');
    const err = i.parentElement.querySelector('.form-error');
    if (err) err.classList.remove('visible');
  });
}

// ========== TOAST ==========
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  // Hash routing
  window.addEventListener('hashchange', handleHash);
  handleHash();

  // Nav links
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const page = el.dataset.page;
      const cat = el.dataset.cat || '';
      window.location.hash = cat ? `${page}/${cat}` : page;
    });
  });

  // Category tabs
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      currentCat = tab.dataset.cat;
      renderProducts(currentCat);
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === currentCat));
    });
  });

  // Sort
  document.getElementById('sortSelect')?.addEventListener('change', () => renderProducts(currentCat));

  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') handleSearch(searchInput.value);
    });
  }

  // Cart toggle
  document.getElementById('cartBtn')?.addEventListener('click', toggleCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
  document.getElementById('cartCloseBtn')?.addEventListener('click', closeCart);

  // Forms
  document.getElementById('loginForm')?.addEventListener('submit', validateLogin);
  document.getElementById('registerForm')?.addEventListener('submit', validateRegister);
  document.getElementById('forgotForm')?.addEventListener('submit', validateForgot);

  // Mobile toggle
  document.querySelector('.nav-toggle')?.addEventListener('click', () => {
    document.querySelector('.nav-actions')?.classList.toggle('open');
  });

  // Checkout button
  document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('🛒 Your cart is empty!');
      return;
    }
    showToast('🎉 Order placed! Thank you for shopping at HoopWear.');
    cart = [];
    updateCartUI();
    updateAddButtons();
    closeCart();
  });

  // Init cart UI
  updateCartUI();
});
