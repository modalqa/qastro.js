// QAstro.js - Auto-run modular accessibility & security linter

import checkTitle from './rules/checkTitle.js';
import checkImageAlt from './rules/checkImageAlt.js';
import checkFormLabel from './rules/checkFormLabel.js';

import checkNoInlineScript from './rules/checkNoInlineScript.js';
import checkNoInlineStyle from './rules/checkNoInlineStyle.js';
import checkFormAutocomplete from './rules/checkFormAutocomplete.js';
import checkMetaSecurity from './rules/checkMetaSecurity.js';
import checkPasswordAutocomplete from './rules/checkPasswordAutocomplete.js';
import checkFormMethodPost from './rules/checkFormMethodPost.js';
import checkInlineScriptXSS from './rules/checkInlineScriptXSS.js';

const defaultRules = [
  checkTitle,
  checkImageAlt,
  checkFormLabel,
  checkNoInlineScript,
  checkNoInlineStyle,
  checkFormAutocomplete,
  checkMetaSecurity,
  checkPasswordAutocomplete,
  checkFormMethodPost,
  checkInlineScriptXSS
];

function report(result) {
  const { rule, message, element } = result;
  if (element) {
    console.warn(`[QAstro] [${rule}] ${message}`, element);
  } else {
    console.warn(`[QAstro] [${rule}] ${message}`);
  }
}

function runQAstro({ rules = defaultRules } = {}) {
  rules.forEach(rule => {
    try {
      rule(report);
    } catch (e) {
      console.error(`[QAstro] Error in rule ${rule.name}:`, e);
    }
  });
}

// Auto-run on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => runQAstro());
} else {
  runQAstro();
}

// Export for extension
export default runQAstro;
export {
  checkTitle,
  checkImageAlt,
  checkFormLabel,
  checkNoInlineScript,
  checkNoInlineStyle,
  checkFormAutocomplete,
  checkMetaSecurity,
  checkPasswordAutocomplete,
  checkFormMethodPost,
  checkInlineScriptXSS
};
