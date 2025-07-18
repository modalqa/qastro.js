// Rule: checkPasswordAutocomplete
export default function checkPasswordAutocomplete(report) {
  const pwFields = document.querySelectorAll('input[type="password"]');
  pwFields.forEach(input => {
    const ac = input.getAttribute('autocomplete');
    if (!ac || ac === 'on') {
      report({
        rule: 'checkPasswordAutocomplete',
        message: 'Password field should have autofill disabled with autocomplete="new-password',
        element: input
      });
    }
  });
}
