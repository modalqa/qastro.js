// Rule: checkNoInlineStyle
export default function checkNoInlineStyle(report) {
  const elements = document.querySelectorAll('[style]');
  elements.forEach(el => {
    report({
      rule: 'checkNoInlineStyle',
      message: 'Inline style terdeteksi. Hindari penggunaan atribut style langsung.',
      element: el
    });
  });
}
