

# QAstro.js

QAstro.js is a modular library for automatic accessibility and security linting of web pages. Easily extensible with new rules.

## Features
- 🔄 Auto-run when the page loads
- 🧪 Modular rules (checkTitle, checkImageAlt, checkFormLabel, etc)
- 📋 Reports in the browser console
- 🧩 Easily extensible with your own rules

## Project Structure

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

## How to Build

1. Install dependencies:
   ```bash
   npm install
   ```
2. Build:
   ```bash
   npm run build
   ```

## Usage

Include `dist/qastro.min.js` in your web page. Reports will automatically appear in the browser console.

## Extending Rules

Add a new rule file in `src/rules/` and import it in `src/index.js`.
