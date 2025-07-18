// Rule: checkFormAutocomplete
export default function checkFormAutocomplete(report) {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    if (!form.hasAttribute('autocomplete')) {
      report({
        rule: 'checkFormAutocomplete',
        message: 'Form tanpa atribut autocomplete ditemukan.',
        element: form
      });
    }
  });
}
