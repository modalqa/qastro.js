

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

## CI/CD & Automation

QAstro.js can be integrated into your CI/CD pipeline or automated test environment. You can run QAstro.js in a headless browser or Node.js environment (e.g., with jsdom, Puppeteer, or Playwright) to lint your pages automatically and fail the build if issues are found.

### Example: Node.js + jsdom

Install jsdom:
```bash
npm install jsdom
```

Example script:
```js
import { JSDOM } from 'jsdom';
import runQAstro from './src/index.js';

const dom = new JSDOM('<!doctype html><html><head></head><body></body></html>', { url: 'http://localhost' });
global.document = dom.window.document;
global.window = dom.window;

let issues = [];
runQAstro({
  report: (result) => issues.push(result)
});

if (issues.length > 0) {
  console.error('QAstro found issues:', issues);
  process.exit(1); // fail CI
}
```

You can adapt this approach for Playwright, Puppeteer, or other test runners to automate accessibility and security linting as part of your build process.
