export default function formatNumber(n) {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
//# sourceMappingURL=format-number.js.map
