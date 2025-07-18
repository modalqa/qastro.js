// Rule: checkPasswordAutocomplete
export default function checkPasswordAutocomplete(report) {
  const pwFields = document.querySelectorAll('input[type="password"]');
  pwFields.forEach(input => {
    const ac = input.getAttribute('autocomplete');
    if (!ac || ac === 'on') {
      report({
        rule: 'checkPasswordAutocomplete',
        message: 'Field password sebaiknya menonaktifkan autofill dengan autocomplete="new-password".',
        element: input
      });
    }
  });
}
