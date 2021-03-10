'use strict';

const catalog = {
	products: [
	    product(1,'avocado', 200),
		product(2,'apple', 30)
	],

	add(product) {
		function find(item, index, cart) {
			return item.id == product.id;
		}

		let item = this.products.find(find)

		if (item) {
			item.name = product.name;
			item.price = product.price;
		} else {
			this.products.push(product);
		}
		
		this.render(this.target);
	},

	render(target) {
		this.target = target
		target.innerHTML = '';

		let title = document.createElement('h3');
		title.textContent = 'Каталог';
	    target.appendChild(title); 

		let table = document.createElement('table');
		let header = document.createElement('tr');

		['Наименование', 'Цена', ''].forEach((name) => {
			let headerCell = document.createElement('th');
			headerCell.textContent = name;
            header.appendChild(headerCell);
        })

		table.appendChild(header);

		this.products.forEach((product) => {
			let row = document.createElement('tr');
			product.render(row);
			table.appendChild(row);
		})  
	    target.appendChild(table);     
	}
}

function product(id, name, price) {
	return {
		id,
		name,
		price,
		render(target) {
			let nameCell = document.createElement('td')
			nameCell.textContent = this.name;
			target.appendChild(nameCell);

			let priceCell = document.createElement('td')
			priceCell.textContent = this.price;
			target.appendChild(priceCell);

			let buttonCell = document.createElement('td')
			let button = document.createElement('button')
			button.textContent = "Купить";
			button.addEventListener('click', (event) => {
                cart.add(this);
            });
			buttonCell.appendChild(button);
			target.appendChild(buttonCell);
		}
	}
}


const cart = {
	products: [],

	totalPrice() {
		let sum = 0;
		this.products.forEach((product) => {
			sum += product.price * product.count;
		})
		return sum;
	},

	totalCount() {
		let count = 0;
		this.products.forEach((product) => {
			count += product.count;
		})
		return count;
	},

	add(product) {
		function find(item, index, cart) {
			return item.id == product.id;
		}

		let item = this.products.find(find);

		if (item) {
			++item.count;
		} else {
			product.count = 1;
			this.products.push(product);
		}
		
		this.render(this.target);
	},

	render(target) {
		this.target = target
		let message = 'Корзина пуста';

		if (this.length != 0) {
			message = '<h3>Корзина</h3>В корзине: ' + this.totalCount() + ' товаров на сумму ' + this.totalPrice() + ' рублей';
		}

		target.innerHTML = message;
	}
}

catalog.render(document.getElementById('catalog'));
cart.render(document.getElementById('cart'));