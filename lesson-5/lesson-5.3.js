'use strict';
const cart = {
	products: [
	    {	name: 'avocado',
	    	price: 200,
	    	count: 2,
		},

	    {	name: 'apple',
	    	price: 30,
	    	count: 10,
		},

	    {	name: 'lemon',
			price: 40,
			count: 10,
		},

	    {	name: 'mango',
			price: 300,
			count: 1,
		}
	],

	totalPrice() {
		let sum = 0;
		for (var i = 0; i < this.products.length; i++) {
			let product = this.products[i];
			sum += product.price * product.count;
		}
		return sum;
	},

	totalCount() {
		let count = 0;
		for (var i = 0; i < this.products.length; i++) {
			count += this.products[i].count;
		}
		return count;
	}
}

function renderCart(target) {
	let message = 'Корзина пуста';

	if (cart.length != 0) {
		message = 'В корзине: ' + cart.totalCount() + ' товаров на сумму ' + cart.totalPrice() + ' рублей';
	}

	target.innerHTML = message;
}


renderCart(document.getElementById('catalog'));