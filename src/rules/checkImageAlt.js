// Rule: checkImageAlt
export default function checkImageAlt(report) {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.hasAttribute('alt') || !img.getAttribute('alt').trim()) {
      report({
        rule: 'checkImageAlt',
        message: 'Gambar tanpa atribut alt ditemukan.',
        element: img
      });
    }
  });
}
