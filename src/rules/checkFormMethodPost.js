// Rule: checkFormMethodPost
export default function checkFormMethodPost(report) {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const method = (form.getAttribute('method') || '').toLowerCase();
    if (method !== 'post') {
      report({
        rule: 'checkFormMethodPost',
        message: '<form> tanpa method POST ditemukan. Hindari GET untuk data sensitif.',
        element: form
      });
    }
  });
}
