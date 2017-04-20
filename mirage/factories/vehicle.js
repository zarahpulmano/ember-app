import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id(i) { return (1000+i);},
  vehicleMovementId(i) { return (1000+i);},
  year() { return faker.random.number({min:1990, max:2000})},
  make(i) { return `Make ${i}`; },
  model(i) { return `Model ${i}`; },
  trim(i) { return `Trim ${i}`; },
  color() { return faker.commerce.color(); },
  mileage() {return faker.random.number({min:20000, max:45000})},
  askingPrice() { return faker.finance.amount(); },
  imageFile() { return faker.random.image(); },
  location() { return faker.address.city();}, 
  inspected() { return faker.random.boolean();},
  kbb() { return faker.finance.amount(); },
  zipcode() { return faker.address.zipCode(); },
});