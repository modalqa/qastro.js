// Rule: checkNoInlineStyle
export default function checkNoInlineStyle(report) {
  const elements = document.querySelectorAll('[style]');
  elements.forEach(el => {
    report({
      rule: 'checkNoInlineStyle',
      message: 'Inline style detected. Avoid using the style attribute directly',
      element: el
    });
  });
}
