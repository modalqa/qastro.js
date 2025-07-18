
# QAstro.js

QAstro.js adalah library modular untuk linting aksesibilitas dan keamanan halaman web secara otomatis saat halaman dimuat. Mudah di-extend dengan rule baru.

## Fitur
- 🔄 Auto-run saat halaman dimuat
- 🧪 Modular rule (checkTitle, checkImageAlt, checkFormLabel, dst)
- 📋 Laporan di browser console
- 🧩 Bisa di-extend dengan rule lain

## Struktur Project

```
qastro/
├── src/
│   ├── rules/
│   │   ├── checkTitle.js
│   │   ├── checkImageAlt.js
│   │   └── checkFormLabel.js
│   └── index.js
├── dist/
│   └── qastro.min.js
├── rollup.config.js
├── package.json
└── README.md
```

## Cara Build

1. Install dependencies:
   ```bash
   npm install
   ```
2. Build:
   ```bash
   npm run build
   ```

## Cara Pakai

Include `dist/qastro.min.js` di halaman web. Laporan akan muncul otomatis di console.

## Extend Rule

Tambahkan file rule baru di `src/rules/` dan import di `src/index.js`.
