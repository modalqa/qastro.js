// Rule: checkFormLabel
export default function checkFormLabel(report) {
  const inputs = document.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    if (
      !input.hasAttribute('aria-label') &&
      !input.hasAttribute('aria-labelledby') &&
      !input.id || !document.querySelector(`label[for='${input.id}']`)
    ) {
      report({
        rule: 'checkFormLabel',
        message: 'Form input tanpa label ditemukan.',
        element: input
      });
    }
  });
}
