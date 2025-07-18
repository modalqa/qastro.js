// Rule: checkTitle
export default function checkTitle(report) {
  const title = document.querySelector('title');
  if (!title || !title.textContent.trim()) {
    report({
      rule: 'checkTitle',
      message: 'Halaman tidak memiliki <title> yang jelas.'
    });
  }
}
