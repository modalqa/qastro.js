// Rule: checkFormMethodPost
export default function checkFormMethodPost(report) {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const method = (form.getAttribute('method') || '').toLowerCase();
    if (method !== 'post') {
      report({
        rule: 'checkFormMethodPost',
        message: '<form> No POST method found. Avoid GET for sensitive data',
        element: form
      });
    }
  });
}
