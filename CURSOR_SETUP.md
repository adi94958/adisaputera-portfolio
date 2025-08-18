# Custom Cursor Setup

## Cara Menggunakan Custom Cursor dengan Image

Untuk menggunakan custom cursor dengan image Anda sendiri:

### 1. Siapkan Image Cursor
- Buat 2 image untuk cursor:
  - `cursor-normal.png` - untuk cursor biasa
  - `cursor-pointer.png` - untuk cursor saat hover di button/link
- Ukuran yang disarankan: 24x24px atau 32x32px
- Format: PNG dengan background transparan

### 2. Upload Image ke Folder Public
```
public/
  images/
    cursor-normal.png
    cursor-pointer.png
```

### 3. Update MainLayout
```tsx
<CustomCursor 
  normalCursor="/images/cursor-normal.png"
  pointerCursor="/images/cursor-pointer.png"
/>
```

## Fitur yang Tersedia

### Current Implementation:
- ✅ **SVG Fallback**: Jika tidak ada image, menggunakan SVG yang indah
- ✅ **Auto Detection**: Otomatis detect button, link, dan element yang bisa diklik
- ✅ **Smooth Animation**: Animasi smooth dengan Framer Motion
- ✅ **Responsive**: Scale dan rotate saat hover
- ✅ **Z-index Tinggi**: Selalu muncul di atas semua element

### Deteksi Otomatis untuk Pointer:
- Button elements
- Link elements (a tags)
- Elements dengan role="button"
- Elements dengan class "cursor-pointer"
- Input, textarea, select elements
- Elements dengan onclick handlers

## Customization

### Mengubah Ukuran Cursor:
```tsx
// Di CustomCursor.tsx, ubah className:
className="w-6 h-6" // current size
className="w-8 h-8" // larger size
```

### Mengubah Animasi:
```tsx
// Scale saat hover
animate={{
  scale: isPointer ? 1.5 : 1, // increase scale
}}

// Rotasi saat hover
animate={{
  rotate: isPointer ? 30 : 0, // increase rotation
}}
```

### Menambah Efek Khusus:
```tsx
// Tambah glow effect
className="w-6 h-6 object-contain drop-shadow-lg filter blur-[0.5px]"

// Tambah color filter
className="w-6 h-6 object-contain drop-shadow-lg hue-rotate-180"
```

## Contoh Image Cursor

Anda bisa membuat cursor image dengan tools seperti:
- Photoshop
- GIMP
- Figma
- Canva
- Online cursor generators

Tips untuk membuat cursor yang bagus:
1. Gunakan ukuran 24x24px atau 32x32px
2. Pastikan hotspot (titik klik) di ujung kiri atas
3. Gunakan kontras yang baik agar terlihat di semua background
4. Buat versi pointer yang sedikit berbeda (bisa lebih besar atau berbeda warna)
