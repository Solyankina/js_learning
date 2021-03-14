'use strict';
function generateTable() {
	let table = [];
	let isBlack = true;

	for (let i = 0; i < 8; i++) {
		let row = [];
		for (let j = 0; j < 8; j++) {
			if(j != 0) {
				isBlack = !isBlack;
			}
			let cell = {
				isBlack
			}
			row.push(cell);
		}
		table.push(row);
	}
	return table;
}

function renderTable(target) {
	let table = generateTable();
	let tableElement = document.createElement('table');
	target.appendChild(tableElement);
	for (let i = 0;  i < table.length; i++) {
		let row = table[i];
		let trElement = document.createElement('tr');
		tableElement.appendChild(trElement);
		trElement.innerHTML = '<td>' + (i + 1) + '</td>';

		for (let j = 0; j < row.length; j++) {
			let cell = row[j]; 
			let tdElement = document.createElement('td');

			if(cell.isBlack) {
				tdElement.classList.add('cell_black');
			}
			trElement.appendChild(tdElement);
		}
	}

	let lettersTr = document.createElement('tr');
	let letters  = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
	for (let i = 0; i < letters.length; i++) {
		lettersTr.insertAdjacentHTML('beforeend', '<td>' + letters[i] + '</td>');
	}
	tableElement.appendChild(lettersTr);
}




renderTable(document.body);




