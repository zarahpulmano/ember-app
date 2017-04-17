import Ember from 'ember';

export function formatCurrency(params) {
  let amount = params[0];
  return `$${amount}`;
}

export default Ember.Helper.helper(formatCurrency);
