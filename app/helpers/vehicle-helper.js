import Ember from 'ember';

export function formatCurrency(params) {
  let amount =  Number(params[0]).toLocaleString('en'); 
  return `$${amount}`;
}

export default Ember.Helper.helper(formatCurrency);
