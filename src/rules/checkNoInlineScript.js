// Rule: checkNoInlineScript
export default function checkNoInlineScript(report) {
  const scripts = document.querySelectorAll('script');
  scripts.forEach(script => {
    if (!script.src && script.textContent.trim()) {
      report({
        rule: 'checkNoInlineScript',
        message: 'Inline <script> terdeteksi. Hindari inline script untuk keamanan.' ,
        element: script
      });
    }
  });
}
