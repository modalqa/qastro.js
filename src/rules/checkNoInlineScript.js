// Rule: checkNoInlineScript
export default function checkNoInlineScript(report) {
  const scripts = document.querySelectorAll('script');
  scripts.forEach(script => {
    if (!script.src && script.textContent.trim()) {
      report({
        rule: 'checkNoInlineScript',
        message: 'Inline <script> detected. Avoid inline scripts for security' ,
        element: script
      });
    }
  });
}
