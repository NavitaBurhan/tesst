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
      { amount: 2146, item: "3 Diamonds", popular: false },
      { amount: 2477, item: "5 Diamonds", popular: false },
      { amount: 4368, item: "12 Diamonds", popular: false },
      { amount: 6272, item: "19 Diamonds", popular: false },
      { amount: 8571, item: "28 Diamonds", popular: false },
      { amount: 10555, item: "36 Diamonds", popular: true },
      { amount: 15366, item: "56 Diamonds", popular: false },
      { amount: 23273, item: "86 Diamonds", popular: false },
      { amount: 45130, item: "170 Diamonds", popular: true },
      { amount: 45130, item: "172 Diamonds", popular: false },
      { amount: 48675, item: "185 Diamonds", popular: false },
      { amount: 57544, item: "222 Diamonds", popular: false },
      { amount: 66531, item: "257 Diamonds", popular: false },
      { amount: 88964, item: "344 Diamonds", popular: true },
      { amount: 110140, item: "429 Diamonds", popular: false },
      { amount: 132200, item: "514 Diamonds", popular: false },
      { amount: 153528, item: "600 Diamonds", popular: false },
      { amount: 176631, item: "706 Diamonds", popular: true },
      { amount: 220731, item: "878 Diamonds", popular: false },
      { amount: 264831, item: "1050 Diamonds", popular: false },
      { amount: 309597, item: "1220 Diamonds", popular: false },
      { amount: 356605, item: "1412 Diamonds", popular: false },
      { amount: 535898, item: "2195 Diamonds", popular: false },
      { amount: 894381, item: "3688 Diamonds", popular: false },
      { amount: 1340649, item: "5532 Diamonds", popular: false },
      { amount: 2238410, item: "9288 Diamonds", popular: false },
      { amount: 79150, item: "Starlight Membership", popular: true },
      { amount: 192650, item: "Starlight Member Plus", popular: false },
      { amount: 143156, item: "Twilight Pass", popular: false },
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
      { amount: 8300, item: "PUBG Mobile 15 UC", popular: true },
      { amount: 9100, item: "PUBG Mobile 25 UC", popular: true },
      { amount: 15200, item: "PUBG Mobile 35 UC", popular: true },
      { amount: 15200, item: "PUBG Mobile 50 UC", popular: true },
      { amount: 15200, item: "PUBG Mobile 60 UC", popular: true },
      { amount: 11700, item: "PUBG Mobile Weekly Deal Pack 1", popular: true },
      { amount: 24160, item: "PUBG Mobile 70 UC", popular: true },
      { amount: 28725, item: "PUBG Mobile 100 UC", popular: true },
      { amount: 43150, item: "PUBG Mobile 125 UC", popular: true },
      { amount: 43150, item: "PUBG Mobile 150 UC", popular: true },
      { amount: 55769, item: "PUBG Mobile 200 UC", popular: true },
      { amount: 58130, item: "PUBG Mobile 210 UC", popular: true },
      { amount: 70410, item: "PUBG Mobile 250 UC", popular: true },
      { amount: 72250, item: "PUBG Mobile 300 UC", popular: true },
      { amount: 84600, item: "PUBG Mobile 350 UC", popular: true },
      { amount: 87300, item: "PUBG Mobile 375 UC", popular: true },
      { amount: 111578, item: "PUBG Mobile 500 UC", popular: false },
      { amount: 125550, item: "PUBG Mobile 525 UC", popular: false },
      { amount: 155600, item: "PUBG Mobile 700 UC", popular: false },
      { amount: 167569, item: "PUBG Mobile 750 UC", popular: false },
      { amount: 227525, item: "PUBG Mobile 1000 UC", popular: false },
      { amount: 239000, item: "PUBG Mobile 1100 UC", popular: false },
      { amount: 278010, item: "PUBG Mobile 1250 UC", popular: false },
      { amount: 321500, item: "PUBG Mobile 1500 UC", popular: false },
      { amount: 351200, item: "PUBG Mobile 1750 UC", popular: false },
      { amount: 506800, item: "PUBG Mobile 2500 UC", popular: false },
      { amount: 37800, item: "PUBG Mobile Weekly Deal Pack 2", popular: true },
      {
        amount: 37900,
        item: "PUBG Mobile Weekly Mythic Emblem Value Pack",
        popular: true,
      },
      {
        amount: 426700,
        item: "Elite Pass Plus + Kupon Peti Klasik",
        popular: false,
      },
    ],
  },
  {
    id: "call-of-duty-mobile",
    name: "Call of Duty Mobile",
    icon: "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/CODM-tile-codacash-new.jpg",
    category: "battle-royale",
    popular: true,
    denominations: [
      { amount: 5995, item: "26 + 5 CP", popular: true },
      { amount: 10445, item: "53 + 9 CP", popular: true },
      { amount: 20199, item: "106 + 21 CP", popular: true },
      { amount: 45235, item: "264 + 53 CP", popular: true },
      { amount: 94199, item: "528 + 106 CP", popular: true },
      { amount: 178350, item: "1056 + 317 CP", popular: false },
      { amount: 211750, item: "1584 + 475 CP", popular: false },
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
      { amount: 41875, item: "300 Valorant Points", popular: true },
      { amount: 46370, item: "420 Valorant Points", popular: true },
      { amount: 74700, item: "625 Valorant Points", popular: true },
      { amount: 74050, item: "700 Valorant Points", popular: true },
      { amount: 125850, item: "1125 Valorant Points", popular: false },
      { amount: 137575, item: "1375 Valorant Points", popular: false },
      { amount: 143610, item: "1650 Valorant Points", popular: false },
      { amount: 172113, item: "1950 Valorant Points", popular: false },
      { amount: 227651, item: "2400 Valorant Points", popular: false },
      { amount: 272921, item: "2850 Valorant Points", popular: false },
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
    icon: "https://cdn.unipin.com/images/icon_product_pages/1710829444-icon-Oversea%20Icon-1024_11zon.png",
    category: "rpg",
    popular: true,
    denominations: [
      { amount: 15000, item: "60 Oneiric Shards", popular: true },
      { amount: 25000, item: "300 Oneiric Shards", popular: true },
      { amount: 50000, item: "980 Oneiric Shards", popular: true },
      { amount: 100000, item: "1980 Oneiric Shards", popular: false },
    ],
  },

  // Simulation Games
  {
    id: "roblox",
    name: "Roblox Gift Card",
    icon: "https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20241122%2F2nut08qgly657qki50zizg_thumbnail.png&w=96&q=75",
    category: "simulation",
    popular: false,
    denominations: [
      { amount: 156500, item: "Roblox Gift Card (US) $10", popular: true },
      { amount: 231500, item: "Roblox Gift Card (US) $15", popular: true },
      { amount: 311500, item: "Roblox Gift Card (US) $20", popular: false },
      { amount: 376500, item: "Roblox Gift Card (US) $25", popular: false },
    ],
  },
  {
    id: "robux",
    name: "Robux",
    icon: "https://ditusi.co.id/storage/games/01JRABB42A68HP5V75SBY17S8D.webp",
    category: "simulation",
    popular: true,
    denominations: [
      { amount: 18000, item: "Robux 80 Vilog", popular: false },
      { amount: 35000, item: "Robux 160 Vilog", popular: false },
      { amount: 52000, item: "Robux 240 Vilog", popular: false },
      { amount: 67000, item: "Robux 320 Vilog", popular: false },
      { amount: 77000, item: "Robux 400 Vilog", popular: false },
      { amount: 80000, item: "Robux 500 Vilog", popular: false },
      { amount: 14700, item: "Robux 800 Vilog", popular: false },
      { amount: 15700, item: "Robux 1000 Vilog", popular: false },
    ],
  },
  {
    id: "grow-a-garden",
    name: "Grow a Garden (Roblox)",
    icon: "https://tokoroblox.com/storage/categories/JtsJxWEH0PWiPfPhOzj5e8WG6MQ3asypgZDLDnR6.png",
    category: "simulation",
    popular: true,
    denominations: [
      { amount: 5000, item: "JOKI AFK 1 JAM", popular: true },
      { amount: 17000, item: "JOKI AFK 12 JAM", popular: true },
      { amount: 28000, item: "JOKI AFK 24 JAM", popular: true },
      { amount: 5000, item: "WATERING CAN", popular: true },
      { amount: 7000, item: "TROWEL", popular: true },
      { amount: 17000, item: "GODLY SPLINKLER", popular: true },
      { amount: 95000, item: "BURNING BUD SEED", popular: true },
      { amount: 100000, item: "ELDER STRAWBERRY SEED", popular: true },
    ],
  },
  {
    id: "Steal-a-brairot",
    name: "Steal A Brairot (Roblox)",
    icon: "https://tokoroblox.com/storage/categories/AKRu9tgdBemRyjvwCoZq8OWkJP4g2omcXacoa3Hg.png",
    category: "simulation",
    popular: true,
    denominations: [
      { amount: 33000, item: "2x MONEY BRAINROT", popular: true },
      { amount: 55000, item: "VIP BRAINROT", popular: true },
      { amount: 25000, item: "BLACKHOLE SLAP", popular: true },
      { amount: 55000, item: "FLYING CARPET", popular: true },
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

  // Other Games
  {
    id: "super-sus",
    name: "Super Sus",
    icon: "https://www.tokogame.com/_next/image?url=https%3A%2F%2Fstatic.tokogame.com%2Fproducts%2Fsupersus-promo.jpg&w=256&q=75",
    category: "other",
    popular: true,
    denominations: [
      { amount: 15425, item: "100 GOLDSTAR", popular: true },
      { amount: 39175, item: "310 GOLDSTAR", popular: true },
      { amount: 67675, item: "520 GOLDSTAR", popular: false },
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
    id: "stumble-guys",
    name: "Stumble Guys",
    icon: "https://www.tokogame.com/_next/image?url=https%3A%2F%2Fstatic.tokogame.com%2Fproducts%2Fstumble-guys.png&w=256&q=75",
    category: "other",
    popular: false,
    denominations: [
      { amount: 14600, item: "Stumble Guys 250 Gems", popular: true },
      { amount: 36200, item: "Stumble Guys 800 Gems", popular: true },
      { amount: 42900, item: "Stumble Guys 120 Tokens", popular: true },
      { amount: 349100, item: "Stumble Guys 1.300 Tokens", popular: false },
      {
        amount: 62350,
        item: "Stumble Guys 1.600 Gems dan 75 Tokens",
        popular: true,
      },
      {
        amount: 139475,
        item: "Stumble Guys 5.000 Gems dan 275 Tokens",
        popular: false,
      },
    ],
  },
  /* === Added Popular New Games === */
  {
    id: "honor-of-kings",
    name: "Honor of Kings",
    icon: "https://static-src.vocagame.com/BisnisVocagame/honor_of_king-8e04-original.webp",
    category: "moba",
    popular: true,
    denominations: [
      { amount: 2550, item: "8 Tokens", popular: true },
      { amount: 3750, item: "16 + 1 Tokens", popular: true },
      { amount: 5100, item: "23 Tokens", popular: true },
      { amount: 16498, item: "80 + 8 Tokens", popular: true },
      { amount: 41900, item: "240 + 17 Tokens", popular: true },
      { amount: 71100, item: "400 + 32 Tokens", popular: true },
      { amount: 98850, item: "560 + 45 Tokens", popular: true },
      { amount: 140135, item: "800 + 95 Tokens", popular: true },
      { amount: 215523, item: "1200 + 153 Tokens", popular: false },
      { amount: 433300, item: "2400 + 324 Tokens", popular: false },
      { amount: 14650, item: "Weekly Card", popular: true },
      { amount: 41950, item: "Weekly Card Plus", popular: true },
    ],
  },
  {
    id: "efootball-2025",
    name: "eFootball 2025",
    icon: "https://www.lapakgaming.com/static/category/EFootball.jpg",
    category: "sports",
    popular: true,
    denominations: [
      { amount: 12000, item: "100 Coins", popular: true },
      { amount: 25000, item: "230 Coins", popular: true },
      { amount: 50000, item: "475 Coins", popular: true },
      { amount: 100000, item: "1000 Coins", popular: false },
      { amount: 250000, item: "2550 Coins", popular: false },
    ],
  },
  {
    id: "fortnite",
    name: "Fortnite",
    icon: "https://www.lapakgaming.com/static/images/category/fortnite-v-bucks.webp",
    category: "battle-royale",
    popular: true,
    denominations: [
      { amount: 12000, item: "1000 V-Bucks", popular: true },
      { amount: 30000, item: "2800 V-Bucks", popular: true },
      { amount: 50000, item: "5000 V-Bucks", popular: true },
      { amount: 100000, item: "13500 V-Bucks", popular: false },
    ],
  },
  {
    id: "warzone-mobile",
    name: "Warzone Mobile",
    icon: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=178&h=178&fit=crop&crop=center",
    category: "fps",
    popular: true,
    denominations: [
      { amount: 15000, item: "80 COD Points", popular: true },
      { amount: 30000, item: "160 COD Points", popular: true },
      { amount: 50000, item: "420 COD Points", popular: true },
      { amount: 100000, item: "1100 COD Points", popular: false },
    ],
  },
  {
    id: "point-blank",
    name: "Point Blank",
    icon: "https://cdn.unipin.com/images/icon_product_pages/1571814027-icon-1559011491-icon-1557743544-icon-point_blank.jpg",
    category: "fps",
    popular: false,
    denominations: [
      { amount: 10000, item: "1200 Cash", popular: true },
      { amount: 25000, item: "3000 Cash", popular: true },
      { amount: 50000, item: "6000 Cash", popular: false },
      { amount: 100000, item: "12000 Cash", popular: false },
    ],
  },
  /* --- Newly appended viral products --- */
  {
    id: "steam-wallet-id",
    name: "Steam Wallet ID",
    icon: "https://www.lapakgaming.com/static/images/category/voucher-steam-wallet.webp",
    category: "other",
    popular: true,
    denominations: [
      { amount: 10135, item: "Steam Wallet Rp8.000", popular: true },
      { amount: 13200, item: "Steam Wallet Rp12.000", popular: true },
      { amount: 44900, item: "Steam Wallet Rp45.000", popular: true },
      { amount: 105100, item: "Steam Wallet Rp90.000", popular: false },
      { amount: 119700, item: "Steam Wallet Rp120.000", popular: false },
      { amount: 287600, item: "Steam Wallet Rp250.000", popular: false },
    ],
  },
  {
    id: "arena-breakout",
    name: "Arena Breakout",
    icon: "https://www.lapakgaming.com/static/category/PDP-ARENABREAKOUT.png",
    category: "fps",
    popular: true,
    denominations: [
      { amount: 14702, item: "Arena Breakout 60 Bonds", popular: true },
      { amount: 67849, item: "Arena Breakout 310 Bonds", popular: true },
      { amount: 134672, item: "Arena Breakout 630 Bonds", popular: true },
      { amount: 669259, item: "Arena Breakout 3.200 Bonds", popular: false },
      { amount: 336117, item: "Arena Breakout 1.580 Bonds", popular: false },
      {
        amount: 42575,
        item: "Arena Breakout Kotak Anti Peluru 30 Hari",
        popular: true,
      },
      {
        amount: 69950,
        item: "Arena Breakout Percobaan Elite 30 Hari",
        popular: true,
      },
      {
        amount: 110055,
        item: "Arena Breakout Kotak Komposit 30 Hari",
        popular: false,
      },
      {
        amount: 167600,
        item: "Arena Breakout Battle Pass Premium",
        popular: false,
      },
      { amount: 11515, item: "Arena Breakout Pilihan Pemula", popular: true },
      {
        amount: 56450,
        item: "Arena Breakout Battle Pass Lanjutan",
        popular: true,
      },
    ],
  },
  {
    id: "ea-fc-mobile",
    name: "FC Mobile",
    icon: "https://cdn.topupgim.com/product-tiles/34ce1696-92f2-4789-b110-983f18d0a682.png?w=200",
    category: "other",
    popular: true,
    denominations: [
      { amount: 12000, item: "60 FC Points", popular: true },
      { amount: 25000, item: "160 FC Points", popular: true },
      { amount: 50000, item: "325 FC Points", popular: true },
      { amount: 100000, item: "860 FC Points", popular: false },
      { amount: 250000, item: "2150 FC Points", popular: false },
    ],
  }
  /* === End Added Games === */
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

// === Emoji selector per jenis item ===
function getItemEmoji(itemName = "") {
  const t = itemName.toLowerCase();
  if (t.includes("diamond")) return "💎";
  if (t.includes("gem")) return "🔹";
  if (t.includes("voucher")) return "🎟️";
  if (t.includes("token")) return "🪙";
  if (t.includes("starcoin")) return "⭐";
  if (t.includes("wild core") || t.includes("core")) return "🔸";
  if (t.includes("genesis") || t.includes("crystal")) return "🔮";
  if (t.includes("shard") || t.includes("oneiric")) return "✨";
  if (t.includes("polychrome")) return "🌈";
  if (t.includes("astrite")) return "🧪";
  if (t.includes("tanium")) return "🧪";
  if (t.includes("black card")) return "🃏";
  if (t.includes("robux")) return "🪙";
  if (t.includes("minecoin")) return "🪙";
  if (t.includes("coin")) return "🪙";
  if (t.includes("bond")) return "🪙";
  if (t.includes("uc")) return "🪙";
  if (t.includes("cp")) return "🎯";
  if (t.includes("vp")) return "🎯";
  if (t.includes("fc points")) return "⚽";
  if (t.includes("v-buck") || t.includes("vbucks")) return "🪙";
  if (t.includes("cod points")) return "🎯";
  if (t.includes("simcash") || t.includes("cash")) return "💵";
  if (t.includes("pass") || t.includes("membership")) return "🎫";
  return "🎮";
}

// (Update: gunakan emoji dinamis untuk semua item)
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
  message += `Pesanan akan diproses setelah pembayaran selesai`;

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
