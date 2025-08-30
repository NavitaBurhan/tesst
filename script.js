// KAIROS TOPUP - Premium Gaming Top-Up Service JavaScript
// Direct purchase flow with WhatsApp integration

// Configuration
const CONFIG = {
  whatsappNumber: "+62895364952866", // Change this to your WhatsApp number
  currency: "IDR",
  brandName: "KAIROS TOPUP",
};

// Extended games data with more games and real game images
const GAMES_DATA = [
  // MOBA Games
  {
    id: "mobile-legends",
    name: "Mobile Legends",
    icon: "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/MLBB-2025-tiles-178x178.jpg",
    category: "moba",
    popular: true,
    denominations: [
      { amount: 5000, item: "36 Diamonds", popular: true },
      { amount: 12000, item: "85 Diamonds", popular: true },
      { amount: 25000, item: "172 Diamonds", popular: true },
      { amount: 50000, item: "344 Diamonds", popular: false },
      { amount: 100000, item: "706 Diamonds", popular: false },
      { amount: 250000, item: "1860 Diamonds", popular: false },
    ],
  },
  {
    id: "arena-of-valor",
    name: "Arena of Valor",
    icon: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop&crop=center",
    category: "moba",
    popular: false,
    denominations: [
      { amount: 5000, item: "60 Vouchers", popular: true },
      { amount: 12000, item: "150 Vouchers", popular: true },
      { amount: 25000, item: "310 Vouchers", popular: true },
      { amount: 50000, item: "625 Vouchers", popular: false },
    ],
  },
  {
    id: "heroes-evolved",
    name: "Heroes Evolved",
    icon: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop&crop=center",
    category: "moba",
    popular: false,
    denominations: [
      { amount: 10000, item: "100 Gems", popular: true },
      { amount: 25000, item: "250 Gems", popular: true },
      { amount: 50000, item: "500 Gems", popular: false },
    ],
  },

  // Battle Royale Games
  {
    id: "free-fire",
    name: "Free Fire",
    icon: "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/free-fire-tile-codacash-new.jpg",
    category: "battle-royale",
    popular: true,
    denominations: [
      { amount: 2772, item: "10 Diamonds", popular: true },
      { amount: 3458, item: "15 Diamonds", popular: true },
      { amount: 4144, item: "20 Diamonds", popular: true },
      { amount: 4930, item: "25 Diamonds", popular: true },
      { amount: 5816, item: "30 Diamonds", popular: true },
      { amount: 7388, item: "40 Diamonds", popular: true },
      { amount: 8174, item: "55 Diamonds", popular: true },
      { amount: 10532, item: "75 Diamonds", popular: true },
      { amount: 11318, item: "80 Diamonds", popular: false },
      { amount: 12843, item: "90 Diamonds", popular: false },
      { amount: 16194, item: "120 Diamonds", popular: false },
      { amount: 17667, item: "130 Diamonds", popular: false },
      { amount: 19275, item: "145 Diamonds", popular: false },
      { amount: 19964, item: "150 Diamonds", popular: false },
      { amount: 21536, item: "160 Diamonds", popular: false },
      { amount: 24675, item: "190 Diamonds", popular: false },
      { amount: 26099, item: "200 Diamonds", popular: false },
      { amount: 33421, item: "250 Diamonds", popular: false },
      { amount: 33421, item: "260 Diamonds", popular: false },
      { amount: 35519, item: "280 Diamonds", popular: false },
      { amount: 47161, item: "375 Diamonds", popular: false },
      { amount: 50613, item: "405 Diamonds", popular: false },
      { amount: 52977, item: "420 Diamonds", popular: false },
      { amount: 53171, item: "425 Diamonds", popular: false },
      { amount: 58874, item: "475 Diamonds", popular: false },
      { amount: 63956, item: "510 Diamonds", popular: false },
      { amount: 67810, item: "545 Diamonds", popular: false },
      { amount: 70252, item: "565 Diamonds", popular: false },
      { amount: 78549, item: "635 Diamonds", popular: false },
      { amount: 93838, item: "770 Diamonds", popular: false },
      { amount: 95799, item: "790 Diamonds", popular: false },
      { amount: 97819, item: "800 Diamonds", popular: false },
      { amount: 104753, item: "860 Diamonds", popular: false },
      { amount: 111899, item: "930 Diamonds", popular: false },
      { amount: 129292, item: "1050 Diamonds", popular: false },
      { amount: 130342, item: "1075 Diamonds", popular: false },
      { amount: 132057, item: "1080 Diamonds", popular: false },
      { amount: 266399, item: "2200 Diamonds", popular: false },
      { amount: 283950, item: "2350 Diamonds", popular: false },
      { amount: 329538, item: "2720 Diamonds", popular: false },
    ],
  },
  {
    id: "pubg-mobile",
    name: "PUBG Mobile",
    icon: "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/pubgm_tile_aug2024.jpg",
    category: "battle-royale",
    popular: true,
    denominations: [
      { amount: 5000, item: "60 UC", popular: true },
      { amount: 12000, item: "150 UC", popular: true },
      { amount: 25000, item: "300 UC", popular: true },
      { amount: 50000, item: "600 UC", popular: false },
      { amount: 100000, item: "1500 UC", popular: false },
      { amount: 250000, item: "3850 UC", popular: false },
    ],
  },
  {
    id: "call-of-duty-mobile",
    name: "Call of Duty Mobile",
    icon: "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/CODM-tile-codacash-new.jpg",
    category: "battle-royale",
    popular: true,
    denominations: [
      { amount: 15000, item: "128 CP", popular: true },
      { amount: 30000, item: "256 CP", popular: true },
      { amount: 50000, item: "435 CP", popular: true },
      { amount: 100000, item: "880 CP", popular: false },
    ],
  },
  {
    id: "apex-legends-mobile",
    name: "Apex Legends Mobile",
    icon: "https://www.tokogame.com/_next/image?url=https%3A%2F%2Fstatic.tokogame.com%2Fproducts%2Fapex-legends.png&w=256&q=75",
    category: "battle-royale",
    popular: false,
    denominations: [
      { amount: 15000, item: "1000 Coins", popular: true },
      { amount: 30000, item: "2150 Coins", popular: true },
      { amount: 50000, item: "3500 Coins", popular: false },
    ],
  },

  // FPS Games
  {
    id: "valorant",
    name: "Valorant",
    icon: "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/valorant_tile.jpg",
    category: "fps",
    popular: true,
    denominations: [
      { amount: 15000, item: "1000 VP", popular: true },
      { amount: 30000, item: "2050 VP", popular: true },
      { amount: 50000, item: "3500 VP", popular: true },
      { amount: 75000, item: "5350 VP", popular: false },
      { amount: 100000, item: "7200 VP", popular: false },
    ],
  },
  {
    id: "counter-strike-2",
    name: "Counter Strike 2",
    icon: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop&crop=center",
    category: "fps",
    popular: false,
    denominations: [
      { amount: 25000, item: "Prime Status", popular: true },
      { amount: 50000, item: "Operation Pass", popular: true },
    ],
  },

  // RPG Games
  {
    id: "genshin-impact",
    name: "Genshin Impact",
    icon: "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/genshinimpact_tile.jpg",
    category: "rpg",
    popular: true,
    denominations: [
      { amount: 15000, item: "60 Genesis Crystals", popular: true },
      { amount: 25000, item: "300 Genesis Crystals", popular: true },
      { amount: 50000, item: "980 Genesis Crystals", popular: true },
      { amount: 100000, item: "1980 Genesis Crystals", popular: false },
      { amount: 250000, item: "6480 Genesis Crystals", popular: false },
    ],
  },
  {
    id: "honkai-star-rail",
    name: "Honkai Star Rail",
    icon: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=100&h=100&fit=crop&crop=center",
    category: "rpg",
    popular: true,
    denominations: [
      { amount: 15000, item: "60 Oneiric Shards", popular: true },
      { amount: 25000, item: "300 Oneiric Shards", popular: true },
      { amount: 50000, item: "980 Oneiric Shards", popular: true },
      { amount: 100000, item: "1980 Oneiric Shards", popular: false },
    ],
  },
  {
    id: "ragnarok-m",
    name: "Ragnarok M",
    icon: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=100&h=100&fit=crop&crop=center",
    category: "rpg",
    popular: false,
    denominations: [
      { amount: 10000, item: "60 Big Cat Coins", popular: true },
      { amount: 25000, item: "150 Big Cat Coins", popular: true },
      { amount: 50000, item: "300 Big Cat Coins", popular: false },
    ],
  },
  {
    id: "dragon-nest-m",
    name: "Dragon Nest M",
    icon: "https://images.unsplash.com/photo-1586182987320-4f376d39d787?w=100&h=100&fit=crop&crop=center",
    category: "rpg",
    popular: false,
    denominations: [
      { amount: 10000, item: "100 Diamonds", popular: true },
      { amount: 25000, item: "250 Diamonds", popular: true },
      { amount: 50000, item: "500 Diamonds", popular: false },
    ],
  },

  // Simulation Games
  {
    id: "roblox",
    name: "Roblox",
    icon: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=100&h=100&fit=crop&crop=center",
    category: "simulation",
    popular: true,
    denominations: [
      { amount: 10000, item: "800 Robux", popular: true },
      { amount: 25000, item: "2000 Robux", popular: true },
      { amount: 50000, item: "4500 Robux", popular: true },
      { amount: 100000, item: "10000 Robux", popular: false },
    ],
  },
  {
    id: "minecraft",
    name: "Minecraft",
    icon: "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/Minecraft-Java-Bedrock-tile_update_178x178.jpg",
    category: "simulation",
    popular: true,
    denominations: [
      { amount: 15000, item: "1000 Minecoins", popular: true },
      { amount: 30000, item: "2500 Minecoins", popular: true },
      { amount: 50000, item: "4000 Minecoins", popular: false },
    ],
  },
  {
    id: "the-sims-mobile",
    name: "The Sims Mobile",
    icon: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop&crop=center",
    category: "simulation",
    popular: false,
    denominations: [
      { amount: 15000, item: "600 SimCash", popular: true },
      { amount: 30000, item: "1250 SimCash", popular: true },
      { amount: 50000, item: "2100 SimCash", popular: false },
    ],
  },

  // Other Games
  {
    id: "among-us",
    name: "Among Us",
    icon: "https://www.tokogame.com/_next/image?url=https%3A%2F%2Fstatic.tokogame.com%2Fproducts%2Fsupersus-promo.jpg&w=256&q=75",
    category: "other",
    popular: false,
    denominations: [
      { amount: 15000, item: "Starter Pack", popular: true },
      { amount: 25000, item: "Cosmicube Bundle", popular: true },
      { amount: 50000, item: "Premium Bundle", popular: false },
    ],
  },
  {
    id: "clash-of-clans",
    name: "Clash of Clans",
    icon: "https://www.tokogame.com/_next/image?url=https%3A%2F%2Fstatic.tokogame.com%2Fproducts%2Fclash-of-clans.png&w=256&q=75",
    category: "other",
    popular: true,
    denominations: [
      { amount: 15000, item: "500 Gems", popular: true },
      { amount: 30000, item: "1200 Gems", popular: true },
      { amount: 50000, item: "2500 Gems", popular: true },
      { amount: 100000, item: "6500 Gems", popular: false },
    ],
  },
  {
    id: "clash-royale",
    name: "Clash Royale",
    icon: "https://www.tokogame.com/_next/image?url=https%3A%2F%2Fstatic.tokogame.com%2Fproducts%2Fclash-royale.png&w=256&q=75",
    category: "other",
    popular: true,
    denominations: [
      { amount: 15000, item: "500 Gems", popular: true },
      { amount: 30000, item: "1200 Gems", popular: true },
      { amount: 50000, item: "2500 Gems", popular: true },
      { amount: 100000, item: "6500 Gems", popular: false },
    ],
  },
  {
    id: "brawl-stars",
    name: "Brawl Stars",
    icon: "https://images.unsplash.com/photo-1586182987320-4f376d39d787?w=100&h=100&fit=crop&crop=center",
    category: "other",
    popular: false,
    denominations: [
      { amount: 15000, item: "170 Gems", popular: true },
      { amount: 30000, item: "360 Gems", popular: true },
      { amount: 50000, item: "950 Gems", popular: true },
      { amount: 100000, item: "2000 Gems", popular: false },
    ],
  },
  {
    id: "stumble-guys",
    name: "Stumble Guys",
    icon: "https://www.tokogame.com/_next/image?url=https%3A%2F%2Fstatic.tokogame.com%2Fproducts%2Fstumble-guys.png&w=256&q=75",
    category: "other",
    popular: false,
    denominations: [
      { amount: 10000, item: "300 Gems", popular: true },
      { amount: 25000, item: "800 Gems", popular: true },
      { amount: 50000, item: "1700 Gems", popular: false },
    ],
  },
  {
    id: "fall-guys",
    name: "Fall Guys",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop&crop=center",
    category: "other",
    popular: false,
    denominations: [
      { amount: 15000, item: "1000 Show-Bucks", popular: true },
      { amount: 30000, item: "2500 Show-Bucks", popular: true },
      { amount: 50000, item: "4000 Show-Bucks", popular: false },
    ],
  },
];

// Global state
let currentGame = null;
let selectedDenomination = null;
let filteredGames = GAMES_DATA;

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  renderGames();
  setupEventListeners();
  console.log("🏆 KAIROS TOPUP App initialized successfully! 👑");
}

// Event listeners setup
function setupEventListeners() {
  // Search functionality
  document
    .getElementById("searchInput")
    .addEventListener("input", handleSearch);

  // Category buttons
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", handleCategoryFilter);
  });

  // Modal close buttons
  document
    .getElementById("closeModal")
    .addEventListener("click", closeGameModal);

  // Buy now button
  document
    .getElementById("buyNowBtn")
    .addEventListener("click", handlePurchase);

  // Close modal when clicking outside
  document.addEventListener("click", handleOutsideClick);

  // Keyboard navigation
  document.addEventListener("keydown", handleKeyboardNavigation);

  // Form inputs for real-time validation
  document
    .getElementById("playerId")
    .addEventListener("input", updateOrderSummary);
  document.getElementById("buyerName").addEventListener("input", validateForm);
  document.getElementById("buyerPhone").addEventListener("input", validateForm);
}

// Render games
function renderGames() {
  renderPopularGames();
  renderAllGames();
}

// Render popular games
function renderPopularGames() {
  const popularGames = filteredGames.filter((game) => game.popular);
  const container = document.getElementById("popularGamesGrid");
  container.innerHTML = "";

  popularGames.forEach((game) => {
    const gameCard = createGameCard(game);
    container.appendChild(gameCard);
  });
}

// Render all games
function renderAllGames() {
  const container = document.getElementById("allGamesGrid");
  container.innerHTML = "";

  filteredGames.forEach((game) => {
    const gameCard = createGameCard(game);
    container.appendChild(gameCard);
  });
}

// Create game card element
function createGameCard(game) {
  const card = document.createElement("div");
  card.className = "game-card relative";
  card.setAttribute("data-game-id", game.id);
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `Pilih ${game.name}`);

  // Check if icon is URL or emoji
  const iconContent = game.icon.startsWith("http")
    ? `<img src="${game.icon}" alt="${game.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">`
    : game.icon;

  card.innerHTML = `
        ${game.popular ? '<div class="popular-badge">Populer</div>' : ""}
        <div class="game-icon">${iconContent}</div>
        <h4>${game.name}</h4>
        <p>${getCategoryName(game.category)}</p>
    `;

  card.addEventListener("click", () => openGameModal(game));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openGameModal(game);
    }
  });

  return card;
}

// Get category display name
function getCategoryName(category) {
  const categories = {
    moba: "MOBA",
    "battle-royale": "Battle Royale",
    fps: "FPS",
    rpg: "RPG",
    simulation: "Simulasi",
    other: "Lainnya",
  };
  return categories[category] || category;
}

// Open game selection modal
function openGameModal(game) {
  currentGame = game;
  selectedDenomination = null;

  // Update modal content with image or emoji
  const modalIconContent = game.icon.startsWith("http")
    ? `<img src="${game.icon}" alt="${game.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px;">`
    : game.icon;

  document.getElementById("modalGameIcon").innerHTML = modalIconContent;
  document.getElementById("modalGameName").textContent = game.name;
  document.getElementById("modalGameCategory").textContent = getCategoryName(
    game.category
  );

  // Render denominations
  renderDenominations(game.denominations);

  // Reset form
  document.getElementById("playerId").value = "";
  document.getElementById("buyerName").value = "";
  document.getElementById("buyerPhone").value = "";

  // Hide order summary initially
  document.getElementById("orderSummary").classList.add("hidden");

  // Show modal
  document.getElementById("gameModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";

  // Focus management
  document.getElementById("playerId").focus();
}

// Render denominations
function renderDenominations(denominations) {
  const container = document.getElementById("denominationsList");
  container.innerHTML = "";

  denominations.forEach((denom) => {
    const button = createDenominationButton(denom);
    container.appendChild(button);
  });
}

// Emoji selector berdasarkan nama item
function getItemEmoji(itemName) {
  const t = itemName.toLowerCase();
  if (t.includes('diamond')) return '💎';
  if (t.includes('genesis') || t.includes('crystal')) return '🔮';
  if (t.includes('shard')) return '✨';
  if (t.includes('oneiric')) return '✨';
  if (t.includes('gem')) return '🔹';
  if (t.includes('robux')) return '🪙';
  if (t.includes('minecoin')) return '🪙';
  if (t.includes('coin')) return '🪙';
  if (t.includes('cash')) return '💵';
  if (t.includes('voucher')) return '🎟️';
  if (t.includes('uc')) return '🪙';
  if (t.includes('vp')) return '🎯';
  if (t.includes('cp')) return '🎯';
  if (t.includes('show-bucks') || t.includes('bucks')) return '🪙';
  return '🎮';
}

// Create denomination button
function createDenominationButton(denomination) {
  const button = document.createElement("div");
  button.className = "denomination-btn";
  button.setAttribute("data-amount", denomination.amount);
  button.setAttribute("role", "button");
  button.setAttribute("tabindex", "0");
  button.setAttribute(
    "aria-label",
    `Pilih ${denomination.item} seharga ${formatCurrency(denomination.amount)}`
  );

  const emoji = getItemEmoji(denomination.item);

  button.innerHTML = `
    <div class="denom-row">
      <span class="denom-emoji" aria-hidden="true">${emoji}</span>
      <span class="item-name">${denomination.item}</span>
    </div>
    <div class="item-price">${formatCurrency(denomination.amount)}</div>
  `;

  button.addEventListener("click", () =>
    selectDenomination(denomination, button)
  );
  button.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      selectDenomination(denomination, button);
    }
  });

  return button;
}

// Select denomination
function selectDenomination(denomination, buttonElement) {
  selectedDenomination = denomination;

  // Update UI
  document.querySelectorAll(".denomination-btn").forEach((btn) => {
    btn.classList.remove("selected");
  });
  buttonElement.classList.add("selected");

  // Update order summary
  updateOrderSummary();
  validateForm();
}

// Update order summary
function updateOrderSummary() {
  if (!selectedDenomination) {
    document.getElementById("orderSummary").classList.add("hidden");
    return;
  }

  const playerId = document.getElementById("playerId").value.trim();

  document.getElementById("summaryGame").textContent = currentGame.name;
  document.getElementById("summaryItem").textContent =
    selectedDenomination.item;
  document.getElementById("summaryPlayerId").textContent = playerId || "-";
  document.getElementById("summaryPrice").textContent = formatCurrency(
    selectedDenomination.amount
  );
  document.getElementById("summaryTotal").textContent = formatCurrency(
    selectedDenomination.amount
  );

  document.getElementById("orderSummary").classList.remove("hidden");
}

// Validate form
function validateForm() {
  const playerId = document.getElementById("playerId").value.trim();
  const buyerName = document.getElementById("buyerName").value.trim();
  const buyerPhone = document.getElementById("buyerPhone").value.trim();

  const isValid =
    selectedDenomination &&
    playerId.length > 0 &&
    buyerName.length > 0 &&
    buyerPhone.length >= 9;

  document.getElementById("buyNowBtn").disabled = !isValid;
}

// Handle purchase
function handlePurchase() {
  const playerId = document.getElementById("playerId").value.trim();
  const buyerName = document.getElementById("buyerName").value.trim();
  const buyerPhone = document.getElementById("buyerPhone").value.trim();

  // Final validation
  if (!selectedDenomination) {
    showToast("Pilih nominal terlebih dahulu", "error");
    return;
  }

  if (!playerId) {
    showToast("Player ID harus diisi", "error");
    document.getElementById("playerId").focus();
    return;
  }

  if (!buyerName) {
    showToast("Nama lengkap harus diisi", "error");
    document.getElementById("buyerName").focus();
    return;
  }

  if (!buyerPhone || buyerPhone.length < 9) {
    showToast("Nomor WhatsApp tidak valid (minimal 9 digit)", "error");
    document.getElementById("buyerPhone").focus();
    return;
  }

  // Generate WhatsApp message
  const message = generateWhatsAppMessage(playerId, buyerName, buyerPhone);

  // Open WhatsApp
  openWhatsApp(message);
}

// Generate WhatsApp message
function generateWhatsAppMessage(playerId, buyerName, buyerPhone) {
  let message = `*${CONFIG.brandName} - PREMIUM TOP-UP ORDER*\n\n`;
  message += `*Data Pembeli:*\n`;
  message += `👤 Nama: ${buyerName}\n`;
  message += `📱 No HP: ${buyerPhone}\n\n`;
  message += `*Detail Pesanan:*\n`;
  message += `🎮 Game: ${currentGame.name}\n`;
  message += `💎 Item: ${selectedDenomination.item}\n`;
  message += `🆔 Player ID: ${playerId}\n`;
  message += `💰 Harga: ${formatCurrency(selectedDenomination.amount)}\n\n`;
  message += `*🏆 Total: ${formatCurrency(selectedDenomination.amount)}*\n\n`;
  message += `Terima kasih telah memilih ${CONFIG.brandName}! 👑\n`;
  message += `Pesanan akan diproses segera dengan kualitas premium terbaik.`;

  return message;
}

// Open WhatsApp
function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber.replace(
    "+",
    ""
  )}?text=${encodedMessage}`;

  // Show loading state
  const buyBtn = document.getElementById("buyNowBtn");
  const originalText = buyBtn.innerHTML;
  buyBtn.innerHTML = '<div class="loading"></div> Membuka WhatsApp...';
  buyBtn.disabled = true;

  setTimeout(() => {
    window.open(whatsappUrl, "_blank");

    // Reset button
    buyBtn.innerHTML = originalText;
    buyBtn.disabled = false;

    // Close modal and show success
    closeGameModal();
    showToast("Pesanan premium berhasil dikirim ke WhatsApp! 👑", "success");
  }, 1000);
}

// Search functionality
function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase();
  filteredGames = GAMES_DATA.filter(
    (game) =>
      game.name.toLowerCase().includes(searchTerm) ||
      getCategoryName(game.category).toLowerCase().includes(searchTerm)
  );
  renderGames();
}

// Category filter
function handleCategoryFilter(e) {
  const category = e.target.dataset.category;

  // Update active button
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");

  // Filter games
  if (category === "all") {
    filteredGames = GAMES_DATA;
  } else {
    filteredGames = GAMES_DATA.filter((game) => game.category === category);
  }

  renderGames();
}

// Modal management
function closeGameModal() {
  document.getElementById("gameModal").classList.add("hidden");
  document.body.style.overflow = "auto";
  currentGame = null;
  selectedDenomination = null;
}

// Handle clicks outside modals
function handleOutsideClick(e) {
  if (e.target.id === "gameModal") {
    closeGameModal();
  }
}

// Keyboard navigation
function handleKeyboardNavigation(e) {
  if (e.key === "Escape") {
    if (!document.getElementById("gameModal").classList.contains("hidden")) {
      closeGameModal();
    }
  }
}

// Utility functions
function formatCurrency(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

function showToast(message, type = "info") {
  const toast = document.getElementById("toast");
  const toastIcon = document.getElementById("toastIcon");
  const toastMessage = document.getElementById("toastMessage");

  // Set icon and style based on type
  const config = {
    success: { icon: "fas fa-check-circle", class: "toast-success" },
    error: { icon: "fas fa-exclamation-circle", class: "toast-error" },
    info: { icon: "fas fa-info-circle", class: "toast-info" },
  };

  const toastConfig = config[type] || config.info;

  toastIcon.className = toastConfig.icon;
  toastMessage.textContent = message;
  toast.className = `fixed top-4 right-4 z-50 ${toastConfig.class}`;

  // Show toast
  toast.classList.remove("hidden");

  // Hide toast after 4 seconds
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 4000);
}

console.log("🏆 KAIROS TOPUP - Premium Gaming Service Loaded Successfully! 👑");
console.log(`✨ ${GAMES_DATA.length} premium games available`);
console.log("🎮 Ready to elevate your gaming experience!");
