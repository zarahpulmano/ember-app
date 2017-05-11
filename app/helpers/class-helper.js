import Ember from 'ember';

export function classHelper(params,namedArgs) {
  let logic=params[0];
  let trueClass=params[1];
  let falseClass=params[2];  
  return new Ember.String.htmlSafe(logic?trueClass:falseClass);

}

export default Ember.Helper.helper(classHelper);
