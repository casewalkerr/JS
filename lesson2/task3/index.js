let goodNumber = 17;
let anotherNumber = goodNumber;
anotherNumber = 77;
let customer = { name: 'John', age: 17 };
let anotherCustomer = customer;
customer.age = 20;
console.log(customer.age);
console.log(anotherCustomer.age);
console.log(goodNumber);
console.log(anotherNumber);