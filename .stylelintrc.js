const { propertyOrdering, selectorOrdering } = require('stylelint-semantic-groups')

module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    'order/order': selectorOrdering,
    'order/properties-order': propertyOrdering,
  },
}

