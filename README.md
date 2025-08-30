# TopUp Game - Style Duniagames

Halaman top-up game dengan tampilan modern seperti Duniagames. Tanpa sistem keranjang, langsung checkout untuk pengalaman yang lebih cepat dan mudah.

## 🎮 Fitur Utama

### ✨ Tampilan Modern (Duniagames Style)
- **Clean Design**: Tampilan bersih dengan background putih dan card-based layout
- **Hero Banner**: Banner gradient yang menarik di bagian atas
- **Category Filter**: Filter game berdasarkan kategori (MOBA, Battle Royale, FPS, RPG, dll)
- **Mobile-First**: Responsif sempurna di semua perangkat

### 🎯 Game Lengkap (20+ Game)
**MOBA Games:**
- Mobile Legends, Arena of Valor, Heroes Evolved

**Battle Royale:**
- Free Fire, PUBG Mobile, Call of Duty Mobile, Apex Legends Mobile

**FPS Games:**
- Valorant, Counter Strike 2

**RPG Games:**
- Genshin Impact, Honkai Star Rail, Ragnarok M, Dragon Nest M

**Simulation:**
- Roblox, Minecraft, The Sims Mobile

**Other Games:**
- Among Us, Clash of Clans, Clash Royale, Brawl Stars, Stumble Guys, Fall Guys

### 🚀 Fitur Unggulan
- **Direct Purchase**: Tanpa keranjang, langsung beli untuk proses yang lebih cepat
- **Real-time Validation**: Validasi form secara real-time
- **Order Summary**: Ringkasan pesanan yang jelas sebelum checkout
- **WhatsApp Integration**: Checkout langsung ke WhatsApp dengan pesan terformat
- **Search & Filter**: Cari game dan filter berdasarkan kategori

## 📁 Struktur File

```
topup/
├── index.html          # Struktur HTML dengan style Duniagames
├── style.css           # CSS modern tanpa glassmorphism
├── script.js           # JavaScript tanpa sistem keranjang
└── README.md           # Dokumentasi ini
```

## 🚀 Cara Penggunaan

### 1. Setup Dasar
1. Download atau clone semua file ke folder web server
2. Buka `script.js` dan ubah nomor WhatsApp di baris 8:
   ```javascript
   whatsappNumber: '+6281234567890', // Ganti dengan nomor Anda
   ```

### 2. Kustomisasi Game
Edit array `GAMES_DATA` di `script.js` untuk menambah/mengubah game:
```javascript
{
    id: 'game-id',
    name: 'Nama Game',
    icon: '🎮', // Emoji icon
    category: 'moba', // moba, battle-royale, fps, rpg, simulation, other
    popular: true, // Tampil di section populer
    denominations: [
        { amount: 5000, item: '50 Diamonds', popular: true }
    ]
}
```

### 3. Menambah Kategori Baru
1. Tambah kategori di HTML (section categories)
2. Update fungsi `getCategoryName()` di JavaScript
3. Tambah game dengan kategori baru

## 🎨 Kustomisasi Tampilan

### Warna Tema
Ubah warna di `style.css`:
```css
/* Primary color (blue) */
.bg-blue-600 { background-color: #2563eb; }

/* Secondary colors */
.text-gray-800 { color: #1f2937; }
```

### Hero Banner
Sesuaikan gradient di HTML:
```html
<section class="bg-gradient-to-r from-blue-600 to-purple-600">
```

## 📱 Flow Pembelian

1. **Pilih Game**: User klik game card
2. **Input Player ID**: Masukkan Player ID/User ID
3. **Pilih Nominal**: Pilih dari daftar nominal yang tersedia
4. **Data Pembeli**: Isi nama dan nomor WhatsApp
5. **Review Order**: Cek ringkasan pesanan
6. **Checkout**: Langsung ke WhatsApp dengan pesan terformat

## 🔧 Konfigurasi

### Format Pesan WhatsApp
Template pesan dapat dikustomisasi di fungsi `generateWhatsAppMessage()`:
```javascript
let message = `*PESANAN TOPUP GAME*\n\n`;
message += `*Data Pembeli:*\n`;
message += `Nama: ${buyerName}\n`;
// ... dst
```

### Validasi Form
- **Player ID**: Tidak boleh kosong
- **Nama**: Tidak boleh kosong  
- **Nomor HP**: Minimal 9 digit
- **Nominal**: Harus dipilih

## 🎯 Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Features Used**: ES6+, CSS Grid, Flexbox

## 📊 Performance

- **Lightweight**: Total size < 150KB
- **No Dependencies**: Hanya Tailwind CSS CDN
- **Fast Loading**: Optimized untuk loading cepat
- **SEO Friendly**: Semantic HTML structure

## 🔄 Perbedaan dari Versi Sebelumnya

### ❌ Dihapus:
- Sistem keranjang belanja
- localStorage persistence
- Sistem promo code
- Glassmorphism effects
- Multiple item purchase

### ✅ Ditambah:
- 20+ game populer
- Category filtering
- Direct purchase flow
- Real-time form validation
- Order summary preview
- Duniagames-style UI

## 🐛 Troubleshooting

### Game Tidak Muncul
- Cek console browser untuk error JavaScript
- Pastikan `GAMES_DATA` array valid
- Refresh halaman

### WhatsApp Tidak Terbuka
- Pastikan nomor WhatsApp format internasional (+62xxx)
- Cek browser popup blocker
- Test di perangkat mobile

### Form Tidak Bisa Submit
- Pastikan semua field required terisi
- Cek validasi JavaScript
- Player ID tidak boleh kosong

## 📞 Support

Untuk pertanyaan atau bantuan:
- **WhatsApp**: +6281234567890 (ganti dengan nomor Anda)

## 📄 License

Project ini bebas digunakan untuk keperluan komersial maupun personal.

---

**Dibuat dengan ❤️ menggunakan Tailwind CSS & Vanilla JavaScript**
**Style inspired by Duniagames**

*Last updated: 2024*
