var faker = require('faker');

let fakeProduct = faker.commerce.productName()
let fakePrice = faker.commerce.price()

for(var i = 0; i < 10; i++) {
	console.log(fakeProduct + " - $"  + fakePrice );
	fakeProduct = faker.commerce.productName();
	fakePrice = faker.commerce.price();
}


