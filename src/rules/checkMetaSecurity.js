// Rule: checkMetaSecurity
export default function checkMetaSecurity(report) {
  const metaCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
  if (!metaCSP) {
    report({
      rule: 'checkMetaSecurity',
      message: 'Meta Content-Security-Policy tidak ditemukan.'
    });
  }
  const metaXFO = document.querySelector('meta[http-equiv="X-Frame-Options"]');
  if (!metaXFO) {
    report({
      rule: 'checkMetaSecurity',
      message: 'Meta X-Frame-Options not found'
    });
  }
}
