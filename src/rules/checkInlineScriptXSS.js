// Rule: checkInlineScriptXSS
export default function checkInlineScriptXSS(report) {
  const metaCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
  if (!metaCSP) {
    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => {
      if (!script.src && script.textContent.match(/[<>&"']/)) {
        report({
          rule: 'checkInlineScriptXSS',
          message: 'Inline script berpotensi XSS ditemukan dan CSP tidak aktif.',
          element: script
        });
      }
    });
  }
}
